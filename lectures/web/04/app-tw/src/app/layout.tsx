import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'naiithink',
  description: 'Compilation of naiithink\'s',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Navbar />
      {children}
      <Footer />
    </html>
  )
}
