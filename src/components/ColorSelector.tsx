import { useState } from 'react';
import styled from 'styled-components';
import { RGB } from '../types/colors';

type Props = {
  /**
   * 色が変更されたときに呼び出す関数
   */
  onChange: (color: RGB) => void;
};

/**
 * RGB の各色をスライダーで選択するコンポーネント
 */
export function RGBSelector(props: Props) {
  const [red, setRed] = useState(100);
  const [green, setGreen] = useState(100);
  const [blue, setBlue] = useState(100);

  /**
   * 値が変更されたときの処理。
   * 単純に `red` 等から色を生成するだけでは変更後の値が反映されないため、最新の値を受け取る。
   */
  const handleChange = (color: { r?: number; g?: number; b?: number }) => {
    const c = {
      type: 'RGB',
      red: color.r ?? red,
      green: color.g ?? green,
      blue: color.b ?? blue,
    } satisfies RGB;
    props.onChange(c);
  };

  return (
    <Wrapper>
      <ColorBox $color={`rgb(${red} ${green} ${blue})`} />
      <div>
        <OneColorLine>
          <LabelBox>R</LabelBox>
          <Slider
            color="rgb(230 0 0)"
            value={red}
            onChange={(v) => {
              setRed(v);
              handleChange({ r: v });
            }}
            min={0}
            max={255}
            initialValue={100}
            width="300px"
            gradient={[`rgb(0 ${green} ${blue})`, `rgb(255 ${green} ${blue})`]}
          />
          <ValueBox>{red}</ValueBox>
        </OneColorLine>
        <OneColorLine>
          <LabelBox>G</LabelBox>
          <Slider
            color="rgb(0 220 0)"
            value={green}
            onChange={(v) => {
              setGreen(v);
              handleChange({ g: v });
            }}
            min={0}
            max={255}
            initialValue={100}
            width="300px"
            gradient={[`rgb(${red} 0 ${blue})`, `rgb(${red} 255 ${blue})`]}
          />
          <ValueBox>{green}</ValueBox>
        </OneColorLine>
        <OneColorLine>
          <LabelBox>B</LabelBox>
          <Slider
            color="rgb(0 0 255)"
            value={blue}
            onChange={(v) => {
              setBlue(v);
              handleChange({ b: v });
            }}
            min={0}
            max={255}
            initialValue={100}
            width="300px"
            gradient={[`rgb(${red} ${green} 0)`, `rgb(${red} ${green} 255)`]}
          />
          <ValueBox>{blue}</ValueBox>
        </OneColorLine>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ColorBox = styled.div<{ $color: string }>`
  height: 40px;
  width: 40px;
  background: ${({ $color }) => $color};
`;

const LabelBox = styled.div`
  width: 1rem;
  font-size: small;
`;

const OneColorLine = styled.div`
  display: flex;
  align-items: center;
`;

const ValueBox = styled.span`
  display: inline-block;
  font-family: monospace;
  text-align: right;
  width: 2.5rem;
`;

/**
 * 見た目を加工したスライダーコンポーネント
 */
function Slider(props: {
  /** 現在の値 */
  value: number;
  /** 最小値 */
  min: number;
  /** 最大値 */
  max: number;
  /** 初期値 */
  initialValue: number;
  /** 値が変わったときのコールバック */
  onChange: (v: number) => void;
  /** コンポーネントの幅 */
  width: string;
  /** ノブの色 */
  color: string;
  /** 背景色のグラデーション。`[左の色, 右の色]` */
  gradient?: [string, string];
}) {
  return (
    <StyledSlider
      type="range"
      value={props.value}
      min={props.min}
      max={props.max}
      onChange={(e) => props.onChange(Number(e.target.value))}
      width={props.width}
      $color={props.color}
      $gradient={props.gradient}
    />
  );
}

const StyledSlider = styled.input<{ $color: string; $gradient?: [string, string] }>`
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  cursor: pointer;
  width: ${(props) => props.width};

  background: ${({ $gradient }) =>
    $gradient ? `linear-gradient(to right, ${$gradient[0]}, ${$gradient[1]})` : undefined};
  height: 6px;
  /* border: 1px solid ${({ $color }) => $color}; */
  border-radius: 10px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background-color: ${({ $color }) => $color};
    width: 16px;
    height: 16px;
    border-radius: 50%;
  }

  &::-moz-range-thumb {
    border: none;
    background-color: ${({ $color }) => $color};
    width: 16px;
    height: 16px;
    border-radius: 50%;
  }
`;
