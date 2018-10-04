import React from 'react';
import {
  Svg,
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text,
  Use,
  Defs,
  Stop,
} from 'react-native-svg';
import { verticalScale, moderateScale } from '../../scale.utils';

export default function CircleNextButton(props) {
  return (
    <Svg width={moderateScale(50)} height={moderateScale(50)}>
      <Defs>
        <LinearGradient
          x1="-22.4618765%"
          y1="-24.2361886%"
          x2="114.857835%"
          y2="87.0361328%"
          id="linearGradient-1"
        >
          <Stop stopColor="#F995AE" offset="0%" />
          <Stop stopColor="#F55D84" offset="46.7575867%" />
          <Stop stopColor="#8A59CE" offset="100%" />
        </LinearGradient>
        <LinearGradient
          x1="0%"
          y1="50%"
          x2="100%"
          y2="50%"
          id="linearGradient-2"
        >
          <Stop stopColor="#E075A7" offset="0%" />
          <Stop stopColor="#9C5AC2" offset="100%" />
        </LinearGradient>
      </Defs>
      <G
        id="v1-High-Fidelity"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <G id="02-Phone-#" transform="translate(-183.000000, -388.000000)">
          <G id="Group-2" transform="translate(183.000000, 388.000000)">
            <Circle
              id="Oval"
              fill="url(#linearGradient-2)"
              cx="24"
              cy="24"
              r="24"
            />
            <Polygon
              id="Page-1"
              fill="#FFFFFF"
              transform="translate(26.500000, 24.500000) rotate(-180.000000) translate(-26.500000, -24.500000) "
              points="34 15.850625 31.7388535 14 19 24.5 31.7388535 35 33.9840764 33.149375 23.3963973 24.5"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
}
