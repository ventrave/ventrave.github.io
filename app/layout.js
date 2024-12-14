
import "./globals.css";

export const metadata = {
  title: "ventrave",
  description: "Discover the next-gen leading roblox macos exploit.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
