import React from 'react';
import * as NaverMapStyle from './NaverMap_Style';

const NaverMap = React.forwardRef<HTMLDivElement | null>((props, ref) => {
  return <NaverMapStyle.MapMain ref={ref} />;
});

export default NaverMap;
