import type { Metadata } from "next";
import { Be_Vietnam_Pro, Dancing_Script, Playfair_Display } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import RevealOnScroll from "@/components/RevealOnScroll";
import { site } from "@/lib/data/site";
import { antdTheme } from "@/lib/theme";

// Font phải có subset vietnamese (docs/REQUIREMENTS.md mục 4.3)
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600"],
});

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: site.fullName,
    template: `%s | ${site.fullName}`,
  },
  description: site.description,
  openGraph: {
    title: site.fullName,
    description: site.description,
    locale: "vi_VN",
    type: "website",
    siteName: site.fullName,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      className={`${playfair.variable} ${beVietnam.variable} ${dancing.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Suspense fallback={null}>
          <AntdRegistry>
            <ConfigProvider theme={antdTheme}>
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
              <FloatingContact />
              <RevealOnScroll />
            </ConfigProvider>
          </AntdRegistry>
        </Suspense>
      </body>
    </html>
  );
}
