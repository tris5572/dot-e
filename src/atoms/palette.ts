import { atom } from 'jotai';
import { PaletteColor } from '../types/data';

export const colorPaletteAtom = atom(createPalette(16));

function createPalette(num: number): PaletteColor[] {
  const array: PaletteColor[] = [];

  [...Array(num)].map((_, i) => {
    array.push({
      color: {
        type: 'RGB',
        red: i,
        green: 2 * i,
        blue: 4 * i,
      },
      text: '',
    });
  });

  return array;
}
