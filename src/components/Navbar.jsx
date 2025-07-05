import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../apis/api';

function Navbar() {
    const [isuseropen, setisuseropen] = useState(false)
    const [ismenuopen, setismenuopen] = useState(false)

    const [loggedIn, setLoggedIn] = useState(false);
    const [userName, setUserName] = useState("Guest User");
    const [userEmail, setUserEmail] = useState("guest@example.com");

    const navigate = useNavigate();

    async function fetchUser() {
        try {
            const response = await fetch(`${BASE_URL}/auth`, {
                credentials: "include",
            });
            // console.log(response)
            if (response.ok) {
                const data = await response.json();
                // Set user info if logged in
                setUserName(data.name);
                setUserEmail(data.email);
                setLoggedIn(true);
            } else if (response.status === 401) {
                // User not logged in
                setUserName("Guest User");
                setUserEmail("guest@example.com");
                setLoggedIn(false);
            } else {
                // Handle other error statuses if needed
                console.error("Error fetching user info:", response.status);
            }
        } catch (err) {
            console.error("Error fetching user info:", err);
        }
    }
    const handleLogout = async () => {
        try {
            const response = await fetch(`${BASE_URL}/auth/logout`, {
                method: "POST",
                credentials: "include",
            });
            if (response.ok) {
                console.log("Logged out successfully");
                // Optionally reset local state
                setLoggedIn(false);
                setUserName("Guest User");
                setUserEmail("guest@example.com");
                navigate("/");
            } else {
                console.error("Logout failed");
            }


            
        } catch (err) {
            console.error("Logout error:", err);
        } finally {
            setLoggedIn(false);
        }
    };
    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 relative">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* logo container */}
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">LOGO</span>
                </a>
                {/* navbar links */}
                <button onClick={() => setismenuopen(!ismenuopen)} data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                {/* options */}
                <div className={`${ismenuopen ? 'block' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-user`}>
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="/" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                        </li>
                        <li>
                            <a href="#features" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Features</a>
                        </li>
                        <li>
                            <a href="#stats" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Stats</a>
                        </li>
                        <li>
                            <a href="#contact" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                        </li>
                    </ul>
                </div>
                {/* user menu */}
                {loggedIn ? (<div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button onClick={() => setisuseropen(!isuseropen)} type="button" className="flex cursor-pointer text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                        <span className="sr-only">Open user menu</span>
                        <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" />
                    </button>
                    {/* <!-- Dropdown menu --> */}
                    {isuseropen && <div className="z-50  absolute right-3 top-12 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                        <div className="px-4 py-3">
                            <span className="block text-sm text-gray-900 dark:text-white">{userName}</span>
                            <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{userEmail}</span>
                        </div>
                        <div
                            className="px-4 py-2 text-gray-600"
                            onClick={handleLogout}
                        >
                            <div className=''></div>
                            <span>Logout</span>
                        </div>
                    </div>
                    }
                </div>
                ) : (
                    // show if not logged in
                    <div
                        className='px-3 py-1 cursor-pointer border border-gray-400 rounded-sm'
                        onClick={() => {
                            navigate("/login");
                            setLoggedIn(false);
                        }}
                    >
                        <div className='menu-item-icon'></div>
                        <span>Login</span>
                    </div>
                )}
            </div>
        </nav>

    )
}

export default Navbar