import { Metadata } from "next";
import { Inter, Geist, Caveat } from "next/font/google";
import "@/app/globals.css";
import { Navbar } from "../components/navbar/navbar";
import { ThemeProvider } from "../components/ui/theme-provider";
import { Footer } from "../components/ui/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500"],
});
export const metadata: Metadata = {
  title: "Cafeteriast",
  description:
    "Your ultimate cafe companion. Discover, order, and enjoy your favorite coffee with ease. Explore our curated selection of cafes, place orders seamlessly, and savor every sip. Join us on a journey to elevate your coffee experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistSans.variable} ${caveat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (function() {
            try {
              var theme = localStorage.getItem('theme')
              if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
              }
            } catch(e) {}
          })()
        `,
          }}
        />
      </head>
      <body className="min-h-full" >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange

        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
