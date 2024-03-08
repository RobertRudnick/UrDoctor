import React, { FC } from 'react';
import './Diagnostics.css';
import { HeaderLabel } from '../Shared/Shared';

interface DiagnosticsProps {}

const Diagnostics: FC<DiagnosticsProps> = () => (
  <div>
    <HeaderLabel title='Diagnostics' backgroundColor='#e9f1f7'/>
  </div>
);

export default Diagnostics;
