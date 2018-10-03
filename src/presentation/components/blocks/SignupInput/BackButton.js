import React from 'react';
import { Svg, G, Polygon } from 'react-native-svg';
import styled from 'styled-components';

export default function BackButton(props) {
  return (
    <Svg width="15" height="21">
      <G
        id="v1-High-Fidelity"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <G
          id="04-Name"
          transform="translate(-39.000000, -35.000000)"
          fill="#FFFFFF"
        >
          <G id="Group">
            <Polygon
              id="Page-1"
              points="54 36.850625 51.7388535 35 39 45.5 51.7388535 56 53.9840764 54.149375 43.3963973 45.5"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
}
