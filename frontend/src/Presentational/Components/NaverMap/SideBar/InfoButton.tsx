import React from 'react';
import * as ButtonStyle from './InfoButton_Style';

type propsType = {
  Text: string;
  onClick?: () => void;
};

function InfoButton({ Text, onClick }: propsType) {
  return (
    <ButtonStyle.ButtonBody onClick={onClick}>
      <ButtonStyle.ButtonText>{Text}</ButtonStyle.ButtonText>
    </ButtonStyle.ButtonBody>
  );
}

InfoButton.defaultProps = {
  onClick: () => undefined,
};

export default InfoButton;
