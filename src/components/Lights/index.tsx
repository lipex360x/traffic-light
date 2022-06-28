import * as S from './styles';

export type LightProps = {
  color: string;
  lit: string;
  setLit: (color: string) => void;
};

function Light({ color, lit, setLit }: LightProps) {
  const handleLid = () => setLit(color);

  return <S.Wrapper color={color} lit={lit} onClick={handleLid} />;
}

export default Light;
