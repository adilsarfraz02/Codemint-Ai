'use client'

import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const YOUR_SERVICE_ID = 'service_5gthpzo',
    YOUR_TEMPLATE_ID = 'template_dzkx4pd',
    YOUR_PUBLIC_KEY = '9m-i2cIAQWf0iMwIB';

const Cta = () => {
    const [email, setEmail] = useState('');
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
            .then((result) => {
                console.log("email-Subscribe:", result.text);
                toast.success('Thanks for subscribe');
    }, (error) => {
        console.log("email-Subscribe:", error.text);
        toast.error('Email is not send');
    });
};

return (

    <div className=" mt-[200px] relative mx-auto items-center ">
        <Toaster />
        <div className="absolute  w-full h-28 mx-auto">
            <div className="bg-gradient-to-r bg-opacity-20 from-pink-500/50 blur-3xl via-purple-500/50 to-pink-500/50 w-full h-full mx-auto">

            </div>
        </div>
        <div className="flex max-md:block justify-between px-12 items-center ">
            <div className="relative max-sm:text-center px-4 py-6 overflow-hidden sm:px-6 sm:py-8 lg:p-12 xl:p-16">
                <h2 className="text-3xl font-semibold font-display  sm:text-3xl">
                    We&#x27;ve got more coming...
                </h2>
                <p className="mt-2 max-w-xl text-base">
                    Want to hear from us when we add new components? Sign up for our newsletter and we&#x27;ll email you every time we release a new batch of components.
                </p>
            </div>
            <section className="mt-6 sm:flex jusitfy-start">
                <form ref={form} onSubmit={sendEmail}
                    className="flex max-md:mx-auto max-md:w-[95%] flex-col justify-center w-1/2 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                    <div className=" relative">
                        <input type="text" autoComplete="true" name="to_email" value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-lg  border-transparent flex-1 appearance-none ring-1 ring-black/20 border border-gray-300 w-full py-2 px-4 text-gray-700 ring-opacity-0
                             placeholder-gray-500 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-800 focus:border-zinc-500/10 bg-zinc-500/20" placeholder="Email *" />
                    </div>
                    <button type="submit" className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-xl shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" >
                        Subscribe
                    </button>
                </form>
            </section>
        </div>
    </div>

)
}

export default Cta;

