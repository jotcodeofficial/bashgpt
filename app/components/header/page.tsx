export default function Header() {
    return (
        <header className="w-full">
            <div className="mx-5 flex h-16 pt-8 max-w-screen-xl items-center justify-between xl:mx-auto">
                <a
                    className="relative flex items-center font-display text-2xl"
                    href="/"
                >
                    <p className="font-sans font-bold text-white">BashGPT</p>
                </a>
                <div></div>
            </div>
        </header>
    );
}
