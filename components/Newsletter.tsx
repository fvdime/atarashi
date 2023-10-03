import React from 'react'

const Newsletter = () => {
  return (
    <div className='max-w-screen-lg mx-auto my-16 flex items-center justify-center'>    
      <div className="w-full max-w-sm border rounded-lg shadow p-4 sm:p-6 md:p-8 border-slate-700">
          <form className="space-y-6" action="#">
              <h5 className="text-xl font-medium text-slate-950 text-center">Sign in to our newsletter</h5>
              <div>
                  <label className="block mb-2 text-sm font-medium text-slate-900">Your email</label>
                  <input type="email" name="email" className="bg-transparent text-slate-950 text-sm rounded-full block w-full p-1.5 pl-4 border border-slate-500 placeholder-slate-400" placeholder="name@company.com" required />
              </div>
              {/* <span className=" border border-slate-950 px-4 py-1.5 rounded-full"></span> */}
              <button type="submit" className="w-full text-slate-950 hover:bg-slate-950 hover:text-white transition duration-300 focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-5 py-1.5 text-center ">Subscribe</button>
          </form>
      </div>
    </div>
  )
}

export default Newsletter