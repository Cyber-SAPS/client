import * as React from 'react'
import { Link } from 'react-router-dom'


export const HeroComponent =()=> {
    return(
        <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
  <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:flex lg:h-1/2 lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center sm:text-left">
      <h1 className="text-3xl font-extrabold sm:text-5xl text-blue-700">
        
        Report a Crime

        <strong className="block font-extrabold text-black ">
        Help us, help you.
        </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
        Send information anonymously to the Royal Saint Lucia Police Force.
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">

          <Link className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-white hover:text-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto" to="contact">Use the web form</Link>

      </div>
    </div>
  </div>
</section>
    )
}