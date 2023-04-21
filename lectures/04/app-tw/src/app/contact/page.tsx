'use client';

import PageHeader from "@/components/PageHeader";
import { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { GoMail } from "react-icons/go";

export default function Contact() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    return (
        <div className="container mx-auto">
            <div>
                <PageHeader
                    header="Contact Me"
                />
                <div className="grid grid-cols-2 gap-6">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            console.log(name, email, message);
                        }}
                    >
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-gray-400 font-semibold mb-2"
                            >Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="block w-full outline-none bg-gray-300 focus:bg-white transition-colors duration-200"
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-gray-400 font-semibold mb-2"
                            >Email</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                className="block w-full outline-none bg-gray-300 focus:bg-white transition-colors duration-200"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="message"
                                className="block text-gray-400 font-semibold mb-2"
                            >Message</label>
                            <textarea
                                name="message"
                                id="message"
                                className="block w-full outline-none bg-gray-300 focus:bg-white transition-colors duration-200"
                                onChange={(e) => {
                                    setMessage(e.target.value);
                                }}
                            />
                        </div>
                        <div className="mb-4">
                            <button
                                type="submit"
                                className="bg-yellow-500 px-3 py-2 hover:bg-amber-400"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                    <div className="text-white text-lg">
                        <div className="font-semibold">
                            Potsawat Thinkanwatthana @naiithink
                        </div>
                        <div className="mt-3 flex gap-3 text-white">
                            <div className="mt-1"><BsTelephone /></div> +66 911
                        </div>
                        <div className="mt-3 flex gap-3 text-white">
                            <div className="mt-1"><GoMail /></div> me@naiithink.com
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
