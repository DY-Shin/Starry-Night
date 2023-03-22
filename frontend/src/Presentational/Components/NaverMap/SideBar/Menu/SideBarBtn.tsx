import React from 'react';
import * as BtnStyle from './SideBarBtn_Style';

type SidBarBtnPropsTye = {
  btnText: string;
};

function SideBarBtn(props: SidBarBtnPropsTye) {
  const { btnText } = props;
  return (
    <BtnStyle.SideBarBtn>
      <BtnStyle.SideBarBtnText>{btnText}</BtnStyle.SideBarBtnText>
    </BtnStyle.SideBarBtn>
  );
}

export default SideBarBtn;
