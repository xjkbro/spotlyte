"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import useSpotify from "@/lib/hooks/useSpotify";
import Image from "next/image";
import Link from "next/link";

export default function CurrentSong({
    spotifyApi,
    session,
}: {
    spotifyApi: any;
    session: any;
}) {
    // const spotifyApi = useSpotify();
    // const { data: session } = useSession();
    const [playing, setCurrentSong] = useState(null);

    useEffect(() => {
        async function getNowPlaying() {
            if (spotifyApi.getAccessToken()) {
                spotifyApi.getMyCurrentPlayingTrack().then((res) => {
                    setCurrentSong(res.body);
                });
            }
        }
        getNowPlaying();
        setInterval(getNowPlaying, 1000);
    }, [spotifyApi, session]);

    if (!playing)
        return (
            <div className="col-span-2 md:col-span-1 flex items-center gap-2">
                <div className="w-12 h-12 lg:h-20 lg:w-20 bg-neutral-600 rounded-lg"></div>
                <div>
                    <div className="text-sm w-40 bg-neutral-500 h-2 rounded-full my-2"></div>
                    <div className="text-slate-400 text-xs w-32 bg-neutral-500 h-2 rounded-full my-2"></div>
                </div>
            </div>
        );

    return (
        <div className="col-span-2 md:col-span-1 flex items-center gap-2">
            <Image
                src={
                    playing.item.album.images[
                        playing.item.album.images.length - 1
                    ].url
                }
                className="w-12 h-12 lg:h-20 lg:w-20 bg-slate-200 rounded-lg"
                alt={playing?.item?.album?.name}
                width={50}
                height={50}
            />
            <div>
                <div className="text-sm whitespace-nowrap truncate">
                    {playing.item.name}
                </div>
                <div className="text-slate-400 text-xs">
                    {playing.item.artists.map((item: any, i: number) => (
                        <Link
                            key={item.id}
                            href={item.external_urls.spotify}
                            className="hover:underline mr-1"
                        >
                            {item.name}
                            {i != playing.item.artists.length - 1 ? "," : ""}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
