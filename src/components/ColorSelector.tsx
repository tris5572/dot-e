import { useState } from 'react';

type Props = {
  /**
   * 色が変更されたときに呼び出す関数
   */
  onChange: () => void;
};

export function ColorSelector(props: Props) {
  return (
    <div>
      <Slider width={500} min={0} max={255} onChange={props.onChange} />
    </div>
  );
}

function Slider(props: { width: number; min: number; max: number; onChange: (v: number) => void }) {
  const size = 20;
  const barWidth = props.width - size;

  const [dragging, setDragging] = useState(false);
  const [knobX, setKnobX] = useState(0);

  /** クリック等のイベント時に位置を更新する */
  const updatePotision = (e: React.MouseEvent) => {
    const clickX = e.nativeEvent.offsetX;
    // バーの中のレシオを計算
    const ratio = clamp((clickX - size / 2) / barWidth, 0, 1);
    const value = (props.max - props.min) * ratio - props.min;
    // ノブの位置を変更
    setKnobX(ratio * barWidth);
    props.onChange(value);
  };

  return (
    <div
      style={{ height: `${size}px`, width: `${props.width}px`, background: 'transparent' }}
      onMouseDown={(e) => {
        setDragging(true);
        updatePotision(e);
      }}
      onMouseMove={(e) => {
        if (dragging) updatePotision(e);
      }}
      onMouseUp={() => setDragging(false)}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          padding: `0 ${size / 2}px`,
        }}
      >
        {/* 横棒 */}
        <div
          style={{
            width: `${barWidth}px`,
            height: '6px',
            background: 'red',
            borderRadius: '8px',
            pointerEvents: 'none',
          }}
        />
        {/* ノブ */}
        <div
          style={{
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: '100%',
            background: 'black',
            position: 'absolute',
            left: `${knobX}px`,
            pointerEvents: 'none',
          }}
        />
      </div>
    </div>
  );
}

/**
 * 渡された値 `n` を、`min` と `max` の間に収める。
 */
function clamp(n: number, min: number, max: number): number {
  if (n < min) {
    return min;
  }
  if (max < n) {
    return max;
  }
  return n;
}
