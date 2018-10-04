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
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function SignupHeader(props) {
  return (
    <Svg width={wp('105%')} height={125}>
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
        <Path
          d="M0,92.7329945 C30.3594309,78.7370884 60.9851444,71.7391353 91.8771404,71.7391353 C138.215134,71.7391353 191.130385,88.1417539 208,92.7329945 C224.869615,97.3242351 262.253619,112 312.316292,112 C345.691406,112 380.252643,101.090665 416,79.2719951 L416,0 L0,0 L0,92.7329945 Z"
          id="path-2"
        />
      </Defs>
      <G
        id="v1-High-Fidelity"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <G id="Group-Copy" transform="translate(1.000000, 0.000000)">
          <Path d="" id="Path-5" stroke="#979797" />
          <Path d="" id="Path-7" stroke="#979797" />
          <Path
            d="M0,121 C27.2747396,101.183594 58.2526383,90.2742588 92.9336961,88.2719951 C144.955283,85.2685995 193.218447,102.446615 208.137544,105.791667 C223.056641,109.136719 262.400161,121 312.316292,121 C345.593712,121 380.154948,108.757332 416,84.2719951 L416,9 L0,9 L0,121 Z"
            id="Path-2"
            strokeOpacity="0.110450634"
            stroke="#FFDEF0"
            strokeWidth="2"
            fillOpacity="0.475968071"
            fill="#F77C9B"
          />
          <G id="Path-2">
            <Use
              fill="url(#linearGradient-1)"
              fillRule="evenodd"
              href="#path-2"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
}
