import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Design from './img/download.svg';
import Design2 from './img/download1.svg';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        const card1 = document.getElementById("card1");
        const card2 = document.getElementById("card2");
        const switch1 = document.getElementById("switch1");
        const switch2 = document.getElementById("switch2");
        const button1 = document.getElementById("button1");
        const button2 = document.getElementById("button2");

        const handleButton1Click = () => {
            card1.classList.add("open");
            card2.classList.add("open");
            card2.style.display = "none";
            switch1.style.display = "block";
            button1.style.display = "none";
            button2.style.display = "none";
        };

        const handleButton2Click = () => {
            card2.classList.add("open");
            card1.classList.add("open");
            card1.style.display = "none"
            switch2.style.display = "block";
            switch1.style.display = "block";
            button1.style.display = "none";
            button2.style.display = "none";
        };

        const handleSwitch1Click = () => {
            card1.style.display = "none";
            card2.style.display = "block";
            switch2.style.display = "block";
        };


        const handleSwitch2Click = () => {
            card2.style.display = "none";
            card1.style.display = "block";
            switch1.style.display = "block";
        }

        button1.addEventListener("click", handleButton1Click);
        button2.addEventListener("click", handleButton2Click);
        switch1.addEventListener("click", handleSwitch1Click);
        switch2.addEventListener("click", handleSwitch2Click)

        return () => {
            button1.removeEventListener("click", handleButton1Click);
            button2.removeEventListener("click", handleButton2Click);
            switch1.removeEventListener("click", handleSwitch1Click);
            switch2.removeEventListener("click", handleSwitch2Click)
        };
    }, []);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Perform login logic (e.g., send a request to the server with username and password)
        // On success, set user session or redirect to a protected page
        // On failure, display an error message

        // Simple authentication check for demonstration purposes
        if (username === 'admin' && password === 'password') {
            // Set user session or token (e.g., save to local storage or cookies)
            // Here, we're using a mock session token for simplicity
            const sessionToken = 'abc123';
            localStorage.setItem('sessionToken', sessionToken);

            // Redirect to the protected page
            navigate('/homeAdmin');
        }
        else if (username === 'employee' && password === 'password') {
            const sessionToken = 'abc123';
            localStorage.setItem('sessionToken', sessionToken);

            // Redirect to the protected page
            navigate('/homeEmployee');
        }
        else {
            // Display an error message or handle authentication failure
            console.log('Authentication failed');
        }
    };

    return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="form">
            <div className="cards">
                <div href="" className="card group relative block h-64 sm:h-80 lg:h-96" id="card1">
                    <div
                        id="dash1"
                        className="relative flex h-full transform items-end border-2 border-black bg-white rounded-2xl"
                    >
                        <div
                            id="info1"
                            className="absolute p-4 group-hover:relative sm:p-6 lg:p-8"
                        >
                            <p className="relative" id="switch1">Switch to Employee</p>
                            <img src={Design2} alt="SVG Image"/>
                            <a id="button1"
                                className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                            >
                                Sign in as Admin
                            </a>
                        </div>
                    </div>
                </div>
                <div href="" className="card group relative block h-64 sm:h-80 lg:h-96" id="card2">
                    <div
                        id="dash2"
                        className="dash relative flex h-full transform items-end border-2 border-black bg-white rounded-2xl"
                    >
                        <div
                            id="info2"
                            className="absolute p-4 group-hover:relative sm:p-6 lg:p-8"
                        >
                            <p className="relative" id="switch2">Switch to Admin</p>
                            <img src={Design} />
                            <a id="button2"
                                className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                            >
                                Sign in as Employee
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <form
                action=""
                className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                onSubmit={handleSubmit}
            >
                <p className="text-center text-lg font-medium">Sign in to your account</p>

                <div>
                    <label htmlFor="name" className="sr-only">Username</label>

                    <div className="relative">
                        <input
                            type="name"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            value={username} onChange={handleUsernameChange} placeholder="Username"
                        />

                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </span>
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="sr-only">Password</label>

                    <div className="relative">
                        <input
                            type="password"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            value={password} onChange={handlePasswordChange} placeholder="Password"
                        />

                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
                    </div>
                </div>

                <button
                    type="submit"
                    className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                >
                    Sign in
                </button>
            </form>
        </div>
    </div>
    );
};

export default LoginForm;
