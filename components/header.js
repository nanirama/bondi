import { useState, Fragment, } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, Transition } from '@headlessui/react'
// import Logo from "../assets/images/fitzgerald-logo.png"

function NavLink({ to, children }) {
  return <a href={to} className={`mx-4`}>
    {children}
  </a>
}
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
function MobileNav({ open, setOpen }) {
  return (
    <div className={`z-50 absolute top-12 left-0 h-screen w-screen bg-gray-200 bg-opacity-75 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter`}>
     
      <div className="flex flex-col p-4 ">    

<Menu as="div" className="relative text-left flex flex-col">
  <Menu.Item>

    <a
      href="#"
      className={classNames(

        'block mt-4 lg:inline-block lg:mt-0 text-gray-500 mr-10 text-base font-medium mb-3'
      )}
    >
      Home
    </a>

  </Menu.Item>

 
  <div className="relative inline-block text-left z-50">
<Menu>
{({ open }) => (
<>
<span className="rounded-md shadow-sm">
  <Menu.Button className="mt-4 lg:mt-0 text-gray-500 mr-10 text-base font-medium flex  items-center mb-3">
    <span>Benifits</span>
    <svg
      className="w-5 h-5 ml-2 -mr-1"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  </Menu.Button>
</span>

<Transition
  show={open}
  enter="transition ease-out duration-100"
  enterFrom="transform opacity-0 scale-95"
  enterTo="transform opacity-100 scale-100"
  leave="transition ease-in duration-75"
  leaveFrom="transform opacity-100 scale-100"
  leaveTo="transform opacity-0 scale-95"
>
  <Menu.Items
    static
    className="absolute left-0 w-40 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
  >
   <div className="">
      <Menu.Item>
        {({ active }) => (
          <a
            href="#account-settings"
            className={`${
              active
                ? "bg-gray-100 text-gray-900"
                : "text-gray-700"
            } flex justify-between w-full px-4 py-3 text-sm leading-5 text-left mb-3`}
          >
            Account settings
          </a>
          
        )}
      </Menu.Item>
     
      </div>  

    
    <div className="">
      <Menu.Item>
        {({ active }) => (
          <a
            href="#account-settings"
            className={`${
              active
                ? "bg-gray-100 text-gray-900"
                : "text-gray-700"
            } flex justify-between w-full px-4 py-3 text-sm leading-5 text-left`}
          >
            Account settings
          </a>
          
        )}
      </Menu.Item>
     
      </div> 

  </Menu.Items>
</Transition>
</>
)}
</Menu>
</div>




  <Menu.Item>

    <a
      href="https://www.google.com/"
      className={classNames(

        'block mt-4 lg:inline-block lg:mt-0 text-gray-500 mr-10 text-base font-medium'
      )}
    >
      Pricing
    </a>

  </Menu.Item>

</Menu>






      </div>

    </div>
  )
}

export default function Header() {

  const [open, setOpen] = useState(false)
  return (
    <div className='fixed w-full z-50 bg-green-700'>
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex py-2 items-center">

          <MobileNav open={open} setOpen={setOpen} />
          
          <div className="w-full block flex-grow flex items-center lg:w-auto float-left lg:flex-row flex-row-reverse gap-2 ">

          <div className='flex justify-between w-full items-center'>

<div className='flex gap-5'>

<div className="z-50 flex relative w-8 h-5 flex-col justify-between items-center " onClick={() => {
              setOpen(!open)
            }}>
              {/* hamburger button */}
              <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3" : ""}`} />
              <span className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
              <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-1" : ""}`} />
            </div>


            



              <div className="flex items-center gap-1 sm:text-sm text-xs rounded text-white text-base font-medium"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Path 13" d="M7.30478 11.0072L9.3101 9.3261C9.60021 9.08289 10.018 9.06624 10.3265 9.28559L12.0838 10.5349C12.5394 10.8588 12.5522 11.531 12.1093 11.872L11.6891 12.1955C11.045 12.6913 10.1821 12.7962 9.4637 12.416C8.19755 11.7458 6.16941 10.5426 4.6882 9.03648C3.27206 7.5965 2.20692 5.73754 1.59415 4.51325C1.20528 3.7363 1.38609 2.81632 1.98778 2.18955L2.39158 1.76893C2.76647 1.37842 3.40856 1.44435 3.69628 1.90288L4.80382 3.66799C5.0107 3.99769 4.96129 4.42677 4.68489 4.70082L2.70336 6.66553" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
</svg> (813) 000 1234</div>

</div>

              <a href="#" className="flex items-center sm:text-base text-sm rounded text-green-600 text-center bg-white py-1 px-3 gap-1 font-medium"><svg width="14" height="17" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.9997 2.33331V0.99998C10.9997 0.823169 10.9294 0.653599 10.8044 0.528575C10.6794 0.403551 10.5098 0.333313 10.333 0.333313C10.1562 0.333313 9.98663 0.403551 9.8616 0.528575C9.73658 0.653599 9.66634 0.823169 9.66634 0.99998V2.33331H4.33301V0.99998C4.33301 0.823169 4.26277 0.653599 4.13775 0.528575C4.01272 0.403551 3.84315 0.333313 3.66634 0.333313C3.48953 0.333313 3.31996 0.403551 3.19494 0.528575C3.06991 0.653599 2.99967 0.823169 2.99967 0.99998V2.33331H0.333008V13H13.6663V2.33331H10.9997ZM12.333 11.6666H1.66634V3.66665H12.333V11.6666ZM9.70634 6.61331L8.90634 5.81331L6.53301 8.18665L5.09301 6.75331L4.29301 7.55331L6.53301 9.79331L9.70634 6.61331Z" fill="#5B9149"/>
</svg> Book service</a>
            </div>


       

       

          </div>


        </nav>
      </div>
      
    </div>
  )
}