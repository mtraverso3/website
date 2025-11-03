import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "mtraverso.net",
  description: "Marcos Traverso - Graduate student in Computer Science, Software Engineer with experience at Kyros AI and Starburst Data",
  keywords: ["Marcos Traverso", "mtraverso3", "Computer Science", "Software Engineer", "Machine Learning", "Stevens Institute of Technology", "DevOps", "Full Stack Developer"],
  authors: [{ name: "Marcos Traverso" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme && theme !== 'auto') {
                    document.body.classList.add(theme + '-theme');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
