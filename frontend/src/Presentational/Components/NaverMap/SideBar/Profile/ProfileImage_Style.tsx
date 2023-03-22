import styled from 'styled-components';

export const ProfileImageWrapper = styled.div`
  width: calc(100%-5px);
  height: 110px;
  padding: 5px;
`;
export const ProfileImageBorder = styled.div`
  border: 2px solid white;
  border-radius: 50%;
  width: 76px;
  height: 76px;
  transform: translateY(20px);
  margin-left: 10px;
`;
export const ProfileImage = styled.div`
  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/53474/atom_profile_01.jpg');
  border-radius: 50%;
  background-size: cover;
  width: 100%;
  height: 100%;
`;
