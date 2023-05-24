"use client";
import React, { useEffect } from "react";
import CurrentSong from "./CurrentSongClient";
import {
    FastForwardIcon,
    PauseIcon,
    PlayIcon,
    RepeatIcon,
    RewindIcon,
    ShuffleIcon,
} from "lucide-react";
import { useSession } from "next-auth/react";
import useSpotify from "@/lib/hooks/useSpotify";

export default function Player() {
    const { data: session } = useSession();
    const spotifyApi = useSpotify();

    const [isPlaying, setIsPlaying] = React.useState(false);
    const [volume, setVolume] = React.useState(50);
    useEffect(() => {
        async function getPlaybackState() {
            if (spotifyApi.getAccessToken()) {
                spotifyApi.getMyCurrentPlaybackState().then((res) => {
                    console.log(res.body);
                    setIsPlaying(res.body.is_playing);
                });
            }
        }
        getPlaybackState();
    }, []);
    return (
        <div className="h-fit lg:h-32 w-full bg-neutral-900 text-slate-100 ">
            {/* Audio Playback */}
            <div className="w-full h-1 bg-neutral-800"></div>

            <div className="grid grid-cols-3 gap-8 justify-between items-center p-4">
                <CurrentSong spotifyApi={spotifyApi} session={session} />
                <div className="col-span-2 lg:col-span-1">
                    <div className="flex gap-4 justify-center items-center">
                        <button className="h-8 w-8 flex justify-center items-center rounded-full transition-all hover:bg-neutral-500">
                            <RepeatIcon width={16} height={16} />
                        </button>
                        <button
                            onClick={() => spotifyApi.skipToPrevious()}
                            className="h-8 w-8 flex justify-center items-center rounded-full transition-all hover:bg-neutral-500"
                        >
                            <RewindIcon width={16} height={16} />
                        </button>
                        {!isPlaying ? (
                            <button
                                onClick={() => {
                                    spotifyApi.play();
                                    setIsPlaying(true);
                                }}
                                className="w-12 h-12 flex justify-center items-center bg-slate-100 rounded-full text-neutral-900 transition-all hover:text-slate-100 hover:bg-neutral-800"
                            >
                                <PlayIcon />
                            </button>
                        ) : (
                            <button
                                onClick={() => {
                                    spotifyApi.pause();
                                    setIsPlaying(false);
                                }}
                                className="w-12 h-12 flex justify-center items-center bg-slate-100 rounded-full text-neutral-900 transition-all hover:text-slate-100 hover:bg-neutral-800"
                            >
                                <PauseIcon />
                            </button>
                        )}
                        <button
                            onClick={() => spotifyApi.skipToNext()}
                            className="h-8 w-8 flex justify-center items-center rounded-full transition-all hover:bg-neutral-500"
                        >
                            <FastForwardIcon width={16} height={16} />
                        </button>
                        <button className="h-8 w-8 flex justify-center items-center rounded-full transition-all hover:bg-neutral-500">
                            <ShuffleIcon width={16} height={16} />
                        </button>
                    </div>
                </div>
                <div className="col-span-1 w-full flex justify-end">
                    <div className="relative w-32">
                        <div className="w-32 h-2 bg-neutral-600 rounded-full"></div>
                        <div className="w-1/2 h-2 bg-slate-100 rounded-full absolute left-0 top-0"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
