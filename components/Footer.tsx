import Link from "next/link"

const Footer = () => {
  return (
    <div>
      <footer className="border-t border-slate-900">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="self-center text-lg font-bold whitespace-nowrap uppercase mr-2">新しい</span>
            <span className="text-sm fon-semibold text-slate-900 sm:text-center">© 2023 <a href="/" className="hover:underline">Atarashii™</a>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-slate-700 sm:mt-1">
              <li>
              <span className=" border border-slate-700 px-2 rounded-xl"></span>
                  <Link href="#"  className="mr-4 md:mr-4 border border-slate-700 px-4 rounded-xl">Source</Link>
              </li>
              <li>
              <span className=" border border-slate-700 px-2 rounded-xl"></span>
                  <Link href="#"  className="mr-4 md:mr-6 border border-slate-700 px-4 rounded-xl">Hire me</Link>
              </li>
          </ul>
          </div>
      </footer>
    </div>
  )
}

export default Footer