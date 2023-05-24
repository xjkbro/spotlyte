"use client";
import { signOut } from "next-auth/react";
import React from "react";

export default function SignOut({ className }: { className: string }) {
    return (
        <button
            className={className}
            onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
        >
            Sign Out
        </button>
    );
}
