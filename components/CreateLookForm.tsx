import React from 'react'

const CreateLookForm = () => {
  return (
    <div className="max-w-screen-sm mx-auto">
      <form className="my-5">
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Title
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5"
            placeholder="title..."
            required
            // onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Description
          </label>
          <textarea className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5" 
          // onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Price
          </label>
          <div className="flex flex-row">
            <span className="flex items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold text-grey-darker">
              $
            </span>
            <input
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5"
              // onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          {/* <div className="my-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Upload file
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 p-2.5"
              type="file"
            />
          </div> */}
        </div>
        <button
          type="submit"
          className="text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-xl text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Create New Product
        </button>
      </form>
    </div>
  )
}

export default CreateLookForm