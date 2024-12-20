import localFont from "next/font/local";
import "./globals.css";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import About from "./About/page";
// import {metadata} from "next";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title:{
    absolute:"",
    default:"Arya School Mombasa",
    template:"%s |Arya School "
  },
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Topbar></Topbar>
        {children}


        <Footer></Footer>
      </body>
    </html>
  );
}
