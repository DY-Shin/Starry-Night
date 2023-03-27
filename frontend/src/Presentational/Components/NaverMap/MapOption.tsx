import React, { MouseEvent } from 'react';
import { GoSettings, GoTelescope } from 'react-icons/go';
import { BsPinMapFill } from 'react-icons/bs';
import * as OptionStyle from './MapOption_Style';

function MapOption() {
  const changeActive = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    console.log(e.currentTarget.classList.contains('dropdownWrapper'));
    if (e.currentTarget.classList.contains('dropdownWrapper')) {
      e.currentTarget.classList.toggle('active');
    } else {
      e.currentTarget.classList.toggle('active');
    }
  };

  return (
    <OptionStyle.DropDownWrapper onClick={changeActive} className="dropdownWrapper">
      {/* <OptionStyle.DropDownHeader>옵션</OptionStyle.DropDownHeader> */}
      <OptionStyle.IconWrapper className="tempDiv">
        <GoSettings size={20} className="icon" />
      </OptionStyle.IconWrapper>
      {/* <hr style={{ margin: '0' }} /> */}
      <OptionStyle.OptionDetailWrapper>
        <OptionStyle.OptionDetaileDiv onClick={changeActive} className="detailDiv">
          <OptionStyle.OptionDetailRound>
            <GoTelescope size={20} className="detailIcon" />
          </OptionStyle.OptionDetailRound>
          <OptionStyle.OptionDetailText>천체 관측</OptionStyle.OptionDetailText>
        </OptionStyle.OptionDetaileDiv>
        <OptionStyle.OptionDetaileDiv onClick={changeActive} className="detailDiv">
          <OptionStyle.OptionDetailRound>
            <BsPinMapFill size={20} className="detailIcon" />
          </OptionStyle.OptionDetailRound>
          <OptionStyle.OptionDetailText>포토 스팟</OptionStyle.OptionDetailText>
        </OptionStyle.OptionDetaileDiv>
      </OptionStyle.OptionDetailWrapper>
    </OptionStyle.DropDownWrapper>
  );
}

export default MapOption;
