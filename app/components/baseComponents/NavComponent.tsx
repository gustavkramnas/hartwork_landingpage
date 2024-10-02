import Link from 'next/link';
import { theme } from '../../utils/appSettings/theme';
import { CompanyLogo } from './CompanyLogo';
import { fetchCompanyAppSetting } from '@/app/utils/contentful/queries/home';

export const NavBar = async () => {
  const companyInformation = await fetchCompanyAppSetting();

  const imageUrl = companyInformation.fields.image?.fields.file.url
    ? `https:${companyInformation.fields.image.fields.file.url}`
    : '';

  const pages = theme.pages.links;

  return (
    <header>
      <nav>
        <CompanyLogo
          imageUrl={imageUrl}
          companyName={companyInformation.fields.companyName}
        />
        <ul>
          {pages.map((page) => {
            const title =
              page.replace('/', '').charAt(0).toUpperCase() + page.slice(1);

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
