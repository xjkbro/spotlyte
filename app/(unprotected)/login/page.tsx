"use client";
import React, { use } from "react";
import { signIn } from "next-auth/react";
// import Link from "next/link";

export default async function Login() {
    return (
        <div className="h-screen w-full text-white flex justify-center items-center bg-neutral-700">
            <button
                onClick={() => signIn("spotify", { callbackUrl: "/dashboard" })}
            >
                Login with Spotify
            </button>
        </div>
    );
}
