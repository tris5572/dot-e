import { Dot } from './Dot';

const X_SIZE = 40;
const Y_SIZE = 40;

export function Canvas() {
  return (
    <>
      {[...Array(Y_SIZE)].map((_, y) => (
        <div style={{ display: 'flex' }} key={y}>
          {[...Array(X_SIZE)].map((_, x) => (
            <Dot
              size={10}
              color={`hsl(${y * 9} 80% ${x * 2 + 10}%)`}
              border="0.1px solid #FFF7"
              key={`${x}-${y}`}
            />
          ))}
        </div>
      ))}
    </>
  );
}
