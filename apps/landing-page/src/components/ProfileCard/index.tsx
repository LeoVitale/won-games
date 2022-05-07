import React from 'react';

import { GrGithub } from 'react-icons/gr';
import { FaDribbble, FaTwitter } from 'react-icons/fa';

import * as S from './styles';
import Image from 'next/image';

const icons: unknown = {
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
  image: unknown;
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
  console.log(image);

  return (
    <S.Card key={name}>
      <S.Image>
        <source
          srcSet={`${image.default.blurDataURL}?webp`}
          type="image/webp"
        />
        <source srcSet={image.default.blurDataURL} type="image/png" />
        <Image width={250} height={250} src={image} loading="lazy" alt={name} />
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
