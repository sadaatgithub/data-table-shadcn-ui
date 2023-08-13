import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <ul className='flex p-2'>
        <li className='bg-gray-300  p-2 rounded-md'><Link href="/react-table" className='p-4'>React Table</Link></li>
    </ul>
  )
}

export default Navbar