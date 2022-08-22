import React, { useEffect } from 'react';
import Image from 'next/image'
import { useRouter, withRouter } from 'next/router'
import Layout from "../../components/layout"
import HeroImg from "../../assets/images/hero-img.jpg"
import Logo from "../../assets/images/fitzgerald-logo.png"

import { baseAPIURL } from "../api/api";

export default function Index({ data }) {
    const [showModal, setShowModal] = React.useState(false);
    const router = useRouter()
    if (router.isFallback) return <div>Loading...</div>;

    return (
        <Layout>
            <div className='w-full flex flex-col'>
                <Image src={HeroImg} alt="" />

            </div>
            <div className="max-w-5xl mx-auto px-4">
                <div className='flex -mt-14 mb-2'>
                    <Image src={Logo} alt="" width="117" height="120" />
                </div>

                <h2 className='text-black text-2xl font-semibold mb-1'>{data?.data?.handler.handle} - {data?.data?.handler.trade}</h2>
                <p className='text-gray-600 text-base font-normal mb-2'>{data?.data?.handler.site_user_details?.user_details?.name} ({data?.data?.handler.site_user_details?.user_details?.email})</p>
                <p className='flex gap-2 items-center text-sky-500 text-sm font-normal'><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.16637 14.8336C2.47321 14.1405 2.27435 13.0831 2.49173 11.6958C1.35703 10.8685 0.75 9.98028 0.75 9C0.75 8.01972 1.35703 7.13146 2.49173 6.30419C2.27435 4.91686 2.47321 3.85953 3.16637 3.16637C3.85953 2.47321 4.91686 2.27435 6.30419 2.49173C7.13146 1.35703 8.01972 0.75 9 0.75C9.98028 0.75 10.8685 1.35703 11.6958 2.49173C13.0831 2.27435 14.1405 2.47321 14.8336 3.16637C15.5268 3.85953 15.7256 4.91686 15.5083 6.30419C16.643 7.13146 17.25 8.01972 17.25 9C17.25 9.98028 16.643 10.8685 15.5083 11.6958C15.7256 13.0831 15.5268 14.1405 14.8336 14.8336C14.1405 15.5268 13.0831 15.7256 11.6958 15.5083C10.8685 16.643 9.98028 17.25 9 17.25C8.01972 17.25 7.13146 16.643 6.30419 15.5083C4.91686 15.7256 3.85953 15.5268 3.16637 14.8336ZM8.25 9.43934L11.4697 6.21967L12.5303 7.28033L8.25 11.5607L5.46967 8.78033L6.53033 7.71967L8.25 9.43934Z" fill="#2C93ED" />
                </svg> Business verified by Trady. Learn more</p>

            </div>

        </Layout>
    )
}

export const getStaticPaths = async () => {
    const response = await fetch(`${baseAPIURL}/handle/list`);
    const data = await response.json();

    const paths = data.data.handler.map(handle => {
        return {
            params: {
                handle: handle.handle
            }
        }
    })
    return {
        paths: paths,
        fallback: true,
    };
}

export const getStaticProps = async (query) => {
    const response = await fetch(`${baseAPIURL}/handle/${query.params.handle}`);
    const data = await response.json();

    return {
        props: {
            data,
        },
        revalidate: 5,
    }
}