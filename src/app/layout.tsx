import Navbar from "@/components/shared/navbar";
import { ThemeProvider } from "@/hooks/use-theme";
import "@/styles/global.css";
import { Open_Sans, Inconsolata } from "next/font/google";

const openSans = Open_Sans({
  variable: "--font-opensans",
  display: "swap",
  subsets: ["latin"],
});

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  display: "swap",
  subsets: ["latin"],
});

export const metadata = {
  title: "Eray Kaya",
  description: "Lead Developer",
  icons: {
    icon: "/circular-v3.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <html
        lang="en"
        data-theme="dark"
        className={`${inconsolata.variable} ${openSans.variable}`}
      >
        
        <body>
          <Navbar />
          <main>{children}</main>
        </body>
      </html>
    </ThemeProvider>
  );
}
