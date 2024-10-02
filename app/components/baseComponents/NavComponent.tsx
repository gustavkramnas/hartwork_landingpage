import Link from 'next/link'
import { theme } from '../../utils/appSettings.ts/theme'
export const NavBar = () => {
  const pages = theme.pages.links
  return (
    <header>
      <nav>
        <Link href={'/'}>logo</Link>
        <ul className="link-wrapper">
          {pages.map((page) => {
            const title =
              page.replace('/', '').charAt(0).toUpperCase() + page.slice(2)

            return (
              <li key={page}>
                <Link href={page}>{title}</Link>{' '}
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
