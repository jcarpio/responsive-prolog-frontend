// app/layout.tsx
import "../styles/globals.css"; // ⚠️ asegúrate de que este archivo existe

export const metadata = {
  title: "Responsive Prolog",
  description: "Ejecuta código Prolog desde tu móvil",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
