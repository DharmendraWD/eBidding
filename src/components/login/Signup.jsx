import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
      <section className="flex flex-col items-center pt-6">
  <div className="w-full bg-[var(--box1)]  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
    <div className="p-[10px] lg:p-6 space-y-4 md:space-y-6 sm:p-[8px]">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-[var(--mainColor)] md:text-2xl dark:text-[var(--mainColor)]">Create an
        account
      </h1>
      <form className="space-y-2 md:space-y-4 mb-[30px] lg:mb-[0]" method="POST">
        <div>
          <label htmlFor="email" className="block mb-1 text-sm font-medium text-[var(--mainColor)] dark:text-[var(--mainColor)]">Email</label>
          <input type="email" name="name" id="email" className="bg-[var(--mainbg)] border border-[var(--placeholderClr)] text-[var(--placeholderClr)] sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[var(--mainColor)] dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email" required />
        </div>
        <div>
          <label htmlFor="mobileNum" className="block mb-1 text-sm font-medium text-[var(--mainColor)] dark:text-[var(--mainColor)]">Mobile Number</label>
          <input type="text" name="mobileNum" id="name" className="bg-[var(--mainbg)] border border-[var(--placeholderClr)] text-[var(--placeholderClr)] sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[var(--mainColor)] dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mobile Number" required />
        </div>
        <div>
          <label htmlFor="companyName" className="block mb-1 text-sm font-medium text-[var(--mainColor)] dark:text-[var(--mainColor)]">Company Name</label>
          <input type="text" name="companyName" id="username" className="bg-[var(--mainbg)] border border-[var(--placeholderClr)] text-[var(--placeholderClr)] sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[var(--mainColor)] dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Company Name" required />
        </div>
        <div>
          <label htmlFor="companyAddress" className="block mb-1 text-sm font-medium text-[var(--mainColor)] dark:text-[var(--mainColor)]">Company Address</label>
          <input type="text" name="companyAddress" id="companyAddress" className="bg-[var(--mainbg)] border border-[var(--placeholderClr)] text-[var(--placeholderClr)] sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[var(--mainColor)] dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Company Address" required />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1 text-sm font-medium text-[var(--mainColor)] dark:text-[var(--mainColor)]">Password</label>
          <input type="password" name="password" id="password" placeholder="Minimum 8 Character" className="bg-[var(--mainbg)] border border-[var(--placeholderClr)] text-[var(--placeholderClr)] sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[var(--mainColor)] dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1 text-sm font-medium text-[var(--mainColor)] dark:text-[var(--mainColor)]">Confirm Password</label>
          <input type="password" name="password" id="password" placeholder="Minimum 8 Character" className="bg-[var(--mainbg)] border border-[var(--placeholderClr)] text-[var(--placeholderClr)] sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[var(--mainColor)] dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
        </div>
        <button type="submit" className="w-full text-[var(--whiteInLight)] bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create an account</button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">Already have an account? <Link className="font-medium text-[var(--linkColor)] hover:underline dark:text-blue-500" to="/">Sign in here</Link>
        </p>
      </form>
    </div>
  </div>
</section>
    
    </div>
  )
}

export default Login
