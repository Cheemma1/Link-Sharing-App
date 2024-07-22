import Head from "next/head";
import "./globals.css";

export type Metadata = {
  title: string;
  description: string;
};
export const metadata: Metadata = {
  title: "Dev Link APP",
  description: "A link sharing app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/logo1.svg" type="image/svg+xml" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
