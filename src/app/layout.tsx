import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

import {
  createTheme,
  MantineProvider,
  ColorSchemeScript,
  MantineColorsTuple,
} from "@mantine/core";
import "@mantine/core/styles.css";
import { Suspense } from "react";

import Loader from "@/src/components/resuable/Loader";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Reverend Fayomi",
    default: "Reverend Fayomi",
  },
  description: "Memorial service for the late Proffesor Jacob Adeleke Fayomi",
};

const myColor: MantineColorsTuple = [
  "#fff7e4",
  "#f9ecd4",
  "#edd7ac",
  "#e3c080",
  "#dbad5a",
  "#d6a143",
  "#d39b35",
  "#ba8726",
  "#a7781f",
  "#906612",
];

const theme = createTheme({
  colors: {
    myColor,
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body className={sora.className}>
        <Suspense fallback={<Loader />}>
          <MantineProvider theme={theme}>{children}</MantineProvider>
        </Suspense>
      </body>
    </html>
  );
}
