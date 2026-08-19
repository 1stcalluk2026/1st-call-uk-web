import "./globals.css";
import "./stack.css";
import CookieBanner from "./components/CookieBanner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { CONTACT_EMAIL, SITE_URL } from "./lib/site";

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "1st Call UK | Web & Digital Solutions",
    template: "%s | 1st Call UK Web & Digital",
  },

  description:
    "Professional web design and development from Nottingham. We build fast, modern, future-proof websites for businesses across the UK.",

  robots: "index, follow",

  openGraph: {
    type: "website",
    siteName: "1st Call UK Web & Digital",
    url: "https://1stcalluk.website",
    images: [
      {
        url: "https://1stcalluk.website/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "1st Call UK Web & Digital Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "1st Call UK | Web & Digital Solutions",
    description:
      "Professional web design and development from Nottingham. We build fast, modern, future-proof websites for businesses across the UK.",
    images: ["https://1stcalluk.website/og-image.jpg"],
  },

  alternates: {
    canonical: "https://1stcalluk.website",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">

        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner
          logoSrc="/1st-call-uk-web-logo2.png"
          logoAlt="1st Call UK Web & Digital"
          policyHref="/legal/cookie-policy"
        />

        {/* ===== ORGANISATION SCHEMA ===== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "1st Call UK Web & Digital",
              url: "https://1stcalluk.website",
              logo: "https://1stcalluk.website/1st-calluk-web-logo.jpg",
              telephone: "+441158450000",
              email: CONTACT_EMAIL,
              address: {
                "@type": "PostalAddress",
                streetAddress: "The Old Coach House, 25 Noel Street",
                addressLocality: "Nottingham",
                postalCode: "NG7 6AQ",
                addressCountry: "GB",
              },
              description:
                "Professional web design, development, and digital growth services based in Nottingham. We build fast, modern websites using Next.js for businesses across the UK.",
              sameAs: [
                "https://github.com/1stcalluk",
                "https://www.linkedin.com/company/1stcalluk",
              ],
            }),
          }}
        />

        {/* ===== WEBSITE SCHEMA ===== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "1st Call UK Web & Digital",
              url: "https://1stcalluk.website",
            }),
          }}
        />

        {/* ===== BREADCRUMB SCHEMA ===== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://1stcalluk.website",
                },
              ],
            }),
          }}
        />

        {/* ===== CHATBASE AI ASSISTANT ===== */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
              if(!window.chatbase || window.chatbase("getState")!=="initialized"){
                window.chatbase=(...arguments)=>{
                  if(!window.chatbase.q){window.chatbase.q=[]}
                  window.chatbase.q.push(arguments)
                };
                window.chatbase=new Proxy(window.chatbase,{
                  get(target,prop){
                    if(prop==="q"){return target.q}
                    return(...args)=>target(prop,...args)
                  }
                })
              }
              const onLoad=function(){
                const script=document.createElement("script");
                script.src="https://www.chatbase.co/embed.min.js";
                script.id="BpVYDLxfQ4AwaPDDs5_zr";
                script.domain="www.chatbase.co";
                document.body.appendChild(script)
              };
              if(document.readyState==="complete"){onLoad()}
              else{window.addEventListener("load",onLoad)}
            })();`,
          }}
        />
      </body>
    </html>
  );
}