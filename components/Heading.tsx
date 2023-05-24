import { getUser } from "@/lib/spotify";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavButtons from "@/components/NavButtons";

export default async function Heading({ title = "" }) {
    const user = await getUser();
    return (
        <div className="flex justify-between items-center h-24">
            <div className="flex gap-4 items-center">
                <div className="flex items-center h-28 gap-4 justify-center">
                    <NavButtons />
                </div>
                <h1 className="text-slate-100 text-3xl font-bold">{title}</h1>
            </div>
            <Link
                href="/me"
                className="flex gap-4 bg-neutral-700 rounded-full h-fit p-1 text-slate-100"
            >
                <Image
                    src={user.images[0].url}
                    alt={"user avatar"}
                    width={20}
                    height={20}
                    className="w-6 h-6 rounded-full bg-slate-100"
                />
                <div className="px-4 truncate">{user.display_name}</div>
            </Link>
        </div>
    );
}
