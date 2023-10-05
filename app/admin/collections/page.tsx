"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const page = () => {

  return (
    <div className="p-4 max-w-screen-lg mx-auto">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-slate-500 border border-slate-900">
          <thead className="text-xs text-slate-900 uppercase bg-transparent">
            <tr>
              <th scope="col" className="px-6 py-3">
                Collection name
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-transparent">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap "
              >
                hellloooo
              </th>
              <td className="flex flex-row">
                <button
                  type="button"
                  className="text-slate-700 bg-transparent border border-lime-800 focus:outline-none hover:bg-lime-600  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
                >
                  Update
                </button>
                <button
                  type="button"
                  className="text-slate-900 bg-transparent border border-red-800 focus:outline-none hover:bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <Link
          href="/admin/collections/add"
          className="flex flex-row justify-center items-center self-center my-5"
        >
          <button
            type="button"
            className="text-slate-700 bg-transparent border border-slate-600 focus:outline-none hover:bg-slate-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
          >
            Add New Collection
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;