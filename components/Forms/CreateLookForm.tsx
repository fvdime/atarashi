"use client"

import { useState } from "react"
import ImageUpload from "./ImageUpload"

const CreateLookForm = () => {

  const [value, setValue] = useState('')

  return (
    <div className="max-w-screen-sm mx-auto p-4">
      <h1 className="font-bold text-lg my-8">Create New Look</h1>
      <form className="my-5">
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-slate-900">
            Title
          </label>
          <input
            type="text"
            className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5"
            placeholder="title..."
            required
            // onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-slate-900 ">
            Description
          </label>
          <textarea className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5" 
          // onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-slate-900"
          >
            Price
          </label>
          <div className="flex flex-row mb-6">
            <span className="flex items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold text-grey-darker">
              $
            </span>
            <input
              type="number"
              className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5"
              // onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <ImageUpload 
              value={value}
              onChange={(value) => setValue(value)}
              />
          </div>
        </div>
        <div className="mb-6"> 
          <label htmlFor="countries" className="block mb-2 text-sm font-medium text-slate-900">Select an collection</label>
          <select id="countries" className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5">
            <option selected>Choose a Collection</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <button
            type="button"
            className="text-slate-900 bg-transparent border border-slate-900 focus:outline-none hover:bg-slate-900 transition-all duration-300 ease-in hover:text-gray-200 font-semibold text-xs px-5 py-2.5 mr-2 mb-2"
          >
            Create New Look
          </button>
      </form>
    </div>
  )
}

export default CreateLookForm