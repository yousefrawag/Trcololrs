import Navbar from "@/components/ui/navbar/Navbar";
import "./globals.css";
import Footer from "@/components/ui/footer/Footer";
import {BsWhatsapp} from "react-icons/bs"
import Upbutton from "@/components/common/buttonup/Upbutton";
import { Toaster } from 'react-hot-toast';
export const metadata = {
  title: "ألوان المسافر",
  author:"ألوان المسافر",
  keywords:"سياحه - رحلات - تأشيره - الوان المسافر - حجز - طيران - عمره ",
  description: "تقدم شركه ألوان المسافر حلول ممتازه فى خدمات التأشيرات والسياحه والرحلات وإنشاء الشركات",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir='rtl'>
            <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
       <meta name="google-site-verification" content="8-5sQEH8_OyhNMp55_VZgkX_Gk0ooFReMPfeFdxnk" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-body"
      >
          <Toaster position='top-center'  gutter={12} containerStyle={{margin:"8px"}} toastOptions={{
          success:{
            duration:4000,
          },
          error:{
            duration:5000,
          },
          style:{
            fontSize:"14px",
            maxWidth:"600px",
            padding:"15px",
            
          
          }
        }} />
        <Navbar/>
        <main>
        {children}
        </main>
        <a
  href="https://api.whatsapp.com/send?phone=966558741741"

  className="whats_button"
  target="_blank"
  rel="noopener noreferrer"
>
  <BsWhatsapp />
</a>
<Upbutton />
        <Footer/>
      </body>
    </html>
  );
}
