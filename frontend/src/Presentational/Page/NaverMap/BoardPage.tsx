import React, { useEffect } from 'react';
import * as BoardPostAPI from '../../../Action/Modules/NaverMap/BoardPost';

type propsType = {
  // eslint-disable-next-line no-undef
  map: naver.maps.Map | null;
  refreshState: boolean;
};

function BoardPage(props: propsType) {
  const { map, refreshState } = props;

  useEffect(() => {
    if (map) BoardPostAPI.MakeMarker(map);
  }, [refreshState]);
  return <div>board페이지</div>;
}

export default BoardPage;
