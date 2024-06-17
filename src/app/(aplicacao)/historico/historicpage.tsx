import Headf from 'next/head';
import React, { useState } from 'react';
import SideMenu from '@/components/sideMenu/SideMenu';
import LogoNexusIcon from '@/components/sideMenu/LogoNexusIcon';
import { Outlet } from 'react-router-dom';

const historyPage = () => (
  <div
    className="background"
    background-Color="#F0F0F0"
  >
    <Outlet />
  </div>
);

export default historyPage;
