"use client";
import { useState } from "react";

export default function Terminal() {
    const [command, setCommandValue] = useState("");

    const handleInputChange = (event: any) => {
        event.preventDefault();
        const { value, keyCode } = event.target;
        if (keyCode === 13) {
            // 13 is the keycode for the Enter key
            console.log("Enter key pressed ✅");
        }

        setCommandValue(value);
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const res = await fetch("/api/chatgpt/");
        const result = await res.json();
        console.log(result);
    };

    return (
        <div className="flex w-full flex-col items-center justify-center">
            <div className="relative z-10 m-auto w-full overflow-hidden rounded-lg border border-light/5 font-mono leading-normal subpixel-antialiased shadow-3xl xl:px-0">
                <div className="relative flex h-6 w-full items-center justify-center space-x-2 border-b border-slate bg-slate p-4">
                    <div className="group absolute left-3 flex flex-1 space-x-2 justify-self-start">
                        <div className="h-3 w-3 rounded-full bg-red-500"></div>
                        <div className="ml-2 h-3 w-3 rounded-full bg-orange-300"></div>
                        <div className="ml-2 h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                </div>
                <div className="flex h-96 flex-col space-y-2 overflow-y-auto bg-zinc p-3 pb-16 font-mono text-base text-light ">
                    <div className="flex flex-row items-center ">
                        <div className="text-gray">&gt;</div>
                        <form onSubmit={handleSubmit} className="w-full">
                            <input
                                className="w-full bg-transparent pl-2.5 focus:outline-none focus:ring-0 focus:ring-offset-0"
                                placeholder="Explain what the bash command should do..."
                                value={command}
                                onChange={handleInputChange}
                            />
                        </form>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-terminal-pattern opacity-20 blur-3xl"></div>
        </div>
    );
}
