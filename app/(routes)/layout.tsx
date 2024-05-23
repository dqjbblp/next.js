import Nav from "../components/Nav/Nav";
import "./globals.css";
import Time from "../components/Time";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'p-8 min-h-dvh flex flex-col'}>
        <div className={'h-12'}><Time /></div>
        <div className={'flex flex-1'}>
          <Nav />
          <div className={'mt-16 pl-8 flex-1'}>{children}</div>
        </div>
      </body>
    </html>
  );
}
