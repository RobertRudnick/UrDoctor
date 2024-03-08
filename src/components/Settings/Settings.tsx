import React, { FC } from 'react';
import './Settings.css';
import { HeaderLabel } from '../Shared/Shared';

interface SettingsProps {}

const Settings: FC<SettingsProps> = () => (
  <div>
    <HeaderLabel title="Settings" backgroundColor='#a3c3e0' />
  </div>
);

export default Settings;
