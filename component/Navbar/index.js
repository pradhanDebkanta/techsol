import React from 'react';
import DesktopView from './DesktopView';
import TabletNavbar from './TabletNavbar';
import { useWindowSize } from '../../utils/customHooks/resizeObserver';

const Navbar = () => {
  const size = useWindowSize();

  return (
    <>
      {size >= 768 ? (
        <DesktopView />
      ) : (
        <TabletNavbar />
      )}
    </>
  );
};

export default Navbar;