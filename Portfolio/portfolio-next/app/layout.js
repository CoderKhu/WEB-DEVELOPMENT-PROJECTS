import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
// metadata-information about the document

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* html-This tag informs the browser that it is an HTML document */}
      <head>
      {/* It should be the first element inside the <html> element, which contains the metadata */}
      </head>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&display=swap" rel="stylesheet"/>
{/* link - It is used to define an HTML form. */}

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
 integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
  crossorigin="anonymous" referrerPolicy="no-referrer" />
     

      <body className={inter.className}>{children}</body>
      {/* body -
       This tag contains the main content of the HTML document. */}
    </html>
  )
}