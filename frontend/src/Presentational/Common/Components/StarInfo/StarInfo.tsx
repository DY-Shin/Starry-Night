import React, { PropsWithChildren } from 'react';
import * as InfoStyle from './StarInfoStyle';

interface ModalDefaultType {
  onClickToggleModal: () => void;
}

function StarInfo({ onClickToggleModal, children }: PropsWithChildren<ModalDefaultType>) {
  return (
    <InfoStyle.StarInfoContainer>
      <InfoStyle.StarInfoBox>{children}</InfoStyle.StarInfoBox>
      <InfoStyle.Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();

          if (onClickToggleModal) {
            onClickToggleModal();
          }
        }}
      />
    </InfoStyle.StarInfoContainer>
  );
}

export default StarInfo;
