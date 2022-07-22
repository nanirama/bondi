import React from "react";
import Image from 'next/image'

import PopupImg from "../assets/images/popup-img.png"
import AbtmobileLogo from "../assets/images/abt-mobilelogo.png"

const VideoModal=({setShowModal})=> {
    console.log('setShowModal',setShowModal)
    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="absolute top-0 right-0 left-0 w-full">
                    <div className="relative w-100 mx-auto">
                        <div className="flex flex-col w-full">
                            <div className="flex items-start justify-between relative w-100">
                                <div className="w-100 relative mx-auto">
                                    <div className="w-full abtimg">
                                        <Image src={PopupImg} alt="" className="w-full h-100" />
                                    </div>
                                    <div className="absolute top-0 -left-2"><Image src={AbtmobileLogo} alt="" width="240" height="70" /></div>
                                    <button
                                        className="text-white float-right text-base absolute top-7 right-2 leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        × Close
                                    </button>
                                </div>
                            </div>
                            <div className="bg-black text-zinc-300 w-full text-sm text-center leading-6 pt-8 px-8 pb-20 -mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat diam sed tellus viverra faucibus. Nulla vestibulum justo ante, at pulvinar justo

                            </div>
                            <div className="bg-neutral-300 w-100 h-12 flex flex-row gap-2 text-gray-900 justify-center pt-4 pb-10 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M18 10v-4c0-3.313-2.687-6-6-6s-6 2.687-6 6v4h-3v14h18v-14h-3zm-10 0v-4c0-2.206 1.794-4 4-4s4 1.794 4 4v4h-8z" fill="#676769" /></svg>trady.com/fitz
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default VideoModal