import "./globals.css";
import "../public/assets/css/modal-video.css";

import BootstrapClient from "@/components/common/BootstrapClient";

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-scroll-behavior="smooth">
            <head>
                <link rel='icon' type='image/png' href='../favicon.ico' />
            </head>
            <body>
                {children}
                <BootstrapClient />
            </body>
        </html>
    );
}