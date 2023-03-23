import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Header from "./components/header/page";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
                                        href="#"
                                        className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                    >
                                        Get started
                                    </a>
                                    <a
                                        href="#"
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

                <div className={styles.center}>
                    <div className="relative isolate overflow-hidden ">
                        <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
                            Put the terminal here
                        </div>
                    </div>
                </div>

                <div className={styles.grid}>
                    <a
                        href="/docs"
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className={inter.className}>
                            Documentation <span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            Find in-depth information about bashgpt features and
                            API.
                        </p>
                    </a>

                    <a
                        href="/examples"
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className={inter.className}>
                            Examples <span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            Explore the bashgpt examples.
                        </p>
                    </a>

                    <a
                        href="/contact"
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className={inter.className}>
                            Contact <span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            Reach out for partnerships.
                        </p>
                    </a>
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
        </>
    );
}
