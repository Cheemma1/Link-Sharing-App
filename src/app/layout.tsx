import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Dev Link APP",
  description: "A link sharing app",
  icons: {
    icon: "/logo1.svg",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
