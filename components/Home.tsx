import Link from "next/link";
import React from "react";

export default function Home() {
    return (
        <main className="h-screen w-full flex justify-center items-center">
            <h1 className="text-6xl font-bold">Spotlyte</h1>
            <Link href="/api/auth">Login With Spotify</Link>
        </main>
    );
}
