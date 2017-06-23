import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';

export default ({ children, title = 'This is the default title' }) => (
  <div className="sans-serif">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://unpkg.com/tachyons@4.7.0/css/tachyons.min.css"
      />
    </Head>

    <Header />

    {children}

    <Footer />

  </div>
);
