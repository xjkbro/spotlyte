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
            <Heading title="" />
            <div className="flex flex-col justify-center items-center gap-4 mt-12">
                {user.images ? (
                    <Image
                        src={user?.images[0]?.url}
                        alt="s"
                        width={200}
                        height={200}
                        className="w-72 h-72 rounded-full"
                    />
                ) : (
                    <></>
                )}
                <h1 className="text-slate-100 font-semibold text-2xl">
                    {user.display_name}
                </h1>
                <div className="grid grid-cols-3 gap-2 ">
                    <div className="text-center text-slate-100 w-32">
                        <div>Followers</div>
                        <div>{user.followers.total}</div>
                    </div>
                    <div className="text-center text-slate-100 w-32">
                        <div>Following</div>
                        <div>28</div>
                    </div>
                    <div className="text-center text-slate-100 w-32">
                        <div>Playlists</div>
                        <div>43</div>
                    </div>
                </div>
                <SignOut className="text-white bg-violet-700 hover:bg-violet-600 transition-all rounded-full py-2 px-8 w-fit" />
            </div>
            {/* <pre className="text-slate-100">
                {JSON.stringify(session, null, 2)}
            </pre>
            <pre className="text-slate-100">
                {JSON.stringify(user, null, 2)}
            </pre> */}
        </div>
    );
}
