'use client';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';

type Props = {
  imageUrl: string;
  companyName: string;
};

const LogoContainer = styled(Link)`
  position: relative;
  width: 200px;
`;

export const CompanyLogo = ({ imageUrl, companyName }: Props) => {
  return (
    <LogoContainer href="/">
      logo
      <Image
        src={imageUrl}
        alt={companyName}
        priority
        fill
        style={{ objectFit: 'cover' }}
      />
    </LogoContainer>
  );
};
