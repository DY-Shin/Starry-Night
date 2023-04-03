import React, { PropsWithChildren } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage, ReactCompareSliderHandle } from 'react-compare-slider';
import Slider, { Settings } from 'react-slick';
import * as InfoStyle from './StarInfoStyle';

interface ModalDefaultType {
  onClickToggleModal: () => void;
}

function StarInfo({ onClickToggleModal, children }: PropsWithChildren<ModalDefaultType>) {
  return (
    <InfoStyle.StarInfoContainer>
      <InfoStyle.StarInfoBox>
        <InfoStyle.StarInfoTitle>{children}</InfoStyle.StarInfoTitle>
        <InfoStyle.StarInfoPhoto>
          <InfoStyle.WrapImg />
        </InfoStyle.StarInfoPhoto>
        <InfoStyle.StarInfoDescription>
          descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription
        </InfoStyle.StarInfoDescription>
        <InfoStyle.StarInfoManual>manual</InfoStyle.StarInfoManual>
        <InfoStyle.StarInfoEtc>관측횟수, 최초관측</InfoStyle.StarInfoEtc>
      </InfoStyle.StarInfoBox>
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
