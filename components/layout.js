import Link from "next/link";
import Head from "next/head";

export default ({ children, title = "This is the default title" }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://unpkg.com/tachyons@4.7.0/css/tachyons.min.css"
      />
    </Head>

    <header className="fixed top-0 left-0 pa1 bg-black w-100">
      <nav className="f4 flex items-center">
        <Link href="/">
          <a className="dim mr2 ph1">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="white">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z " />
            </svg>
          </a>
        </Link>
        <Link href="/green">
          <a className={"white no-underline mr2 hover-green"}>Green</a>
        </Link>
        <Link href="/blue">
          <a className={"white no-underline mr2 hover-blue"}>Blue</a>
        </Link>
        <Link href="/gold">
          <a className={"white no-underline mr2 hover-gold"}>Gold</a>
        </Link>
      </nav>
    </header>

    {children}

    <footer className="fixed bottom-0 left-0 bg-black white w-100 pa1">
      {"#sześć-błota-stóp"}
    </footer>
  </div>
);
