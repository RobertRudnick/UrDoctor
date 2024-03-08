import React, { FC } from 'react';
import './Patients.css';
import { HeaderLabel } from '../Shared/Shared';
import { FaPlusCircle } from 'react-icons/fa';
interface PatientsProps {}

const user = {
  firstName: 'Robert',
  lastName: 'Rudnicki',
  sex: 'F',
  age: '26'  
};
const malePhostoSrc = require('../../assets/male-doctor-icon.jpg');
const femalePhostoSrc = require('../../assets/female-doctor-icon.jpeg');

const Patients: FC<PatientsProps> = () => (

  <div>
    <HeaderLabel title="Patients" backgroundColor='#d9e9f8' />
    <div className='patients w-100 px-2'>
      <div className='add-patient col-5 d-flex flex-column'>
        <img className="pt-2 image" src={user.sex === 'M' ? malePhostoSrc : femalePhostoSrc} alt='doctor' />
        <button type='button' className="btn btn-primary" onClick={addPatient}>
          <FaPlusCircle />
        </button>
      </div>
      <div className='patients-overview col-6'>
         Pacjenci
        </div>
    </div>
  </div>
);

const addPatient = ()=>{}
export default Patients;
