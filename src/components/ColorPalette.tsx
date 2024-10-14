import { useAtomValue } from 'jotai';
import styled from 'styled-components';
import { colorPaletteAtom } from '../atoms/palette';
import { Dot } from './Dot';

const COLOR_SIZE = 20;

/**
 * カラーパレットのコンポーネント
 */
export function ColorPalette() {
  const data = useAtomValue(colorPaletteAtom);
  return (
    <Grid>
      {data.map((v, i) => (
        <StyledDot size={COLOR_SIZE} color={v.color} key={i} />
      ))}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(10, ${COLOR_SIZE}px);
  gap: 4px;
  background-color: hsl(0 0% 20%);
  padding: 4px;
`;

const StyledDot = styled(Dot)`
  border-radius: 4px;
`;
