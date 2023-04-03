"use client";
import { URLSearchParams } from "next/dist/compiled/@edge-runtime/primitives/url";
import React, { useEffect, useRef } from "react";
import { useState } from "react";

export default function Terminal() {
    const [command, setCommandValue] = useState("");
    const [previousCommands, setPreviousCommands] = useState<string[]>([]);
    const [previousResults, setPreviousResults] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(1);
    const lastResultRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (event: any) => {
        event.preventDefault();
        const { value } = event.target;

        setCommandValue(value);
    };

    const handleArrowKeys = (event: any) => {
        const { keyCode } = event;

        if (keyCode === 38) {
            // Up arrow key
            if (currentIndex > 0) {
                setCurrentIndex(currentIndex - 1);
                const updateCommand = previousCommands[currentIndex - 1];
                setCommandValue(updateCommand);
                console.log(updateCommand);
            }
            event.preventDefault();
        } else if (keyCode === 40) {
            // Down arrow key
            if (currentIndex < previousCommands.length - 1) {
                setCurrentIndex(currentIndex + 1);
                const updateCommand = previousCommands[currentIndex + 1];
                setCommandValue(updateCommand);
                console.log(updateCommand);
            } else {
                setCurrentIndex(previousCommands.length);
                setCommandValue("");
            }
            event.preventDefault();
        }

        console.log(
            "previousCommands[currentIndex]",
            previousCommands[currentIndex]
        );
        console.log("previousCommands.length", previousCommands.length);
        console.log("currentIndex:", currentIndex);
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const res = await fetch(
            "/api/gpt?" + new URLSearchParams({ prompt: command })
        );
        const result = await res.json();
        console.log(result);
        setPreviousResults((prevArray) => [
            ...prevArray,
            command,
            JSON.stringify(result),
        ]);
        setPreviousCommands((prevArray) => [...prevArray, command]);
        setCurrentIndex(previousCommands.length);
        setCommandValue("");

        lastResultRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
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
                <div className="flex h-96 flex-col space-y-2 overflow-y-auto bg-zinc p-3 pb-16 font-mono text-base text-light">
                    {previousResults.map((text, index) => (
                        <div
                            className="flex flex-row items-center"
                            key={index}
                            ref={
                                index === previousResults.length - 1
                                    ? lastResultRef
                                    : null
                            }
                        >
                            <div className="text-gray">&gt;</div>
                            <p className="pl-2.5" style={{ display: "block" }}>
                                {text}
                            </p>
                        </div>
                    ))}

                    <div className="flex flex-row items-center ">
                        <div className="text-gray">&gt;</div>
                        <form onSubmit={handleSubmit} className="w-full">
                            <input
                                className="w-full bg-transparent pl-2.5 focus:outline-none focus:ring-0 focus:ring-offset-0"
                                placeholder="Explain what the bash command should do..."
                                value={command}
                                onChange={handleInputChange}
                                onKeyDown={handleArrowKeys}
                            />
                        </form>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-terminal-pattern opacity-20 blur-3xl"></div>
        </div>
    );
}
