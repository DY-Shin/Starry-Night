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
          <h3>세부 정보</h3> <hr />
          descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription
        </InfoStyle.StarInfoDescription>
        <InfoStyle.StarInfoManual>
          <h3>찾는 방법</h3> <hr />
          manual
        </InfoStyle.StarInfoManual>
        <InfoStyle.StarInfoEtc>
          관측횟수
          <br /> 최초관측
        </InfoStyle.StarInfoEtc>
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
