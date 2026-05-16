import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Domain Safety Scanner – Scan domains for registration traps and hidden fees",
  description: "Checks domain registrars for hidden fees, auto-renewals, and predatory practices before you register."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="beb63a42-4542-4d99-96fc-410008295757"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
