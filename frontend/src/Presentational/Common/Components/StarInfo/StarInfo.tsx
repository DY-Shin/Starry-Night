import * as StarInfo from './StarInfoStyle';

type Props = {
  title?: string;
  alert?: string;
  coin?: number | string;
  closeModal?: () => void;
};
function Modal({ title, alert, coin, closeModal }: Props) {
  return (
    <StarInfo.ModalWrap>
      <StarInfo.ModalBackGround onClick={closeModal} />
      <StarInfo.ModalContainer>
        <Text weight={700} size="2rem">
          {title}
        </Text>
        <StarInfo.ModalAlertText>{alert}</StarInfo.ModalAlertText>
        {coin ? (
          <ButtonBox>
            <Button variant="outlineModalButton">아니오</Button>
            <Button variant="outlineCoinModalButton">
              <ButtonCoinBox>
                <CoinIcon />
                {coin}
              </ButtonCoinBox>
            </Button>
          </ButtonBox>
        ) : (
          <ButtonBox>
            <Button variant="outlineModalButton">아니오</Button>
            <Button variant="modalButton">네</Button>
          </ButtonBox>
        )}
      </StarInfo.ModalContainer>
    </StarInfo.ModalWrap>
  );
}

export default Modal;
