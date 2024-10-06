import { Color } from '../types/colors';

export function color2string(color: Color): string {
  switch (color.type) {
    case 'RGB':
      return `rgb(${color.red} ${color.green} ${color.blue})`;
  }
}
