import { getTopTracks } from "@/lib/spotify";
import { NextResponse } from "next/server";

export async function GET() {
    const response = await getTopTracks();
    const { items } = await response.json();

    const tracks = items.slice(0, 10).map((track: any) => {
        return { ...track };
    });

    return NextResponse.json({ tracks });
}
