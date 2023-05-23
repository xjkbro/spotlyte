"use client";
import { signIn } from "next-auth/react";
import React from "react";

export default function SignIn() {
    return (
        <button
            className="bg-fuchsia-400 text-white p-4 rounded-full lg:w-96"
            onClick={() => signIn("spotify", { callbackUrl: "/dashboard" })}
        >
            Login with Spotify
        </button>
    );
}
