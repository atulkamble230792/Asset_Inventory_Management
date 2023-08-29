import React, { useState } from 'react'
import Nav from '../../HeaderFooter/Nav'
import CryptoJS from 'crypto-js'
import Footerrr from '../../HeaderFooter/footer'

export default function Encrypt() {
	const [mode, setMode] = useState('Encrypt')
	const [inputText, setInputText] = useState('')
	const [outputText, setOutputText] = useState('')

	const handleModeChange = (event) => {
		setMode(event.target.value)
		setInputText('')
		setOutputText('')
	}

	const handleInputChange = (event) => {
		setInputText(event.target.value)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		if (mode === 'Encrypt') {
			// Replace 'SECRET_KEY' with your desired encryption key
			const encrypted = CryptoJS.AES.encrypt(inputText, 'SECRET_KEY').toString()
			setOutputText(encrypted)
		} else if (mode === 'Decrypt') {
			try {
				const decrypted = CryptoJS.AES.decrypt(
					inputText,
					'SECRET_KEY'
				).toString(CryptoJS.enc.Utf8)
				setOutputText(decrypted)
			} catch (error) {
				setOutputText('Error: Invalid input for decryption')
			}
		}
	}

	const handleReset = () => {
		setInputText('')
		setOutputText('')
	}

	return (
		<>
			<Nav />
			<div className="pt-6">
				<h1 className="mx-2 text-2xl font-bold">
					<span>Encrypt / Decrypt </span>
				</h1>
			</div>
			<div className="red-line w-full h-1 bg-red-400"></div>

			{/* ENCRYPT _ DECRYPT CODE */}
			<div className="flex  justify-center mt-4 h-96">
				<div className="w-4/5 p-6 border rounded-lg shadow-lg">
					<div className="flex justify-center mb-6">
						<label className="mr-4">
							<input
								type="radio"
								value="Encrypt"
								checked={mode === 'Encrypt'}
								onChange={handleModeChange}
								className="mr-1"
							/>
							Encrypt
						</label>
						<label>
							<input
								type="radio"
								value="Decrypt"
								checked={mode === 'Decrypt'}
								onChange={handleModeChange}
								className="mr-1"
							/>
							Decrypt
						</label>
					</div>
					<form onSubmit={handleSubmit} className="flex flex-wrap gap-4">
						<div className="flex flex-col w-64">
							<label
								htmlFor="inputText"
								className="text-sm font-medium text-gray-700"
							>
								Input Text
							</label>
							<input
								type="text"
								id="inputText"
								value={inputText}
								onChange={handleInputChange}
								className="input"
								required
							/>
						</div>
						<div className="flex flex-col w-64">
							<label
								htmlFor="outputText"
								className="text-sm font-medium text-gray-700"
							>
								Output Text
							</label>
							<input
								type="text"
								id="outputText"
								value={outputText}
								readOnly
								className="input"
							/>
						</div>
						<div className="w-full">
							<div className="flex justify-between">
								<button
									type="submit"
									className="btn btn-active btn-success text-white font-semibold mt-4"
								>
									{mode === 'Encrypt' ? 'Encrypt' : 'Decrypt'}
								</button>
								<button
									type="button"
									onClick={handleReset}
									className="btn btn-active btn-danger text-black bg-red-400 font-semibold mt-4"
								>
									Reset
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
			<Footerrr />
		</>
	)
}
