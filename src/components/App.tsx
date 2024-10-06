import { Canvas } from './Canvas';
import { RGBSelector } from './ColorSelector';

export function App() {
  return (
    <>
      <Canvas />
      <RGBSelector
        onChange={(color) => {
          console.log(color);
        }}
      />
    </>
  );
}
