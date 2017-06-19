import Link from 'next/link'
import Head from 'next/head'

const style_navLink = 'black-80 no-underline underline-hover mr2'

export default ({ children, title = 'This is the default title' }) => (
  <div className='f5'>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.7.0/css/tachyons.min.css"/>
    </Head>

    <header className='fixed top-1 left-1 pa2'>
      <nav className='f3'>
        <Link href='/green'><a className={style_navLink}>Green</a></Link>
        <Link href='/blue'><a className={style_navLink}>Blue</a></Link>
        <Link href='/gold'><a className={style_navLink}>Gold</a></Link>
      </nav>
    </header>

    { children }

    <footer className='fixed bottom-1 right-1'>
      {'#sześć-błota-stóp'}
    </footer>
  </div>
)
