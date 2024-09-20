import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

import WhatsAppButton from '../components/Whatsapp';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <WhatsAppButton />
    </>
  );
}

export default MyApp;
