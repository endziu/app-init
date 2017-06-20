import Link from "next/link";
import Triangle from "./Triangle";

export default () => (
  <header className="fixed top-0 left-0 pa1 bg-black w-100">
    <nav className="f4 flex items-center">
      <Link href="/">
        <a className="dim mr2 ph1">
          <Triangle color="white" />
        </a>
      </Link>
      <Link href="/green">
        <a className={"white no-underline mr2 hover-green"}>Zielony</a>
      </Link>
      <Link href="/blue">
        <a className={"white no-underline mr2 hover-blue"}>Niebieski</a>
      </Link>
      <Link href="/yellow">
        <a className={"white no-underline mr2 hover-yellow"}>Żółty</a>
      </Link>
    </nav>
  </header>
);
