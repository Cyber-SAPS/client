import { Link } from "react-router-dom"



export const Footer =()=> {
    return(
        <>
        <footer className="p-4 bg-blue-500 shadow md:flex md:items-center md:justify-between md:p-6">
    <span className="text-lg text-white sm:text-center">© 2023 <a href="#rslpf" className="hover:underline" target="_blank">Royal Saint Lucia Police Force</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 sm:mt-0">
        <li>
            <Link to="/" className="mr-4 text-lg text-white hover:underline md:mr-6 dark:text-gray-400">Home</Link>
        </li>
        <li>
        <Link to="faq" className="mr-4 text-lg text-white hover:underline md:mr-6 dark:text-gray-400">Faq</Link>
        </li>
        <li>
        <Link to="contact" className="mr-4 text-lg text-white hover:underline md:mr-6 dark:text-gray-400">Contact</Link>
        </li>
        <li>
        <Link to="events" className="mr-4 text-lg text-white hover:underline md:mr-6 dark:text-gray-400">Events</Link>
        </li>
    </ul>
</footer></>
    )
}