# DiSTEM Rwanda

## Offline-First Digital STEM Learning Platform

DiSTEM Rwanda is an offline-first digital STEM learning platform designed to improve access to quality STEM education for learners and teachers, particularly in schools with limited or unreliable internet connectivity.

## Vision

To become a leading digital STEM learning platform that empowers learners regardless of their location or internet connectivity.

## Mission

To provide curriculum-aligned STEM learning content, interactive learning tools, AI-assisted learning support, teacher resources, and data-driven educational insights.

## Motto

> Offline Today, Future Ready Tomorrow.

## Project Structure

- `docs/` — Project documentation
- `frontend/` — User interface
- `backend/` — Server-side application and APIs
- `database/` — Database design and data resources
- `tests/` — Testing resources

## Project Status

Phase 4.2 adds an Express, PostgreSQL, and Prisma authentication foundation. Course content and lesson completion remain frontend/static and LocalStorage-based until Phase 4.3.

## Authentication development setup

1. Install PostgreSQL and create a `distem_rwanda` database.
2. Copy `backend/.env.example` to `backend/.env` and set `DATABASE_URL` and `FRONTEND_ORIGIN`.
3. In `backend/`, run `npm install`, `npm run prisma:migrate -- --name init`, `npm run prisma:seed`, then `npm run dev`.
4. Run the frontend with `npm run dev` in `frontend/`. It uses `http://localhost:4000/api` by default; set `VITE_API_URL` if the API is hosted elsewhere.

Public registration, when introduced in a later UI flow, always receives the `STUDENT` role. Roles are database-controlled. Authentication uses an HttpOnly session cookie; password hashes and session tokens are never returned to the browser.

Email verification

New student accounts are unverified until the email link at `/verify-email?token=...` is opened. Verification tokens are random, hashed in PostgreSQL, expire after `EMAIL_VERIFICATION_TTL_HOURS` (24 by default), and are single-use. Unverified login attempts are rejected and can request a replacement link. Resend responses are generic and do not reveal whether an account exists.

In development, the verification link is printed to the backend console because no mail provider is configured in this repository. Production deployments must provide a real email provider and must not log verification links or credentials. Set `FRONTEND_URL` to the public frontend URL and run `npm run prisma:deploy` in `backend/` after installing dependencies.
