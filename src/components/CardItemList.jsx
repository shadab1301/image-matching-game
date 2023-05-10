import { CardItem } from "./CardItem";
import GameData from "../app.mock";
import { useEffect, useState } from "react";
import "../styles.css";

const styles={
  display: "flex",
  flexWrap: "wrap",
  width:"50%",
  margin:"auto"
}
export const CardItemList = () => {
  const [cardList, setCardList] = useState([...GameData]);
  const [data, setdata] = useState([]);
  useEffect(() => {
    let updateArray = [...cardList];
    if (data.length == 2) {
      if (data[0].name == data[1].name) {
      } else {
        setTimeout(() => {
          data.forEach((ele) => {
            console.log(ele);
            let obj = cardList.findIndex((obj) => obj.id == ele.id);
            updateArray[obj].isOpen = false;
            setCardList(updateArray);
          });
        }, 2000);
      }
      setdata([]);
    }
  }, [data]);
  const onClickHandler = (currentId) => {
    setdata((da) => [...da, currentId]);
    let updateArray = [...cardList];
    let obj = cardList.findIndex((obj) => obj.id == currentId.id);
    updateArray[obj].isOpen = true;
    setCardList(updateArray);
  };

  return (
    <div className="card-item-list" style={styles}>
      {cardList.map((item) => {
        return (
          <CardItem
            name={item.name}
            key={item.id}
            id={item.id}
            image={item.pic}
            onClick={onClickHandler}
            isOpen={item.isOpen}
          ></CardItem>
        );
      })}
    </div>
  );
};
