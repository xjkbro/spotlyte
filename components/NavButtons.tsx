"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ArrowBigLeftIcon, ArrowBigRightIcon } from "lucide-react";

export default function NavButtons() {
    const router = useRouter();
    return (
        <>
            <button
                onClick={() => {
                    router.back();
                }}
                className="w-12 h-12 flex justify-center items-center rounded-full bg-slate-200/40 text-white font-bold text-xl"
            >
                <ArrowBigLeftIcon />
            </button>
            <button
                onClick={() => router.forward()}
                className="w-12 h-12 flex justify-center items-center rounded-full bg-slate-200/40 text-white font-bold text-xl"
            >
                <ArrowBigRightIcon />
            </button>
        </>
    );
}
