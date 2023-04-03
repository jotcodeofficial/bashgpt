import "./globals.css";

export const metadata = {
    title: "BashGPT",
    description: "The Ultimate Bash Command Generator!",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
