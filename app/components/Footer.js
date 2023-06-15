import Link from 'next/link'
import React from 'react'
import {FaBehanceSquare, FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 py-4 text-center text-white">
        <h1>Follow Me:</h1>
        <div className='flex justify-center items-center  mb-4'>
          <ul className='flex gap-5'>
            <li><Link className='text-3xl' target='_blank' href="https://www.facebook.com/AbuBakarAnsariOfficial"><FaFacebookSquare/></Link></li>
            <li><Link className='text-3xl' target='_blank' href="https://www.instagram.com/abubakaransari3932/"><FaInstagramSquare/></Link></li>
            <li><Link className='text-3xl' target='_blank' href="https://twitter.com/AbuBakar5625"><FaTwitterSquare/></Link></li>
            <li><Link className='text-3xl' target='_blank' href="https://github.com/AbuBakarAnsari4"><FaGithubSquare/></Link></li>
          </ul>
        </div><hr className='mb-2'/>
        <p className="text-gray-200">© 2023 <Link className='underline' href='/'>Hunting Coder</Link>. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Footer
