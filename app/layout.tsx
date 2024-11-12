import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import PrivacyPolicy from "@/components/PrivacyPolicy";

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    variable: '--font-jetbrainsMono',
});

export const metadata: Metadata = {
    title: "Kevin PFIFFER - Portfolio 2024",
    description: "Bienvenu sur mon portfolio de junior développeur full stack.",
    openGraph: {
        title: "Kevin PFIFFER - Portfolio 2024",
        description: "Bienvenu sur mon portfolio de junior développeur full stack.",
        url: "https://kevin-pfiffer-portfolio.vercel.app/",
        siteName: "Kevin PFIFFER - Portfolio 2024",
        images: [
            {
                url: "https://kevin-pfiffer-portfolio.vercel.app/assets/kevin-pfiffer.webp",
                width: 800,
                height: 600,
            },
        ],
        locale: "fr_FR",
        type: "website",
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="fr">
            <body className={jetbrainsMono.variable}>
                <Header />
                <StairTransition />
                <PageTransition>
                    {children}
                    <PrivacyPolicy />
                </PageTransition>
            </body>
        </html>
    );
}
