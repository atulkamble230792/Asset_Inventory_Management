import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './styles.css'
import logo from './Images/nityo-infotech.png'

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [errorMessage, setErrorMessage] = useState('')
	const [showErrorModal, setShowErrorModal] = useState(false)

	const navigate = useNavigate()
	const handleSubmit = (event) => {
		event.preventDefault()

		// Check if the username and password are correct
		if (email === 'admin' && password === 'admin') {
			// If the credentials are correct, redirect to the home page or perform any other actions
			navigate('/home') // Replace 'home.html' with the actual home page URL
		} else {
			// If the credentials are incorrect, display an error message
			setErrorMessage('Wrong credentials. Please try again.')
			setShowErrorModal(true)
		}
	}

	const handleCloseModal = () => {
		setShowErrorModal(false)
	}

	return (
		<div>
			<section class="bg-gray-50 dark:bg-gray-900">
				<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
					<Link
						href="#"
						class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
					>
						<img
							class="w-24 h-20 mr-2"
							// src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
							src={logo}
							alt="logo"
						/>
						Nityo Infotech
					</Link>
					<div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
						<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
							<h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
								Sign in to your account
							</h1>
							<form onSubmit={handleSubmit} class="space-y-4 md:space-y-6">
								<div className="mb-4">
									<label
										for="email"
										class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Your email
									</label>
									<input
										type="text"
										id="email"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										required
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</div>
								<div className="mb-6">
									<label
										htmlFor="password"
										className="block text-gray-700 font-bold mb-2"
									>
										Password
									</label>
									<input
										type="password"
										id="password"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										required
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>
								</div>

								<button
									type="submit"
									// class="w-full p-3 rounded-xl bg-[#3944F7] text-l font-semibold text-black"
									class="btn-login"
								>
									Sign in
								</button>
								<div>
									<Link
										to="#"
										class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
									>
										Forgot password?
									</Link>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
			{showErrorModal && (
				<div className="fixed inset-0 flex items-center justify-center z-50">
					<div className="bg-white rounded-lg p-6 max-w-sm mx-auto">
						<div className="mb-4">
							<div className="text-lg font-bold">Error</div>
							<div className="text-gray-700">{errorMessage}</div>
						</div>
						<div className="mt-4 flex justify-end">
							<button
								id="closeModal"
								className="button"
								onClick={handleCloseModal}
							>
								Close
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default Login
