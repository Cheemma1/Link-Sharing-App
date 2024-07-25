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
    <div className="bg-lightGrey font-sans px-4 md:px-8">
      <header>
        <Navbar />
      </header>
      <main className="flex justify-between gap-4">
        <LinkFrame />
        <Providers>{children}</Providers>
      </main>
    </div>
  );
}
