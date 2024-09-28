import Link from 'next/link'
export const NavBar = () => {
  return (
    <header>
      <nav>
        <Link href={'/'}>logo</Link>
        <div className="link-wrapper"></div>
      </nav>
    </header>
  )
}
