/* eslint-disable no-undef */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import MyDictQiuTop from '../../../Layout/MyLayout/MyDict/MyDictQiuTop';
import MyDictQiuBot from '../../../Layout/MyLayout/MyDict/MyDictQiuBot';
import * as DictainerStyle from '../../../Components/MyComponents/MyDictComponent/MyDictContainer';
import * as MyStyle from '../../../Components/MyComponents/MyStyle';
import MyGlobal from '../../../Components/MyComponents/MyGlobalStyle';
import MyHeader from '../../../Layout/MyLayout/MyHeader';
import MyDictSideBar from '../../../Components/MyComponents/MyDictComponent/MyDictSideBar';
import api from '../../../Components/api';
import { UserStore } from '../../../../store';
import Star1 from '../../../../Assets/Mypage/symbols/Star1';
import Star from './Star';

interface Constellation {
  id: number;
  name: string;
  completed: boolean;
}

function MyQiu() {
  // 가을
  const { id } = UserStore();
  const [constellations, setConstellations] = useState<Constellation[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  // 유저의 도전과제별 별자리 목록 조회
  const getUserAchievements = async (userid: number, achievementid: number) => {
    await api
      .get(`/users/${userid}/achievements/${achievementid}/constellations`, { withCredentials: true })
      .then((res) => {
        console.log(res.data.data);
        setConstellations(res.data.data);
      });
  };

  useEffect(() => {
    getUserAchievements(id, 3);
  }, []);

  const renderConstellations = (currentPage: number): JSX.Element[] => {
    const startIndex = (currentPage - 1) * postPerPage;
    const endIndex = startIndex + postPerPage;

    return constellations
      .slice(startIndex, endIndex)
      .map((constellation: Constellation) => <Star constellation={constellation} />);
  };

  return (
    <MyStyle.Container>
      <MyGlobal />
      <MyHeader />
      <DictainerStyle.DictMainBox>
        <MyDictSideBar />
        <DictainerStyle.WrapConstellations>
          {renderConstellations(currentPage)}
          <DictainerStyle.WrapPagination>
            {[1, 2].map((page) =>
              page === currentPage ? (
                <DictainerStyle.MatchCurrentPage className="active" key={page} onClick={() => setCurrentPage(page)}>
                  {page}
                </DictainerStyle.MatchCurrentPage>
              ) : (
                <DictainerStyle.CurrentPage className="active" key={page} onClick={() => setCurrentPage(page)}>
                  {page}
                </DictainerStyle.CurrentPage>
              ),
            )}
          </DictainerStyle.WrapPagination>
        </DictainerStyle.WrapConstellations>
      </DictainerStyle.DictMainBox>
    </MyStyle.Container>
  );
}

export default MyQiu;
