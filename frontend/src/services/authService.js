const API_URL = import.meta.env.VITE_API_URL || '/api'
const genericErrorMessage = 'Unable to complete this request.'
const unavailableErrorMessage = 'Unable to reach the server. Please try again.'
const serverErrorMessage = 'The server could not complete your request. Please try again.'

async function request(path, options = {}) {
	let response

	try {
		response = await fetch(`${API_URL}${path}`, {
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
				...(options.headers || {})
			},
			...options
		})
	} catch {
		const error = new Error('Unable to reach the server. Please try again.')
		error.status = 0
		throw error
	}

	if (response.status === 204) return null

	const data = await response.json().catch(() => ({}))
	if (!response.ok) {
		const message = [502, 503, 504].includes(response.status)
			? unavailableErrorMessage
			: response.status >= 500
				? serverErrorMessage
				: data.error || data.message || genericErrorMessage
		const error = new Error(message)
		error.status = response.status
		throw error
	}

	return data
}

export const authService = {
	login: (credentials) => request('/auth/login', {
		method: 'POST',
		body: JSON.stringify(credentials)
	}),
	register: (details) => request('/auth/register', {
		method: 'POST',
		body: JSON.stringify(details)
	}),
	verifyEmail: (token) => request(`/auth/verify-email?token=${encodeURIComponent(token)}`),
	resendVerification: (details) => request('/auth/resend-verification', {
		method: 'POST',
		body: JSON.stringify(details)
	}),
	forgotPassword: (details) => request('/auth/forgot-password', {
		method: 'POST',
		body: JSON.stringify(details)
	}),
	resetPassword: (details) => request('/auth/reset-password', {
		method: 'POST',
		body: JSON.stringify(details)
	}),
	me: () => request('/auth/me'),
	logout: () => request('/auth/logout', { method: 'POST' })
}
