"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function NavButtons() {
    const router = useRouter();
    return (
        <>
            <button
                onClick={() => {
                    router.back();
                }}
                className="w-12 h-12 rounded-full bg-slate-200/40 text-white font-bold text-xl"
            >
                ≪
            </button>
            <button
                onClick={() => router.forward()}
                className="w-12 h-12 rounded-full bg-slate-200/40 text-white font-bold text-xl"
            >
                ≫
            </button>
        </>
    );
}
