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
import { moderateScale } from '../../scale.utils';

export default function Eye(props) {
  return (
    <Svg width={moderateScale(16)} height={moderateScale(props.show ? 16 : 10)}>
      <Defs />
      <G
        id="v1-High-Fidelity"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        {props.show ? (
          <G
            id="06-Password"
            transform="translate(-328.000000, -313.000000)"
            fill="#444444"
            fillRule="nonzero"
          >
            <G id="Eye" transform="translate(328.000000, 313.000000)">
              <G id="Group">
                <Path
                  d="M12.9,5.2 L12.1,6 C13.8,6.9 14.6,8.3 14.9,9 C14.2,9.9 12.1,12.1 7.9,12.1 C7.2,12.1 6.7,12 6.1,11.9 L5.3,12.7 C6.1,13 7,13.1 7.9,13.1 C13.6,13.1 16,9.1 16,9.1 C16,9.1 15.4,6.7 12.9,5.2 Z"
                  id="Shape"
                />
                <Path
                  d="M12,7.1 C12,6.8 12,6.5 11.9,6.3 L7.1,11 C7.4,11 7.7,11.1 8,11.1 C10.2,11.1 12,9.3 12,7.1 Z"
                  id="Shape"
                />
                <Path
                  d="M15.3,0 L10.9,4.4 C10.1,4.2 9.1,4 8,4 C1.3,4 0,9.1 0,9.1 C0,9.1 1,10.9 3.3,12.1 L0,15.3 L0,16 L0.7,16 L16,0.7 L16,0 L15.3,0 Z M4,11.3 C2.4,10.6 1.5,9.5 1.1,9 C1.4,8.3 2.2,6.8 4.2,5.8 C4.1,6.2 4,6.6 4,7.1 C4,8.2 4.5,9.3 5.3,10 L4,11.3 Z M6.2,7.9 L5.2,8.1 C5.2,8.1 4.9,7.6 4.9,6.9 C4.9,6.1 5.3,5.4 5.3,5.4 C5.8,5.1 6.6,5.1 6.6,5.1 C6.6,5.1 6.1,6 6.1,6.8 C6,7.5 6.2,7.9 6.2,7.9 Z"
                  id="Shape"
                />
              </G>
            </G>
          </G>
        ) : (
          <G
            id="06-Password"
            transform="translate(-351.000000, -306.000000)"
            fill="#444444"
            fillRule="nonzero"
          >
            <G id="Eye" transform="translate(351.000000, 306.000000)">
              <Path
                d="M8,0.9 C1.3,0.9 0,6 0,6 C0,6 2.2,10.1 7.9,10.1 C13.6,10.1 16,6.1 16,6.1 C16,6.1 14.7,0.9 8,0.9 Z M5.3,2.4 C5.8,2.1 6.6,2.1 6.6,2.1 C6.6,2.1 6.1,3 6.1,3.7 C6.1,4.4 6.3,4.8 6.3,4.8 L5.2,5 C5.2,5 4.9,4.5 4.9,3.8 C4.9,3 5.3,2.4 5.3,2.4 Z M7.9,9.1 C3.8,9.1 1.7,6.8 1.1,5.9 C1.4,5.2 2.2,3.7 4.2,2.7 C4.1,3.1 4,3.5 4,4 C4,6.2 5.8,8 8,8 C10.2,8 12,6.2 12,4 C12,3.5 11.9,3.1 11.8,2.7 C13.8,3.6 14.6,5.2 14.9,5.9 C14.2,6.8 12.1,9.1 7.9,9.1 Z"
                id="Shape"
              />
            </G>
          </G>
        )}
      </G>
    </Svg>
  );
}
