// app/layout.tsx
import "./globals.css"; // si estás usando Tailwind u otros estilos globales

export const metadata = {
  title: "Responsive Prolog",
  description: "Editor Prolog móvil y sencillo",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
