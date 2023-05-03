import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer aria-label='Site Footer' className="fixed bottom-3 left-1/2 -translate-x-1/2" >
     <Link className='flex flex-row items-center' target='_blank' href='/'>
        <img className='hover:rotate-45' src="/images/favicon.ico"/>
        <h5 className='text-black pl-3 font-bold hover:text-white transition-all duration-400'>Try LinkTree</h5>
     </Link>   
    </footer>
  )
}

export default Footer