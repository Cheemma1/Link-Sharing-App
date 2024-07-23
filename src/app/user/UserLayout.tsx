import Head from "next/head";
import "../../app/globals.css";
import Navbar from "@/components/Navbar";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/logo1.svg" type="image/svg+xml" />
        <title>Home</title>
        <meta name="description" content="Home page of the Dev Link APP" />
      </Head>
      <body className="bg-lightGrey">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
