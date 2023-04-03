"use client";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Header from "./components/header/page";
import Terminal from "./components/terminal/page";
import Footer from "./components/footer/page";
import { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/20/solid";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const [show, setShow] = useState(false);

    return (
        <>
            <Header />
            <main className={styles.main}>
                <>
                    <div className="relative isolate overflow-hidden ">
                        <div className="px-6 sm:px-6 sm:py-14 lg:px-8">
                            <div className="mx-auto max-w-5xl text-center">
                                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-8xl">
                                    The Ultimate Bash
                                    <br />
                                    Command Generator!
                                </h2>
                                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                                    The AI-driven solution that enables you to
                                    instantly get the right bash command. Start
                                    now and be productive instead of wasting
                                    time.
                                </p>
                                <div className="mt-10 flex items-center justify-center gap-x-6">
                                    <a
                                        href="#terminal-area"
                                        className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                    >
                                        Get started
                                    </a>
                                    <a
                                        href="#"
                                        onClick={() => {
                                            setShow(!show);
                                        }}
                                        className="text-sm font-semibold leading-6 text-white"
                                    >
                                        Documentation{" "}
                                        <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </>

                <div
                    className="w-screen px-10 sm:px-20 md:px-40 xl:px-60 xxl:px-80 pt-10"
                    id="terminal-area"
                >
                    <div className="relative isolate overflow-hidden bg-black">
                        <Terminal />
                    </div>
                </div>

                <div className="pt-20 ">
                    <div className={styles.grid}>
                        <a
                            onClick={() => {
                                setShow(!show);
                            }}
                            className={styles.card}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h2 className={inter.className}>
                                Documentation <span>-&gt;</span>
                            </h2>
                            <p className={inter.className}>
                                Find in-depth information about bashgpt features
                                and API.
                            </p>
                        </a>

                        <a
                            className={styles.card}
                            target="_blank"
                            onClick={() => {
                                setShow(!show);
                            }}
                            rel="noopener noreferrer"
                        >
                            <h2 className={inter.className}>
                                Examples <span>-&gt;</span>
                            </h2>
                            <p className={inter.className}>
                                Explore bashgpt examples to help you get
                                started.
                            </p>
                        </a>

                        <a
                            href="https://twitter.com/BashGPT"
                            className={styles.card}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h2 className={inter.className}>
                                Contact <span>-&gt;</span>
                            </h2>
                            <p className={inter.className}>
                                Reach out! We would love to hear from you.
                            </p>
                        </a>
                    </div>
                </div>
                <svg
                    viewBox="0 0 1024 1024"
                    className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                    aria-hidden="true"
                >
                    <circle
                        cx={512}
                        cy={512}
                        r={512}
                        fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
                        fillOpacity="0.7"
                    />
                    <defs>
                        <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
                            <stop stopColor="#7775D6" />
                            <stop offset={1} stopColor="#E935C1" />
                        </radialGradient>
                    </defs>
                </svg>
            </main>
            <Footer />
            <>
                <div
                    aria-live="assertive"
                    className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
                >
                    <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
                        {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
                        <Transition
                            show={show}
                            as={Fragment}
                            enter="transform ease-out duration-300 transition"
                            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                                <div className="p-4">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <CheckCircleIcon
                                                className="h-6 w-6 text-green-400"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <div className="ml-3 w-0 flex-1 pt-0.5">
                                            <p className="text-sm font-medium text-gray-900">
                                                Coming Soon!
                                            </p>
                                            <p className="mt-1 text-sm text-gray-500">
                                                This will be added later.
                                            </p>
                                        </div>
                                        <div className="ml-4 flex flex-shrink-0">
                                            <button
                                                type="button"
                                                className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                onClick={() => {
                                                    setShow(false);
                                                }}
                                            >
                                                <span className="sr-only">
                                                    Close
                                                </span>
                                                <XMarkIcon
                                                    className="h-5 w-5"
                                                    aria-hidden="true"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Transition>
                    </div>
                </div>
            </>
        </>
    );
}
