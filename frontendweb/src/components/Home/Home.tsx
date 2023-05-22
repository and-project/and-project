import React, { useEffect, useState, useRef } from "react";
import NoticePage from "./NoticePage";

const Home = () => {
  const intersectingRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const handleIntersecting = () => {
    setIsIntersecting(true);
  };

  useEffect(() => {
    if (isIntersecting) {
      // 추가 로직 작성
    }
  }, [isIntersecting]);

  return (
    <div>
      <header>
        <h1>오이오이</h1>
      </header>

      {/* <Remocon /> */}
      {/* 썸네일에 넣어야할 요소들 */}
      <NoticePage ref={intersectingRef} onIntersecting={handleIntersecting} />
    </div>
  );
};

export default Home;
