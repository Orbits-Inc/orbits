import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { ToastProvider } from 'react-toast-notifications'
function MyApp({ Component, pageProps }) {
  return (
    <ToastProvider>
    <div className="">
      <Component {...pageProps} />
    </div>
    </ToastProvider>
  )
}

export default MyApp
