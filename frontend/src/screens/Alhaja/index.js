import React from 'react';

import { ALHAJAS } from '../Alhajas/constants/alhajas';

export default function Alhaja({ match }) {
  return <div>{ALHAJAS[match.params.id].title}</div>;
}

