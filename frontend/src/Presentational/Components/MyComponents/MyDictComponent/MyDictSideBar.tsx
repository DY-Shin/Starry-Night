import React, { useState, useEffect } from 'react';
import { Link, useMatch } from 'react-router-dom';
import { Container, DictButton, MenuLink } from './MyDictSideBarStyle';
import { MyStar } from '../MyStyle';
import api from '../../api';
import { UserStore } from '../../../../store';

function Dict() {
  const myDictMatch = useMatch('/mypage/dict');
  const myBeiMatch = useMatch('/mypage/dict/nor');
  const myChunMatch = useMatch('/mypage/dict/spr');
  const myXiaMatch = useMatch('/mypage/dict/sum');
  const myQiuMatch = useMatch('/mypage/dict/aut');
  const myDongMatch = useMatch('/mypage/dict/win');
  const mySolMatch = useMatch('/mypage/dict/sol');
  const [rewards, setRewards] = useState();
  const { id } = UserStore();

  // 도전목록 리스트 가져오기 (봄, 여름, 가을 등등)
  const getRewards = async () => {
    await api.get(`/achievements`, { withCredentials: true }).then((res) => {
      setRewards(res.data.data);
      // console.log(res.data.data);
    });
  };

  // 유저의 도전과제별 별자리 목록 조회
  const getUserAchievements = async (userid: number, achievementid: number) => {
    await api
      .get(`/users/${userid}/achievements/${achievementid}/constellations`, { withCredentials: true })
      .then((res) => {
        console.log(res.data.data);
      });
  };

  useEffect(() => {
    getRewards();
  }, []);

  return (
    <Container>
      <div>
        <MenuLink
          to="/mypage/dict/all"
          style={{ textDecoration: 'none' }}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <DictButton>
            {/* {myDictMatch && <MyStar />}전체{myDictMatch && <MyStar />} */}
            전체
          </DictButton>
        </MenuLink>

        <MenuLink
          to="/mypage/dict/nor"
          style={{ textDecoration: 'none' }}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <DictButton onClick={() => getUserAchievements(id, 5)}>북쪽</DictButton>
        </MenuLink>

        <MenuLink
          to="/mypage/dict/spr"
          style={{ textDecoration: 'none' }}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <DictButton>봄철</DictButton>
        </MenuLink>

        <MenuLink
          to="/mypage/dict/sum"
          style={{ textDecoration: 'none' }}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <DictButton>여름철</DictButton>
        </MenuLink>

        <MenuLink
          to="/mypage/dict/aut"
          style={{ textDecoration: 'none' }}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <DictButton>가을철</DictButton>
        </MenuLink>

        <MenuLink
          to="/mypage/dict/win"
          style={{ textDecoration: 'none' }}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <DictButton>겨울철</DictButton>
        </MenuLink>

        <MenuLink
          to="/mypage/dict/sol"
          style={{ textDecoration: 'none' }}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <DictButton>황도</DictButton>
        </MenuLink>
      </div>
    </Container>
  );
}

export default Dict;
