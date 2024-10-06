import { Color } from '../types/colors';
import { color2string } from '../utils/color';

type Props = {
  /**
   * ドットのサイズ。縦横のピクセル数。
   */
  size: number;
  /**
   * 塗りつぶす色。
   */
  color: Color;
  /**
   * 縁取りのスタイル。CSS の `border` プロパティに指定する値。省略時は縁取りなし。
   */
  border?: string;
};

/**
 * 1つのドットを表示するコンポーネント
 */
export function Dot(props: Props) {
  return (
    <div
      style={{
        width: `${props.size}px`,
        height: `${props.size}px`,
        background: color2string(props.color),
        border: props.border,
      }}
    />
  );
}
