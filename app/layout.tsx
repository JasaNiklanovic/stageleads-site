import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import Analytics from '@/components/Analytics';
import { Suspense } from "react";

export const metadata: Metadata = {
  title: 'StageLeads.io — Speaker & attendee lists',
  description: 'Ready-to-use CSVs of speakers, founders, and decision-makers from the world’s top conferences.',
  openGraph: {
    title: 'StageLeads.io',
    description: 'Speaker & attendee lists for sales, founders, and agencies.',
    type: 'website',
    url: 'https://stageleads.io'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
        {/* GA base tag */}
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', { send_page_view: false });
              `}
            </Script>
          </>
        )}
      </head>
      <body>
        <header className="max-w-[960px] mx-auto px-5 py-6 flex items-center justify-between">
          <a href="/" className="font-extrabold">StageLeads.io</a>
          <nav className="text-sm flex gap-4">
            <a href="#bundles" className="hover:underline">Bundles</a>
            <a href="#events" className="hover:underline">Events</a>
            <a href="#request" className="hover:underline">Request</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="max-w-[960px] mx-auto px-5 py-12 text-sm text-slate-500">
          <div className="border-t border-slate-200 pt-6 flex flex-wrap gap-4 justify-between">
            <span>© {new Date().getFullYear()} StageLeads.io</span>
            <nav className="flex gap-4">
              <a href="/privacy" className="hover:underline">Privacy</a>
              <a href="/terms" className="hover:underline">Terms</a>
              <a href="mailto:hi@stageleads.io" className="hover:underline">Contact</a>
            </nav>
          </div>
        </footer>
        {/* Track SPA route changes */}
        {gaId && (
          <Suspense fallback={null}>
            <Analytics />
          </Suspense>
        )}
      </body>
    </html>
  );
}
