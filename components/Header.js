import Link from "next/link";

export default () => (
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
        <a className={"white no-underline mr2 hover-green"}>Zielony</a>
      </Link>
      <Link href="/blue">
        <a className={"white no-underline mr2 hover-blue"}>Niebieski</a>
      </Link>
      <Link href="/yellow">
        <a className={"white no-underline mr2 hover-gold"}>Żółty</a>
      </Link>
    </nav>
  </header>
);
