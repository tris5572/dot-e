type Props = {
  /**
   * ドットのサイズ。縦横のピクセル数。
   */
  size: number;
  /**
   * 塗りつぶす色。
   */
  color: string;
  /**
   * 縁取りのスタイル。CSS の `border` プロパティに指定する値。省略時は縁取りなし。
   */
  border?: string;
};

export function Dot(props: Props) {
  return (
    <div
      style={{
        width: `${props.size}px`,
        height: `${props.size}px`,
        background: props.color,
        border: props.border,
      }}
    />
  );
}
