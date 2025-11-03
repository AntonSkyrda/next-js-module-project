import type {Metadata} from "next";
import {HeaderComponent} from "@/components/header-component/HeaderComponent";
import "./globals.css"; // глобальні стилі (Tailwind, reset, тощо)

export const metadata: Metadata = {
    title: "MovieVerse",
    description: "Movie catalogue built with Next.js + TMDB API",
};

export default function RootLayout({children}: { children: React.ReactNode; }) {
    return (
        <html lang="uk">
        <body
            className="
          bg-slate-50 dark:bg-slate-900
          text-slate-800 dark:text-slate-100
          min-h-screen
          flex flex-col
        "
        >
        <HeaderComponent/>
        <main className="flex-1">{children}</main>
        </body>
        </html>
    );
}
