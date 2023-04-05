/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable array-callback-return */
/* eslint-disable no-undef */
import React, { useEffect, useState, useCallback } from 'react';
import * as MyStyle from '../../../Components/MyComponents/MyStyle';
import MyGlobal from '../../../Components/MyComponents/MyGlobalStyle';
import MyHeader from '../../../Layout/MyLayout/MyHeader';
import MyDictSideBar from '../../../Components/MyComponents/MyDictComponent/MyDictSideBar';
import * as DictainerStyle from '../../../Components/MyComponents/MyDictComponent/MyDictContainer';
import api from '../../../Components/api';
import { UserStore } from '../../../../store';
import Star from './Star';

interface Constellation {
  id: number;
  name: string;
  completed: boolean;
}

function MyDict() {
  const [constellations, setConstellations] = useState<Constellation[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  const { id } = UserStore();

  // 유저의 전체 별자리 조회
  const getUserAllConstellations = async (userId: number) => {
    try {
      const response = await api.get(`users/${userId}/constellations`, { withCredentials: true });
      console.log(response.data.data);
      setConstellations(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (constellations.length === 0) {
      getUserAllConstellations(id);
    }
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
            {[1, 2, 3, 4, 5, 6].map((page) =>
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
        {/* )} */}
      </DictainerStyle.DictMainBox>
    </MyStyle.Container>
  );
}

export default MyDict;
