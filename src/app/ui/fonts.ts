import localFont from "next/font/local";
import { Inter, Lora } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const lora = Lora({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lora",
});

const fontHeading = localFont({
  src: "./assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export { inter, fontHeading, lora };
