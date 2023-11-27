"use client"
import styles from './page.module.css'
import Link from 'next/link';

export default function Error({ error, reset}) {
    return (
        <div className="text-center m-auto max-w-[80%] mt-20 text-xl">
            <p>Oh no! Our hotel site is under maintainence.</p>
            <p>Please call directly at <strong>+91-9641693184</strong> or whatsapp here 
            <Link href="tel:+919641693184" target="_blank">
                <div className="text-center text-3xl bg-lime-700 hover:bg-lime-800 text-white font-bold px-8 py-4 rounded-xl my-8 cursor-pointer shadow-xl shadow-lime-600">9641693184</div>
            </Link> 
            for booking purpose or any other queries.</p>
            <button
                onClick={
                // Attempt to recover by trying to re-render the segment
                () => reset()
                }
            />

        </div>
    )
}