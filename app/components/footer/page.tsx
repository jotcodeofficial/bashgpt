export default function Footer() {
    return (
        <footer>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="flex justify-between">
                    <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
                        <p className="text-xs leading-5 text-white">
                            &copy; 2023 BashGPT
                        </p>
                    </div>
                    <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
                        <a
                            href="https://twitter.com/BashGPT"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <p className="text-xs leading-5 text-white">
                                @BashGPT
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
