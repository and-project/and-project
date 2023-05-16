import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "./_home.scss";
import Nav from "./Nav";
import Remocon from "../Remocon/Remocon";

interface items {
  id: string;
  name: string;
}

function Home() {
  const [items, setItems] = useState([]);
  const [dataLength, setDataLength] = useState(0);
  useEffect(() => {
    // 데이터를 로드합니다.
    fetch("/api/home")
      .then((response) => response.text())
      .then((items) => {
        setItems(items);
        setDataLength(items.length);
      });
  }, []);

  return (
    <div>
      <header
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1>오이오이</h1>
        <Nav />
      </header>

      <Remocon />
      <InfiniteScroll
        next={() =>
          fetch("/api/home").then((response) => response.json())
        }
        dataLength={dataLength}
        renderItem={(item: items) => <div key={item.id}>{item.name}</div>}
      />
    </div>
  );
}

export default Home;
