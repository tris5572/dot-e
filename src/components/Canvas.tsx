import { useAtom } from 'jotai';
import { Dot } from './Dot';
import { canvasBorderAtom } from '../atoms/app';

const X_SIZE = 40;
const Y_SIZE = 40;

export function Canvas() {
  const [borderFlag, setBorderFlag] = useAtom(canvasBorderAtom);

  return (
    <div onClick={() => setBorderFlag(!borderFlag)}>
      {[...Array(Y_SIZE)].map((_, y) => (
        <div style={{ display: 'flex' }} key={y}>
          {[...Array(X_SIZE)].map((_, x) => (
            <Dot
              size={10}
              // color={`hsl(${y * 9} 80% ${x * 2 + 10}%)`}
              color={{ type: 'RGB', red: 0, green: x * 4, blue: y * 4 }}
              border={borderFlag ? '0.5px solid #FFF7' : undefined}
              key={`${x}-${y}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
