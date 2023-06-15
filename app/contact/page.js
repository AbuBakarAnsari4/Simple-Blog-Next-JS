import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className='container mx-auto px-4 py-8'>
                <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                <p className="mb-4">Have any questions, suggestions, or feedback? Reach out to us using the form below:</p>

                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-bold mb-1">Name</label>
                        <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block font-bold mb-1">Email</label>
                        <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block font-bold mb-1">Message</label>
                        <textarea id="message" rows="5" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"></textarea>
                    </div>

                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Send Message</button>
                </form>
            </div>
            <Footer/>
        </>
    )
}

export default Contact
