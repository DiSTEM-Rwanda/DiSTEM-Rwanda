# DiSTEM Rwanda

## Offline-First Digital STEM Learning Platform

DiSTEM Rwanda is an offline-first digital STEM learning platform designed to improve access to quality STEM education for students, particularly in schools with limited or unreliable internet connectivity.

## Vision

To become a leading digital STEM learning platform that empowers learners regardless of their location or internet connectivity.

## Mission

To provide curriculum-aligned STEM learning content and interactive learning tools for students, including where internet connectivity is limited or unreliable.

## Motto

> Offline Today, Future Ready Tomorrow.

## Project Structure

- `docs/` — Project documentation
- `frontend/` — User interface
- `backend/` — Server-side application and APIs
- `database/` — Database design and data resources
- `tests/` — Testing resources

## Progress synchronization

Learning content remains bundled in the frontend. Completion and Virtual Lab records are first saved in IndexedDB v3 with `syncStatus: "pending"`. When an authenticated student is online, the sync service sends pending records to `POST /api/sync/progress`; the server validates the bundled lesson/lab identifier and uses the authenticated server user as the owner. The client marks a record `synced` only after the API confirms it. Connection failures and 5xx responses leave records pending; validation/authentication failures are retained locally as `failed` with a diagnostic reason.

Each record's stable IndexedDB ID is submitted as `clientRecordId`. PostgreSQL enforces uniqueness per authenticated user and client record ID, so retries after a lost response are idempotent. Records with an older timestamp cannot overwrite a newer accepted version of the same client record.

Manual acceptance: log in online, complete a lesson or lab, disconnect and create another local record, reconnect, then confirm `/api/sync/progress` accepts each pending record and a repeat request reports `duplicate` without adding a database row.

## Authentication development setup

1. Install PostgreSQL and create a `distem_rwanda` database.
2. Copy `backend/.env.example` to `backend/.env` and set `DATABASE_URL` and `FRONTEND_ORIGIN`.
3. In `backend/`, run `npm install`, `npm run prisma:migrate -- --name init`, `npm run prisma:seed`, then `npm run dev`.
4. Run the frontend with `npm run dev` in `frontend/`. It uses `/api` by default through the Vite development proxy; set `VITE_API_URL` only if the API is hosted elsewhere.

Public registration, when introduced in a later UI flow, always receives the `STUDENT` role. Roles are database-controlled. Authentication uses an HttpOnly session cookie; password hashes and session tokens are never returned to the browser.

Email verification

New student accounts are unverified until the email link at `/verify-email?token=...` is opened. Verification tokens are random, hashed in PostgreSQL, expire after `EMAIL_VERIFICATION_TTL_HOURS` (24 by default), and are single-use. Unverified login attempts are rejected and can request a replacement link. Resend responses are generic and do not reveal whether an account exists.

Verification links and tokens are never logged by the backend. Configure the email provider and set `FRONTEND_URL` to the public frontend URL, then run `npm run prisma:deploy` in `backend/` after installing dependencies.

## Production deployment preparation

DiSTEM Rwanda remains offline-first in production: the PWA application shell, lessons, Virtual Labs, local accounts/sessions, and lesson/lab progress live on the learner's device. Network access is only used for optional account creation and email verification, authenticated session services, and synchronization of pending progress. A network failure must never prevent a learner from opening already-cached content or recording local progress.

No public deployment is configured in this repository. When a hosting provider and public URLs are selected, configure the following without committing any real values:

| Location | Variable | Purpose |
| --- | --- | --- |
| Backend | `DATABASE_URL` | Production PostgreSQL connection string. |
| Backend | `NODE_ENV=production` | Enables HTTPS-only session cookies. |
| Backend | `PORT` | Provider-supplied listening port. |
| Backend | `FRONTEND_URL` | Public URL used in email-verification links. |
| Backend | `FRONTEND_ORIGIN` | Comma-separated allow-list of public frontend origins for credentialed CORS. |
| Backend | `SESSION_COOKIE_SAME_SITE` | Use `lax` for same-site deployments; use `none` only for a deliberately cross-site frontend/API setup. |
| Backend | `SESSION_COOKIE_DOMAIN` | Optional shared cookie domain; leave empty unless required. |
| Backend | `RESEND_API_KEY`, `RESEND_FROM_EMAIL` | Production email provider credentials and verified sender. |
| Backend | `MVP_OFFLINE_MODE=false` | Requires email verification for production server login while preserving already-created local offline credentials. |
| Frontend | `VITE_API_URL` | `/api` for a same-origin reverse proxy, or the selected public HTTPS API origin for separate deployments. |

### Build and release sequence

1. Copy the two `.env.example` files to local, untracked environment files and supply production values through the selected provider's secret manager.
2. Install dependencies, then run `npm run prisma:generate` in `backend/`.
3. Run `npm run prisma:deploy` in `backend/`; never use a destructive reset against production data.
4. Run `npm run build` in `frontend/`, and serve the generated `frontend/dist` assets over HTTPS.
5. Start the API with `npm start` in `backend/`. `GET /api/health` is the non-sensitive health check.
6. Configure the static host or reverse proxy to return `index.html` for browser navigation to application routes. This is required for React Router deep links such as `/dashboard`, `/courses/...`, and `/virtual-lab/...`.
7. Keep `/api` on the network path. The service worker caches static application assets only and bypasses API and non-GET requests; IndexedDB v3 remains the source of local offline state.

For the simplest cookie-safe deployment, serve the frontend and API under one public HTTPS origin with `/api` reverse-proxied to Express. Separate frontend/API origins are supported through the explicit CORS and cookie variables above; never use wildcard CORS with credentialed authentication.
