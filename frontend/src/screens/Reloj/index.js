import React from 'react';

import { CLOCKS } from '../Relojes/constants/clocks';

export default function Reloj({ match }) {
  return <div>{CLOCKS[match.params.id].title}</div>;
}
