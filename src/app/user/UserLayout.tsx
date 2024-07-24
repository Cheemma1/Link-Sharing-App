import "../../app/globals.css";
import Navbar from "@/components/Navbar";
import LinkFrame from "@/components/LinkFrame";
import { Providers } from "../providers";

export const metadata = {
  title: "Home",
  description: "Home page of the Dev Link APP",
  icons: {
    icon: "/logo1.svg",
  },
};

interface UserLayoutProps {
  children: React.ReactNode;
}

export default function UserLayout({ children }: UserLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-lightGrey">
        <Navbar />
        <main className="flex justify-between container mx-auto p-6">
          <LinkFrame />

          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
