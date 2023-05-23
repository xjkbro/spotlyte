import Heading from "@/components/Heading";
import { getUser, getUserPlaylists } from "@/lib/spotify";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
    const user = await getUser();
    const playlists = await getUserPlaylists(user.id);
    return (
        <>
            {/* @ts-expect-error Server Component */}
            <Heading />
            <div className="text-slate-100 flex gap-4">
                <div className="flex flex-col p-2 rounded-lg bg-neutral-500 w-full h-fit overflow-scroll">
                    {playlists.items.map((item: any) => (
                        <Link
                            key={item.id}
                            href={"/playlist/" + item.id}
                            className="flex gap-4 hover:bg-neutral-700 p-2 rounded-lg items-center"
                        >
                            <Image
                                src={item.images[item.images.length - 1].url}
                                alt={item.name}
                                width={50}
                                height={50}
                            />
                            <span>{item.name}</span>
                        </Link>
                    ))}
                </div>
                {/* <pre className="p-2 rounded-lg bg-neutral-500 w-full h-96 overflow-scroll text-slate-100">
                    {JSON.stringify(playlists, null, 2)}
                </pre> */}
            </div>
        </>
    );
}
