import Link from 'next/link';
import Triangle from './Triangle';

export default () => (
  <header className="fixed top-0 left-0 pa1 bg-black w-100 bb bw2 b--washed-red">
    <nav className="f3-ns f4 flex items-center">
      <Link href="/">
        <a className="dim mr2 ph1">
          <Triangle color="white" />
        </a>
      </Link>
      <Link href="/#0">
        <a className={'white no-underline mr2 hover-blue'}>content</a>
      </Link>
      <Link href="/#0">
        <a className={'white no-underline mr2 hover-green'}>info</a>
      </Link>
      <Link href="/#0">
        <a className={'white no-underline mr2 hover-yellow'}>contact</a>
      </Link>
    </nav>
  </header>
);
