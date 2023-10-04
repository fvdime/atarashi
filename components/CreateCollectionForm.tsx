import React from 'react'

const CreateCollectionForm = () => {
  return (
    <div className="max-w-screen-sm mx-auto">
    <form className="mx-auto space-y-4 md:space-y-6">
      <div className="mb-6">
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Category
        </label>
        <input
          type="text"
          name="title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 "
          required
          // value={category}
          // onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Create New Category
      </button>
    </form>
  </div>
  )
}

export default CreateCollectionForm