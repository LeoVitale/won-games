import React from 'react';

import { GrGithub } from 'react-icons/gr';
import { FaDribbble, FaTwitter } from 'react-icons/fa';

import * as S from './styles';
import Image from 'next/image';

type Icons = {
  [x: string]: JSX.Element;
};

const icons: Icons = {
  twitter: <FaTwitter />,
  github: <GrGithub />,
  dribbble: <FaDribbble />
};

type socialLinks = {
  slug: string;
  link: string;
};

type Props = {
  name: string;
  role: string;
  image: string;
  socialLinks: socialLinks[];
  description: string;
};

const ProfileCard: React.FC<Props> = ({
  name,
  role,
  image,
  socialLinks,
  description
}) => {
  return (
    <S.Card key={name}>
      <S.Image>
        <source srcSet={`/img/authors/${image}?webp`} type="image/webp" />
        <source srcSet={`/img/authors/${image}`} type="image/png" />
        <Image
          width={250}
          height={250}
          src={`/img/authors/${image}?webp`}
          loading="lazy"
          alt={name}
        />
      </S.Image>
      <S.Name>{name}</S.Name>
      <S.Role>{role}</S.Role>
      <S.SocialLinks>
        {socialLinks.map((item) => (
          <S.Link key={item.link}>
            <a href={item.link} title={item.slug}>
              {icons[item.slug]}
            </a>
          </S.Link>
        ))}
      </S.SocialLinks>
      <S.Description>{description}</S.Description>
    </S.Card>
  );
};

export default ProfileCard;
