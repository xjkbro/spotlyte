import Heading from "@/components/Heading";
import SignIn from "@/components/SignIn";
import { getUser, getUserPlaylists } from "@/lib/spotify";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
    return (
        <div className="h-screen w-full flex justify-center items-center text-slate-100 bg-gradient-to-b from-neutral-900 via-neutral-800 via-20% to-neutral-700 to-100% overflow-scroll">
            <div className="w-full h-full lg:w-5/6 lg:h-5/6 bg-gradient-to-bl from-violet-600 via-fuchsia-700  to-red-400 background-animate p-8 lg:p-24 font-mono grid items-center lg:grid-cols-2 lg:gap-24">
                {/* <div className="">
                    <div className=" text-4xl lg:text-6xl font-mono font-bold text-center">
                        SpotLyte
                    </div>
                    <br />
                    <div className=" text-xl lg:text-2xl font-mono font-thin">
                        {"//"}
                    </div>
                    <div className=" text-xl lg:text-4xl font-mono text-center">
                        A lyte-weight Spotify player for simple listening.
                    </div>
                    <br />
                    <div className=" text-xl lg:text-4xl font-mono text-center">
                        It&apos;s like Spotify, but lyte.
                    </div>
                    <div className=" text-xl lg:text-2xl font-mono font-thin text-right">
                        {"//"}
                    </div>

                    <div className=" text-xl lg:text-3xl font-mono">
                        Click the button to the right and just vibe. 😎
                    </div>
                </div> */}
                <div className="">
                    <div className=" text-4xl lg:text-6xl font-mono font-bold">
                        SpotLyte
                    </div>
                    <br />
                    <div className=" text-xl lg:text-2xl font-mono font-thin">
                        {/* {"//"} */}
                    </div>
                    {/* <div className=" text-xl lg:text-4xl font-mono">
                        A lyte-weight Spotify player for simple listening.
                    </div> */}
                    <br />
                    <div className=" text-xl lg:text-4xl font-mono">
                        It&apos;s like Spotify, but lyte.
                    </div>
                    <div className=" text-xl lg:text-2xl font-mono font-thin">
                        {/* {"//"} */}
                    </div>
                    <br />
                    <SignIn />

                    {/* <div className=" text-xl lg:text-3xl font-mono">
                        Click the button to the right and just vibe. 😎
                    </div> */}
                </div>
                <div className="flex flex-col lg:justify-center gap-8 lg:items-center h-full">
                    <Image
                        className="hidden lg:block lg:h-96 w-fit rounded-xl"
                        width={500}
                        height={1000}
                        src={"/mockup.png"}
                        alt="Demo"
                    />
                </div>
            </div>
        </div>
    );
}
