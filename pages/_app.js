import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { PopupProvider } from '../utils/popup.provider'
import { AuthProvider } from "../utils/auth.provider";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
    <PopupProvider>
    <div className="">
      <Component {...pageProps} />
    </div>
    </PopupProvider>
    </AuthProvider>
  )
}

export default MyApp
