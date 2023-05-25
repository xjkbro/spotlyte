import Heading from "@/components/Heading";
import { getPlaylistDetails } from "@/lib/spotify";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Playlist({ params }: { params: { id: string } }) {
    // const user = await getUser();
    // const playlists = await getUserPlaylists(user.id);

    const playlist = await getPlaylistDetails(params.id);
    // console.log(playlist.tracks.items[0]);
    console.log(playlist);
    return (
        <>
            {/* @ts-expect-error Server Component */}
            <Heading title={playlist.name} />
            <div className="w-full text-slate-100">
                {playlist.tracks.items.map((item: any, i: number) => (
                    <div
                        key={item.track.id}
                        className="flex items-center gap-4 py-2 px-4 hover:bg-neutral-500/50 rounded-lg"
                    >
                        <div className="w-8 text-center">{i + 1}</div>
                        <Image
                            src={
                                item.track.album.images[
                                    item.track.album.images.length - 1
                                ].url
                            }
                            width={50}
                            height={50}
                            alt={"s"}
                            className="w-12 h-12"
                        />
                        <div className="w-full truncate">
                            <div className="truncate">{item.track.name}</div>
                            <div className="">
                                {item.track.artists.map(
                                    (item: any, i: number) => (
                                        <Link
                                            key={item.id}
                                            href={item.external_urls.spotify}
                                            className="hover:underline mr-1"
                                        >
                                            {item.name}
                                        </Link>
                                    )
                                )}
                            </div>
                        </div>
                        <div className="w-96 truncate">
                            {item.track.album.name}
                        </div>
                        <div className="w-24 truncate">
                            {Math.floor(
                                (item.track.duration_ms / 1000 / 60) << 0
                            ) +
                                ":" +
                                pad(
                                    Math.floor(
                                        (item.track.duration_ms / 1000) % 60
                                    )
                                )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
function pad(d) {
    return d < 10 ? "0" + d.toString() : d.toString();
}
