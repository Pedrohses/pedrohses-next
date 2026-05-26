import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Pedro Silva | Desenvolvedor Full Stack";
const description =
  "Portfólio de Pedro Silva. Especializado na construção de APIs robustas e escaláveis com Node.js e Python.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://www.pedrohses.dev/"
  ),
  openGraph: {
    title,
    description,
    siteName: "Pedro Silva",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Pedro Silva",
  jobTitle: "Desenvolvedor Full Stack",
  url: "https://www.pedrohses.dev/",
  email: "pedrohsesilva@gmail.com",
  sameAs: [
    "https://github.com/Pedrohses",
    "https://linkedin.com/in/pedro-silva-43985125b",
  ],
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies()
  const cookieTheme = cookieStore.get("theme")?.value
  const serverTheme = cookieTheme === "light" || cookieTheme === "dark" ? cookieTheme : "dark"

  return (
    <html lang="pt-BR" className={serverTheme === "dark" ? "dark" : undefined} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}