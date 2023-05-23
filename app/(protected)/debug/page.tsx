"use client";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { signOut, useSession } from "next-auth/react";
import React from "react";

export default function Admin() {
    const session = useSession();
    return (
        <>
            <button onClick={() => signOut()}>Sign out</button>
            <pre>{JSON.stringify(session, null, 2)}</pre>;
        </>
    );
}
