// "use client";
import React from "react";
import CurrentSong from "./CurrentSong";

export default async function Player() {
    return (
        <div className="bg-neutral-900 text-slate-100 h-32 w-full grid grid-cols-8 items-center p-4">
            <CurrentSong />
            <div className="col-span-4 ">
                <div className="flex gap-4 justify-center items-center">
                    <button className="h-6 w-6 rounded-full transition-all hover:bg-neutral-500">
                        ⓧ
                    </button>
                    <button className="h-6 w-6 rounded-full transition-all hover:bg-neutral-500">
                        ≪
                    </button>
                    <button className="w-12 h-12 flex justify-center items-center bg-slate-100 rounded-full text-neutral-900 transition-all hover:text-slate-100 hover:bg-neutral-800">
                        ▶︎
                    </button>
                    <button className="h-6 w-6 rounded-full transition-all hover:bg-neutral-500">
                        ≫
                    </button>
                    <button className="h-6 w-6 rounded-full transition-all hover:bg-neutral-500">
                        ∞
                    </button>
                </div>
                <br />
                <div className="w-full h-2 bg-slate-100 rounded-full"></div>
            </div>
            <div className="col-span-2 flex justify-end">
                <div className="w-32 h-2 bg-slate-100 rounded-full"></div>
            </div>
        </div>
    );
}
