import Link from 'next/link';
import { theme } from '../../utils/appSettings/theme';
import { CompanyLogo } from './CompanyLogo';
import { fetchCompanyAppSetting } from '@/app/utils/contentful/queries/home';

export const NavBar = async () => {
  const companyInformation = await fetchCompanyAppSetting();

  const imageUrl = companyInformation.fields.image?.fields.file.url
    ? `https:${companyInformation.fields.image.fields.file.url}`
    : ''; // Se till att det finns en bild

  const pages = theme.pages.links;

  return (
    <header>
      <nav>
        <CompanyLogo
          imageUrl={imageUrl}
          companyName={companyInformation.fields.companyName} // Anta att companyName finns i companyInformation
        />
        <ul>
          {pages.map((page) => {
            const title =
              page.replace('/', '').charAt(0).toUpperCase() + page.slice(1); // Korrigerad till slice(1) för att få rätt titel

            return (
              <li key={page}>
                <Link href={page}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
