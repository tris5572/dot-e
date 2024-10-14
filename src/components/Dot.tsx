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
  /**
   * スタイルのクラス名。styled-components でスタイルを追加指定するためのもの。
   */
  className?: string;
};

/**
 * 1つのドットを表示するコンポーネント
 */
export function Dot(props: Props) {
  return (
    <StyledDot
      className={props.className}
      $size={props.size}
      $color={color2string(props.color)}
      $border={props.border}
    />
  );
}

function StyledDot(props: { $size: number; $color: string; $border?: string; className?: string }) {
  return (
    <div
      className={props.className}
      style={{
        width: props.$size,
        height: props.$size,
        background: props.$color,
        border: props.$border,
      }}
    ></div>
  );
}
