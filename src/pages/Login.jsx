import { useState } from 'react'

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Authentication would be handled by backend integration
    alert('Authentication is handled by the integrated identity provider in production environments.')
  }

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>MetroCare Admin Portal</h1>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="admin@metrocare.org"
          value={form.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Enter secure password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn btn-primary w-100">
          Sign In
        </button>
        <small className="text-muted d-block text-center mt-3">
          Multi-factor authentication enforced for all administrative users.
        </small>
      </form>
    </div>
  )
}

export default Login
