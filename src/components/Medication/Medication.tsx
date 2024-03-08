import React, { FC } from 'react';
import './Medication.css';
import { HeaderLabel } from '../Shared/Shared';

interface MedicationProps {}

const Medication: FC<MedicationProps> = () => (
  <div>
    <HeaderLabel title='Medication' backgroundColor='#cef7ff'/>

  </div>
);

export default Medication;
