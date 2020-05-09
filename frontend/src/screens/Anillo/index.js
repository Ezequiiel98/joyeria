import React from 'react';

import { RINGS } from '../Anillos/constants/rings';

export default function Anillo({ match }) {
  return <div>{RINGS[match.params.id].title}</div>;
}
