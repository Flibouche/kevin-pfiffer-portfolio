import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    variable: '--font-jetbrainsMono',
});

export const metadata: Metadata = {
    title: "Kevin PFIFFER - Portfolio 2024",
    description: "Bienvenu sur mon portfolio de junior développeur full stack.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="fr">
            <body className={jetbrainsMono.variable}>
                <Header />
                <StairTransition />
                <PageTransition>
                    {children}
                </PageTransition>
            </body>
        </html>
    );
}
