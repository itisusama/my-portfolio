import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"
import PageTransition from "@/components/PageTransition";
import StairsTransition from "@/components/StairsTransition";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono" 
});

export const metadata = {
  title: "Usama Hassan",
  description: "I am a Software Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-2655919799408822" />
      </head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2655919799408822"
     crossorigin="anonymous"></script>
      <body className={jetbrainsMono.variable}>
        <Header/>
        <StairsTransition/>
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
