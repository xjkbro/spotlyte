import "./globals.css";
import { Inter } from "next/font/google";
import clsx from "clsx";
import Providers from "@/app/Providers";
import Player from "@/components/Player";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Spotlyte",
    description: "A lyte-weight Spotify player.",
};

export default async function RootLayout({
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
                    {children}
                </body>
            </Providers>
        </html>
    );
}
