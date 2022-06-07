import Image from 'next/image';
import React, { useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

import * as S from './styles';

type Props = {
  id: number;
  name: string;
  image: string;
  description: string;
};

const ReviewCard: React.FC<Props> = ({ id, name, image, description }) => {
  useEffect(() => {
    const texts = document.querySelectorAll('p.description');

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        entry.target.classList[
          entry.target.scrollHeight > entry.contentRect.height + 25
            ? 'add'
            : 'remove'
        ]('truncated');
      }
    });

    texts.forEach((text) => observer.observe(text));
  });

  return (
    <S.Card>
      <S.User>
        <S.Image>
          <source srcSet={`/img/reviews/${image}?webp`} type="image/webp" />
          <source srcSet={`/img/reviews/${image}`} type="image/png" />
          <Image
            width={50}
            height={50}
            src={`/img/reviews/${image}?webp`}
            loading="lazy"
            alt={name}
          />
        </S.Image>
        <S.Name>{name}</S.Name>
      </S.User>
      <S.Text>
        <input type="checkbox" id={`review-${id}`} />
        <p className="description">{description}</p>
        <label className="label-more" htmlFor={`review-${id}`}>
          Ver tudo
        </label>
      </S.Text>
    </S.Card>
  );
};

export default ReviewCard;
