import React from 'react';
import { IoMdRefresh } from 'react-icons/io';
import * as RefreshButtonStyle from './RefreshButton_Style';

type propsType = {
  Text: string;
  refreshHandler: React.Dispatch<React.SetStateAction<boolean>>;
};

function RefreshButton(props: propsType) {
  const { Text, refreshHandler } = props;

  return (
    <RefreshButtonStyle.RefreshButton
      onClick={() => {
        refreshHandler(true);
      }}
    >
      <IoMdRefresh size={30} className="icon" />
      <RefreshButtonStyle.RefreshText>{Text}</RefreshButtonStyle.RefreshText>
    </RefreshButtonStyle.RefreshButton>
  );
}

export default RefreshButton;
