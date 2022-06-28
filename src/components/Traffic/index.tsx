import { useState } from 'react';
import Light from '../Lights';
import * as S from './styles';

export function Traffic() {
  const colors = ['red', 'yellow', 'green'];

  const [lit, setLit] = useState('');

  return (
    <S.Wrapper>
      {colors.map((color) => (
        <Light key={color} color={color} lit={lit} setLit={setLit} />
      ))}
    </S.Wrapper>
  );
}
