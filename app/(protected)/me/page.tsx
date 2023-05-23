import Heading from "@/components/Heading";
import SignOut from "@/components/SignOut";
import { authOptions } from "@/lib/auth";
import { getUser } from "@/lib/spotlyte";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";

export default async function Me() {
    // const user = await getUser();
    const session = await getServerSession(authOptions);
    const user = await getUser(session?.user?.accessToken);

    return (
        <div>
            {/* <Image src={user?.}/> */}
            <Heading title="User Account" />
            <div className="flex flex-col justify-center items-center gap-4">
                {user.images ? (
                    <Image
                        src={user?.images[0]?.url}
                        alt="s"
                        width={200}
                        height={200}
                        className="w-96 h-96 rounded-full"
                    />
                ) : (
                    <></>
                )}
                <h1 className="text-slate-100 font-semibold text-2xl">
                    {user.display_name}
                </h1>
                <SignOut className="text-white bg-green-700 hover:bg-green-600 transition-all rounded-full py-2 px-8 w-fit" />
            </div>
            <pre className="text-slate-100">
                {JSON.stringify(session, null, 2)}
            </pre>
            {/* <pre className="text-slate-100">
                {JSON.stringify(user, null, 2)}
            </pre> */}
        </div>
    );
}
