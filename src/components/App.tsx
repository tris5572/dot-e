import { Canvas } from './Canvas';
import { ColorPalette } from './ColorPalette';
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
      <ColorPalette />
    </>
  );
}
