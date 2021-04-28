import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import OopsPage from "../components/oops.component";
import { ToastProvider } from 'react-toast-notifications'
function MyApp({ Component, pageProps }) {
  return (
    <ToastProvider>
    <div className="hidden lg:block md:block">
      <Component {...pageProps} />
    </div>
    <div className="block lg:hidden md:hidden">
      <OopsPage msg="we just didn't code this page for mobiles..."/>
    </div>
    </ToastProvider>
  )
}

export default MyApp
