import React, { useState } from 'react'
import { Menu, Transition } from "@headlessui/react";
import Link from 'next/link'
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function MenuBar({ open, setOpen }) {

  return (
    <div
      className={` z-50 absolute top-0 left-0 h-screen xl:w-1/4 lg:w-1/3 sm:w-2/5 w-full bg-white transform sm:drop-shadow-md sm:border-r-2 ${open ? "-translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out filter`}
    >
      <div className="w-full block flex-grow flex items-center float-right flex-row-reverse gap-2">
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className={`mt-3 mr-3 z-50 flex w-8 relative h-8 relative h-8 flex-col justify-between items-center cursor-pointer ${open ? "" : ""
            }`}
        >
          <span
            className={`h-1 w-full rounded-lg transform transition duration-300 ease-in-out ${open ? "bg-black rotate-45 translate-y-3.5" : "bg-white"
              }`}
          />
          <span
            className={`h-1 w-full rounded-lg transition-all duration-300 ease-in-out ${open ? "bg-black w-0" : "w-full bg-white"
              }`}
          />
          <span
            className={`h-1 w-full rounded-lg transform transition duration-300 ease-in-out ${open ? "bg-black -rotate-45 -translate-y-3.5" : "bg-white"
              }`}
          />
        </div>
      </div>
      <div className="flex items-center justify-start px-4 filter drop-shadow-md bg-white h-8">
      </div>
      <div className="flex flex-col py-3 px-4 bg-white border-t border-b">
        <Menu as="div" className="relative text-left flex flex-col">
          <Menu.Item>
            <Link href="/book">
              <a
                className={classNames(
                  'block mt-4 text-gray-500 mr-10 text-base font-medium mb-3'
                )}
              >
                Book Now
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/about">
              <a
                className={classNames(
                  'block mt-4 text-gray-500 mr-10 text-base font-medium mb-3'
                )}
              >
                About
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/blog">
              <a
                className={classNames(
                  'block mt-4 text-gray-500 mr-10 text-base font-medium mb-3'
                )}
              >
                Blog
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/contact">
              <a
                className={classNames(
                  'block mt-4 text-gray-500 mr-10 text-base font-medium mb-3'
                )}
              >
                Contact
              </a>
            </Link>
          </Menu.Item>
        </Menu>
        <div className="flex my-6 gap-6">
          <a href="https://twitter.com/tradycom" target="_blank" rel="noopener noreferrer"><svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.55016 19.75C16.6045 19.75 21.5583 12.2468 21.5583 5.74192C21.5583 5.53098 21.5536 5.31536 21.5442 5.10442C22.5079 4.40752 23.3395 3.54432 24 2.55536C23.1025 2.95466 22.1496 3.21544 21.1739 3.3288C22.2013 2.71297 22.9705 1.74553 23.3391 0.605828C22.3726 1.17862 21.3156 1.58267 20.2134 1.80067C19.4708 1.01162 18.489 0.489177 17.4197 0.314112C16.3504 0.139047 15.2532 0.321111 14.2977 0.832157C13.3423 1.3432 12.5818 2.15477 12.1338 3.14137C11.6859 4.12798 11.5754 5.23468 11.8195 6.29036C9.86249 6.19215 7.94794 5.68377 6.19998 4.79816C4.45203 3.91255 2.90969 2.6695 1.67297 1.14958C1.0444 2.2333 0.852057 3.51571 1.13503 4.73615C1.418 5.9566 2.15506 7.02351 3.19641 7.72005C2.41463 7.69523 1.64998 7.48474 0.965625 7.10598V7.16692C0.964925 8.30421 1.3581 9.40665 2.07831 10.2868C2.79852 11.167 3.80132 11.7706 4.91625 11.995C4.19206 12.1932 3.43198 12.2221 2.69484 12.0794C3.00945 13.0575 3.62157 13.913 4.44577 14.5264C5.26997 15.1398 6.26512 15.4807 7.29234 15.5013C5.54842 16.8712 3.39417 17.6142 1.17656 17.6107C0.783287 17.6101 0.390399 17.586 0 17.5385C2.25286 18.9838 4.87353 19.7514 7.55016 19.75Z" fill="black" />
          </svg></a>
          <a href="httsp://www.linkedin.com/company/trady" target="_blank" rel="noopener noreferrer"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z" fill="black" />
          </svg></a>
          <a href="https://www.facebook.com/tradys" target="_blank" rel="noopener noreferrer"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="black" />
          </svg></a>
        </div>
      </div>
    </div>
  )
}
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className='fixed w-full z-50 bg-green-300'>
      <div className="max-w-5xl mx-auto px-4">
        <nav className="flex py-2 items-center">
          <div className="w-full block flex-grow flex items-center lg:w-auto float-left lg:flex-row flex-row-reverse gap-2 ">
            <div className='flex justify-between w-full items-center'>
              <div className='flex gap-5'>
                <div className="">
                  <MenuBar open={open} setOpen={setOpen} />
                  <div className="w-full block flex-grow flex items-center float-right flex-row-reverse gap-2">
                    <div
                      onClick={() => {
                        setOpen(!open);
                      }}
                      className={`z-10 flex w-8 relative h-8 flex-col justify-between items-center cursor-pointer ${open ? "" : "relative h-6"
                        }`}
                    >
                      <span
                        className={`h-1 w-full rounded-lg transform transition duration-300 ease-in-out ${open ? "bg-black rotate-45 translate-y-3.5 w-0" : "bg-white"
                          }`}
                      />
                      <span
                        className={`h-1 w-full rounded-lg transition-all duration-300 ease-in-out ${open ? "bg-black w-0" : "w-full bg-white"
                          }`}
                      />
                      <span
                        className={`h-1 w-full rounded-lg transform transition duration-300 ease-in-out ${open ? "bg-black -rotate-45 -translate-y-3.5 w-0" : "bg-white"
                          }`}
                      />
                    </div>
                  </div>
                </div >
                <div className="flex items-center gap-1 sm:text-sm text-xs rounded text-white text-base font-medium"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path id="Path 13" d="M7.30478 11.0072L9.3101 9.3261C9.60021 9.08289 10.018 9.06624 10.3265 9.28559L12.0838 10.5349C12.5394 10.8588 12.5522 11.531 12.1093 11.872L11.6891 12.1955C11.045 12.6913 10.1821 12.7962 9.4637 12.416C8.19755 11.7458 6.16941 10.5426 4.6882 9.03648C3.27206 7.5965 2.20692 5.73754 1.59415 4.51325C1.20528 3.7363 1.38609 2.81632 1.98778 2.18955L2.39158 1.76893C2.76647 1.37842 3.40856 1.44435 3.69628 1.90288L4.80382 3.66799C5.0107 3.99769 4.96129 4.42677 4.68489 4.70082L2.70336 6.66553" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                </svg> (813) 000 1234</div>
              </div>
              <div className='flex items-center gap-6'>
                <Link href="/book"><a className="flex items-center sm:text-base text-sm rounded text-green-300 text-center bg-white py-1 px-3 gap-1 font-medium"><svg width="14" height="17" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.9997 2.33331V0.99998C10.9997 0.823169 10.9294 0.653599 10.8044 0.528575C10.6794 0.403551 10.5098 0.333313 10.333 0.333313C10.1562 0.333313 9.98663 0.403551 9.8616 0.528575C9.73658 0.653599 9.66634 0.823169 9.66634 0.99998V2.33331H4.33301V0.99998C4.33301 0.823169 4.26277 0.653599 4.13775 0.528575C4.01272 0.403551 3.84315 0.333313 3.66634 0.333313C3.48953 0.333313 3.31996 0.403551 3.19494 0.528575C3.06991 0.653599 2.99967 0.823169 2.99967 0.99998V2.33331H0.333008V13H13.6663V2.33331H10.9997ZM12.333 11.6666H1.66634V3.66665H12.333V11.6666ZM9.70634 6.61331L8.90634 5.81331L6.53301 8.18665L5.09301 6.75331L4.29301 7.55331L6.53301 9.79331L9.70634 6.61331Z" fill="#5B9149" />
                </svg> Book service</a></Link>

              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}