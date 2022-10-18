import Layout from '../components/Layout'
import '../styles/globals.css'
import "@blueprintjs/core/lib/css/blueprint.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
