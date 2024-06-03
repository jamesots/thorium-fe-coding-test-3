import type { Metadata } from 'next';
import { Krona_One } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const kronaOne = Krona_One({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-krona-one',
});
const messinaSans = localFont({
    src: [
        {
            path: './MessinaSans-Regular.woff2',
            weight: 'normal',
        },
        {
            path: './MessinaSans-Bold.woff2',
            weight: 'bold',
        },
        {
            path: './MessinaSerif-RegularItalic.woff2',
            style: 'italic',
            weight: 'normal',
        },
        {
            path: './MessinaSerif-SemiBoldItalic.woff2',
            style: 'italic',
            weight: 'bold',
        },
    ],
    variable: '--font-messina-sans',
});

export const metadata: Metadata = {
    title: 'MagnaCare Access',
    description: 'Expand your provider network anywhere in the country. Or lease just the network locations you need. With MagnaCare Access, the choice is yours.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${kronaOne.variable} ${messinaSans.variable} bg-dark-blue`}>
            <body>{children}</body>
        </html>
    );
}
