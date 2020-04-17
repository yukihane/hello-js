import React, { FC } from 'react';
import { Container, Label, SemanticCOLORS } from 'semantic-ui-react';
import { ReducedProps } from '../types/ColorfulBeadsTypes';

import './ColorfulBeads.css';

const range = (n: number) => (n < 0 ? [] : Array.from(Array(n), (_, i) => i));
const colors: SemanticCOLORS[] = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
];

export type ColorfulBeadsProps = ReducedProps;

const ColorfulBeads: FC<ColorfulBeadsProps> = ({ count = 0 }) => (
  <Container className="beads-box">
    {range(count).map((i: number) => (
      <Label circular color={colors[i % colors.length]} key={i} />
    ))}
  </Container>
);

export default ColorfulBeads;
