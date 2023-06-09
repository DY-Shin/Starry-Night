import React, { useState, useRef, useEffect } from 'react';
import { Root, createRoot } from 'react-dom/client';
import Slider, { Settings } from 'react-slick';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import Swal from 'sweetalert2';
import * as PostStyle from './BoardPost_Style';
import 'slick-carousel/slick/slick';
import * as BoardPostAPI from '../../../../../Action/Modules/NaverMap/BoardPost';
import * as FavoriteApi from '../../../../../Action/Modules/NaverMap/Favorite';
import ConstellationInfoComponent from '../../../Info/ConstellationInfoComponent';

type propsType = {
  data: BoardPostAPI.dataType;
  setDataHandler: React.Dispatch<React.SetStateAction<BoardPostAPI.resultType | null>>;
  idx: number;
  // eslint-disable-next-line no-undef
  markerObject: naver.maps.Marker[] | null;
};

function CustomModal({
  setIsModalOpen,
  selectId,
}: {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectId: React.MutableRefObject<number>;
}) {
  return <ConstellationInfoComponent setIsModalOpen={setIsModalOpen} selectId={selectId.current} />;
}

function BoardPost(props: propsType) {
  const { data, setDataHandler, idx, markerObject } = props;

  /*
   * 모달 닫힘/펼침 상태 State
   */
  const [isModalOpen, setIsModalOpen] = useState(false);

  /*
   * selectId : 현재 선택된 별자리 id 값을 담을 number타입 참조 객체
   */
  const selectId = useRef(0);

  /*
   * modalContainer : createRoot() 메서드가 실행될 div 엘리먼트에 대한 참조
   */
  const modalContainer = useRef(document.createElement('div')).current;
  modalContainer.className = 'customModal';

  /*
   * root : createRoot() 메서드가 실행된 레퍼런스
   */
  const root = useRef<null | Root>(null);

  /*
   * isModalOpen State값 변경 마다 실행
   */
  useEffect(() => {
    if (isModalOpen) {
      document.body.appendChild(modalContainer);

      /*
       * createRoot() 메서드가 처음 실행될 때에만 레퍼런스를 설정하도록 함
       */
      if (!root.current) {
        root.current = createRoot(modalContainer);
      }

      root.current.render(<CustomModal setIsModalOpen={setIsModalOpen} selectId={selectId} />);
    } else {
      const customModal = document.getElementsByClassName('customModal')[0];
      if (customModal) {
        customModal.remove();
      }
    }
  }, [isModalOpen]);

  const carouselSetting: Settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  function calculDate() {
    const nowDate = new Date();
    const postDate = new Date(data.createdDate);
    let returnString = '';
    const gapTime = nowDate.getTime() - postDate.getTime();
    const gapDay = Math.floor(gapTime / (1000 * 60 * 60 * 24));
    if (gapDay > 7) {
      const gapWeek = Math.floor(gapDay / 7);
      if (gapWeek > 4) {
        const gapMonth = Math.floor(gapWeek / 4);
        if (gapMonth > 12) {
          const gapYear = Math.floor(gapMonth / 12);
          returnString = `${gapYear.toString()} 년 전`;
        } else {
          returnString = `${gapMonth.toString()} 달 전`;
        }
      } else {
        returnString = `${gapWeek.toString()} 주 전`;
      }
    } else if (gapDay !== 0) {
      returnString = `${gapDay.toString()} 일 전`;
    } else {
      returnString = `오늘 작성`;
    }
    return returnString;
  }

  async function likeOn() {
    const likeResultData = await BoardPostAPI.changeLikeOn(data.id);
    if (likeResultData.success) {
      setDataHandler((prev: BoardPostAPI.resultType | null) => {
        if (!prev) return null;
        const temp = { ...prev };
        temp.content[idx].postLikeCount += 1;
        temp.content[idx].postLiked = true;
        return temp;
      });
      Swal.fire({
        icon: 'question',
        title: '위치 즐겨찾기',
        text: '현재 게시글이 작성된 위치를 즐겨찾기 하시겠습니까?',
        confirmButtonText: '예',
        cancelButtonText: '아니요',
        showConfirmButton: true,
        showCancelButton: true,
        allowOutsideClick: false,
      }).then(async (result) => {
        if (result.isConfirmed) {
          const { value: favoriteTitle } = await Swal.fire({
            title: '즐겨찾기 이름 입력',
            input: 'text',
            confirmButtonText: '추가',
            cancelButtonText: '취소',
            showConfirmButton: true,
            showCancelButton: true,
            allowOutsideClick: false,
          });
          if (favoriteTitle) {
            FavoriteApi.AddFavorite(favoriteTitle, data.lat, data.lng);
          }
        }
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: '에러 발생!',
        text: likeResultData.response.data.message,
      });
    }
  }

  async function likeOff() {
    const likeResultData = await BoardPostAPI.changeLikeOff(data.id);
    if (likeResultData.success) {
      setDataHandler((prev: BoardPostAPI.resultType | null) => {
        if (!prev) return null;
        const temp = { ...prev };
        temp.content[idx].postLikeCount -= 1;
        temp.content[idx].postLiked = false;
        return temp;
      });
      Swal.fire({
        icon: 'success',
        title: '좋아요 취소',
        text: '좋아요를 취소 했습니다.',
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false,
        allowOutsideClick: false,
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: '에러 발생!',
        text: likeResultData.response.data.message,
      });
    }
  }

  return (
    <PostStyle.PostWrapper
      className="PostWrapper"
      onMouseEnter={() => {
        if (!markerObject) return;
        BoardPostAPI.sizeUp(markerObject, idx);
      }}
      onMouseLeave={() => {
        if (!markerObject) return;
        BoardPostAPI.sizeReturn(markerObject, idx);
      }}
    >
      <PostStyle.PostTopArea>
        <PostStyle.PostWriterImage link={data.writer.profileImageUrl} />
        <PostStyle.PostWriterTextArea>
          <PostStyle.PostWriterName>{data.writer.name}</PostStyle.PostWriterName>
          <PostStyle.PostWriterDate>{calculDate()}</PostStyle.PostWriterDate>
        </PostStyle.PostWriterTextArea>
      </PostStyle.PostTopArea>
      <Slider {...carouselSetting}>
        {data?.images?.map((value) => {
          return <PostStyle.ImageWrapper link={value.url} key={value.id} />;
        })}
      </Slider>
      <PostStyle.PostContent>{data?.content}</PostStyle.PostContent>
      <PostStyle.StarTagArea>
        {data?.constellationTags?.map((starValue) => {
          return (
            <PostStyle.StarTag
              key={starValue.name}
              onClick={() => {
                selectId.current = starValue.id;
                setIsModalOpen(true);
              }}
            >
              #{starValue.name.split('자리')[0]}
            </PostStyle.StarTag>
          );
        })}
      </PostStyle.StarTagArea>
      <PostStyle.PostBottomArea>
        {data.postLiked ? (
          <AiFillHeart size={25} className="likeIcon" onClick={() => likeOff()} />
        ) : (
          <AiOutlineHeart size={25} className="likeIcon" onClick={() => likeOn()} />
        )}
        <PostStyle.PostLikeCount>{data.postLikeCount}</PostStyle.PostLikeCount>
      </PostStyle.PostBottomArea>
      <PostStyle.PostLine className="line" />
    </PostStyle.PostWrapper>
  );
}

export default BoardPost;
