import styled from 'styled-components';
import { SiFacebook, SiInstagram, SiTwitter, SiYoutube } from 'react-icons/si';

// footer
export const MainFooter = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 200px;
  color: white;
  background-color: black;
`;
export const FooterTeamName1 = styled.div`
  margin-top: 20px;
  font-size: 36px;
  color: white;
`;
export const FooterTeamName2 = styled.div`
  margin-top: 12px;
  color: white;
`;

export const WrapIcon = styled.div`
  margin-top: 12px;
  display: flex;
  width: 240px;
  justify-content: space-between;
`;
export const FooterFacebook = styled(SiFacebook)`
  width: 40px;
  height: 40px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
export const FooterInstagram = styled(SiInstagram)`
  width: 40px;
  height: 40px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
export const FooterTwitter = styled(SiTwitter)`
  width: 40px;
  height: 40px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
export const FooterYoutubr = styled(SiYoutube)`
  width: 40px;
  height: 40px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
export const Copyright = styled.span`
  font-size: 10px;
  position: absolute;
  bottom: 5px;
`;
