import React, { PropsWithChildren } from 'react';

import * as S from './styles';

type Props = {
  wide: boolean;
  href: string;
  withPrice: boolean;
  onClick: () => void;
};

const Button = ({
  children,
  wide,
  withPrice,
  href,
  onClick
}: PropsWithChildren<Props>) => (
  <S.ButtonWrapper
    href={href}
    wide={wide}
    withPrice={withPrice}
    onClick={onClick}
  >
    {children}
  </S.ButtonWrapper>
);

export default Button;
