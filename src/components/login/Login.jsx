import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from '../../Redux/auth/authSlice'
import { toast } from 'react-toastify'

function Login() {
  const [user, setUser] = useState({ email: '', password: '' })
  const [hasAttemptedLogin, setHasAttemptedLogin] = useState(false)  // <-- useState here

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = useSelector((state) => state.auth)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUser((prev) => ({ ...prev, [name]: value }))
  }

  const handleLogin = (e) => {
    e.preventDefault()
    setHasAttemptedLogin(true) // <-- state setter
    dispatch(loginUser(user))
  }

  // Success toast and redirect
  useEffect(() => {
    if (auth.token && hasAttemptedLogin) {
      toast.success('Login successful!')
      console.log('Redirecting to /dashboard in 2s...')

   setTimeout(() => {
        console.log('Navigating now...')
        navigate('/dashboard')
      }, 2000)

      setHasAttemptedLogin(false)
    }

  }, [auth.token, hasAttemptedLogin, navigate])

  

  // Error toast
  useEffect(() => {
    if (auth.error && hasAttemptedLogin) {  // <-- use state, NOT ref
      toast.error('Email or Password is incorrect', {
        position: 'top-right',
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored'
      })
    }
  }, [auth.error, hasAttemptedLogin, navigate])

  return (
    <section className="flex flex-col items-center pt-6">
      <div className="w-full bg-[var(--box1)] rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-[var(--mainColor)] md:text-2xl">
            Vendor Login
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-[var(--mainColor)]">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="you@example.com"
                value={user.email}
                onChange={handleInputChange}
                required
                className="bg-[var(--mainbg)] border border-[var(--placeholderClr)] text-[var(--placeholderClr)] sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-[var(--mainColor)]">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                value={user.password}
                onChange={handleInputChange}
                required
                className="bg-[var(--mainbg)] border border-[var(--placeholderClr)] text-[var(--placeholderClr)] sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
              />
            </div>
            <button
              type="submit"
              disabled={auth.loading}
              className={`w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center
              ${auth.loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {auth.loading ? 'Logging in...' : 'Login'}
            </button>
            <p className="text-sm font-light text-gray-500">
              New User? <Link to="/signup" className="font-medium text-[var(--linkColor)] hover:underline">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login
