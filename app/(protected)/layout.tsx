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

export default async function ProtectedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <Providers>
                <body
                    className={clsx(
                        "overscroll-y-none select-none",
                        inter.className
                    )}
                >
                    <main className="flex flex-col justify-center items-center h-screen w-full overflow">
                        <section className="h-full w-full bg-neutral-700 overflow-scroll">
                            <div className="relative p-8">
                                <div className="absolute left-0 top-0 h-96 w-full z-10 bg-gradient-to-b from-neutral-900 via-neutral-800 via-20% to-neutral-700 to-100% text-slate-100"></div>
                                <div className="relative z-20">{children}</div>
                            </div>
                        </section>
                        {/* @ts-ignore */}
                        <Player />
                    </main>
                </body>
            </Providers>
        </html>
    );
}
