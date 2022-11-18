import { basicInfo } from '../constants/siteInfo';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{basicInfo.author}</title>
        <meta name="description" content={basicInfo.descriptions} />
        <meta name="keywords" content={basicInfo.keywords} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
