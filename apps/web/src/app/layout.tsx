import { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  verification: { google: 'MZ5uiRya7PN81lDA3gaTujr4KhMMhI1F-L7xxRUErAo' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  )
}
