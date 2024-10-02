import Link from 'next/link'
import { theme } from '../../utils/appSettings/theme'
import Logo from './logo'
export const NavBar = () => {
  const pages = theme.pages.links
  return (
    <header>
      <nav>
        <Logo />
        <ul className="link-wrapper">
          {pages.map((page) => {
            const title =
              page.replace('/', '').charAt(0).toUpperCase() + page.slice(2)

            return (
              <li key={page}>
                <Link href={page}>{title}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
