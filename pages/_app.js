import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import OopsPage from "../components/oops.component";
function MyApp({ Component, pageProps }) {
  return (
    <>
    <div className="hidden lg:block md:block">
      <Component {...pageProps} />
    </div>
    <div className="block lg:hidden md:hidden">
      <OopsPage msg="we just didn't code this page for mobiles..."/>
    </div>
    </>
  )
}

export default MyApp
