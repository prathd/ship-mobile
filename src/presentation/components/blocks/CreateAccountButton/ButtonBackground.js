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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function ButtonBackground(props) {
  return (
    <Svg width="100%" height="100%">
      <Defs>
        <LinearGradient
          x1="0%"
          y1="50%"
          x2="100%"
          y2="50%"
          id="linearGradient-1"
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
        <G
          id="06-Password"
          transform="translate(-57.000000, -418.000000)"
          fill="url(#linearGradient-1)"
        >
          <Rect
            id="Rectangle-18"
            x="57"
            y="418"
            width="302"
            height="52"
            rx="26"
          />
        </G>
      </G>
    </Svg>
  );
}
