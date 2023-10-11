import React from 'react'

const CreateCollectionForm = () => {
  return (
    <div className="max-w-screen-sm mx-auto">
    <form className="mx-auto space-y-4 md:space-y-6">
      <h1 className="font-bold text-lg my-8">Create New Collection</h1>
      <div className="mb-6">
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Title
        </label>
        <input
          type="text"
          name="title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 "
          required
          // value={category}
          // onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="Description"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Description
        </label>
        <textarea
          name="Description"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 "
          required
          // value={category}
          // onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Upload file
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 p-2.5"
              type="file"
            />
          </div>
          <button
            type="button"
            className="text-slate-900 bg-transparent border border-slate-900 focus:outline-none hover:bg-slate-900 transition-all duration-300 ease-in hover:text-gray-200 font-semibold text-xs px-5 py-2.5 mr-2 mb-2"
          >
            Create New Collection
          </button>
    </form>
  </div>
  )
}

export default CreateCollectionForm