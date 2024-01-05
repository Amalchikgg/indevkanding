import Header from "@/Components/Header";
import "./globals.css";
import CustomFont from "next/font/local";
import Footer from "@/Components/Footer";

export const gilroy = CustomFont({
  src: [
    { path: "../public/assets/fonts/Gilroy-Light.ttf", weight: "300" },
    { path: "../public/assets/fonts/Gilroy-Medium.ttf", weight: "500" },
    { path: "../public/assets/fonts/Gilroy-Semibold.ttf", weight: "600" },
  ],
});

export const radio = CustomFont({
  src: [
    { path: "../public/assets/fonts/RoadRadio-Light.ttf", weight: "300" },
    { path: "../public/assets/fonts/RoadRadio.ttf", weight: "400" },
    { path: "../public/assets/fonts/RoadRadio-Bold.ttf", weight: "700" },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <title>Indev Group</title>
      <meta name='description' content='Indev Grop' />
      <body className={radio.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
