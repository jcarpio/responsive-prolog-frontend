import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'; // si tienes estilos globales propios

export const metadata = {
  title: 'Responsive Prolog',
  description: 'Ejecuta consultas Prolog fácilmente',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
