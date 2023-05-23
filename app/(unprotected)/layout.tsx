import "../globals.css";
import { Inter } from "next/font/google";
import clsx from "clsx";
import Providers from "@/app/Providers";
import Player from "@/components/Player";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Spotlyte",
    description: "A lyte-weight Spotify player.",
};

export default async function UnprotectedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="flex flex-col justify-center items-center h-screen w-full overflow">
            {children}
        </main>
    );
}
