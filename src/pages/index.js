// src/pages/index.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Caresection from '../components/CareSection';
import OurBusiness from '../components/OurBusiness';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Summit GCP</title>
        <meta name="description" content="Summit GCP - Financial Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Caresection />
      <OurBusiness />
      <ContactSection />
      <Footer />
    </>
  );
}
