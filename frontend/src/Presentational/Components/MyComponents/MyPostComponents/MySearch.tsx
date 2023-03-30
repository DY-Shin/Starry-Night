import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, useAnimation, useScroll } from 'framer-motion';

function MySearch() {
  const [searchOpen, setSearchOpen] = useState(false);
  const inputAnimation = useAnimation();
  const navAnimation = useAnimation();
  const { scrollY } = useScroll();
  const Search = styled.div`
    color: white;
    display: flex;
    align-items: center;
    position: left;
    width: 150px;
    svg {
      height: 25px;
    }
  `;
  const Input = styled(motion.input)`
    transform-origin: right center;
    width: 100px;
    position: absolute;
    z-index: -1;
    color: white;
    font-size: 16px;
    background-color: blue;
    border: 1px solid;
  `;
  const toggleSearch = () => {
    if (searchOpen) {
      inputAnimation.start({
        scaleX: 0,
      });
    } else {
      inputAnimation.start({ scaleX: 1 });
    }
    setSearchOpen((prev) => !prev);
  };
  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 80) {
        navAnimation.start('scroll');
      } else {
        navAnimation.start('top');
      }
    });
  }, [scrollY, navAnimation]);
  return (
    <Search>
      <motion.svg
        onClick={toggleSearch}
        animate={{ x: searchOpen ? -180 : 0 }}
        transition={{ type: 'linear' }}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clipRule="evenodd"
        />
      </motion.svg>
      <Input
        animate={inputAnimation}
        initial={{ scaleX: 0 }}
        transition={{ type: 'linear' }}
        placeholder="검색어를 입력하세요"
      />
    </Search>
  );
}

export default MySearch;
