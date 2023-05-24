import { getNowPlaying } from "@/lib/spotify";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useSWR from "swr";

export default async function CurrentSong() {
    const playing = await getNowPlaying();

    if (!playing.is_playing)
        return (
            <div className=" flex items-center gap-2">
                <div className="h-20 w-20 bg-slate-200 rounded-lg"></div>
                <div>
                    <div className="text-sm">{playing?.item?.name}</div>
                    <div className="text-slate-400 text-xs">
                        {playing.is_playing &&
                            playing.item.artists.map((item: any, i: number) => (
                                <Link
                                    key={item.id}
                                    href={item.external_urls.spotify}
                                    className="hover:underline mr-1"
                                >
                                    {item.name}
                                    {i != playing.item.artists.length - 1
                                        ? ","
                                        : ""}
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        );
    return (
        <div className=" flex items-center gap-2">
            <Image
                src={
                    playing.item.album.images[
                        playing.item.album.images.length - 1
                    ].url
                }
                className="h-20 w-20 bg-slate-200 rounded-lg"
                alt={playing?.item?.album?.name}
                width={50}
                height={50}
            />
            <div>
                <div className="text-sm">{playing.item.name}</div>
                <div className="text-slate-400 text-xs">
                    {playing.is_playing &&
                        playing.item.artists.map((item: any, i: number) => (
                            <Link
                                key={item.id}
                                href={item.external_urls.spotify}
                                className="hover:underline mr-1"
                            >
                                {item.name}
                                {i != playing.item.artists.length - 1
                                    ? ","
                                    : ""}
                            </Link>
                        ))}
                </div>
            </div>
        </div>
    );
}
