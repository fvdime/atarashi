"use client"

import { useState, useCallback } from "react"
import axios from 'axios'
import { useRouter } from "next/navigation"
import { signIn } from 'next-auth/react'
import toast from "react-hot-toast"

const AuthForm = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)

  const [variant, setVariant] = useState('login')

  const router = useRouter()

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
  }, [])

  const login = useCallback(async () => {
    try {
      setLoading(true)

      await axios.post('/api/login', {email, password})

      // await signIn('credentials', {email, password})

      toast.success('Logged in successfully!')
      
      router.push('/')
      
    } catch (error) {
      toast.error('Login is unsuccessful')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, [email, password, router])

  const register = useCallback(async () => {
    try {
      setLoading(true)

      await axios.post('/api/register', {
        email, name, password
      })
      toast.success('Registered successfully!')

      login()

    } catch (error) {

      toast.error('Register is unsuccessful')
      console.log(error)

    } finally { setLoading(false) }
  }, [email, name, password, login])

  return (
    <div>
       <section>
        <div>
          <div className="flex items-center justify-center text-slate-950">
            <div className="mb-12 md:mb-0 px-8 py-24">
              <form className="border border-slate-800 px-16 py-8 rounded-md">
                <div className="flex items-center justify-center mb-5">
                  <p className="text-lg font-bold">{variant === 'login' ? 'Welcome Back.' : 'Create new account'}</p>
                </div>
                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-slate-300 after:mt-0.5 after:flex-1 after:border-t after:border-slate-300"/>
                {variant === 'register' && (
                <div className="relative z-0 mb-6">
                  <input 
                    type="text" 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-slate-700 appearance-none focus:outline-none focus:ring-0 focus:border-slate-600 peer" placeholder=" " 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label
                    htmlFor="floating_standard"           className="absolute text-sm text-slate-700 duration-500 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-950 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Full Name
                  </label>
                </div>
                )}
                <div className="relative z-0 mb-6">
                  <input 
                    type="email" 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-slate-700 appearance-none focus:outline-none focus:ring-0 focus:border-slate-600 peer" placeholder=" " 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label
                    htmlFor="floating_standard"           className="absolute text-sm text-slate-700 duration-500 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-950 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email
                  </label>
                </div>
                <div className="relative z-0 mb-6">
                  <input 
                    type="password" 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-slate-700 appearance-none focus:outline-none focus:ring-0 focus:border-slate-600 peer" placeholder=" " 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label
                    htmlFor="floating_standard"           className="absolute text-sm text-slate-700 duration-500 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-950 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Password
                  </label>
                </div>
                <div className="text-center lg:text-left">
                  <button
                    onClick={variant === 'login' ? login : register}
                    type="button"
                    className="inline-block rounded bg-slate-900 w-full pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-gray-100 transition 
                    hover:text-gray-900 hover:bg-transparent hover:border hover:border-slate-950 hover:pt-2.5 duration-500 ease-in focus:outline-none"
                    >
                    {variant === 'login' ? 'Sign In' : 'Sign Up'}
                  </button>

                  <p className="mb-0 mt-3 pt-1 text-sm font-medium text-gray-900">
                    {variant === 'login' ? "Don't have an account?" : "Already have an account?"}
                    <a
                      onClick={toggleVariant}
                      className="ml-2 text-slate-500 transition duration-150 ease-in-out hover:text-slate-600 focus:text-slate-600 active:text-slate-700 cursor-pointer"
                    >
                    {variant === 'login' ? "Sign Up" : "Sign In"}
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AuthForm