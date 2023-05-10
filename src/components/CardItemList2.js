import { CardItem } from './CardItem';
import GameData from '../app.mock';
import { useEffect, useState } from 'react';
import '../styles.css';

const styles = {
  display: 'flex',
  flexWrap: 'wrap',
  width: '50%',
  margin: 'auto',
};
export const CardItemList2 = () => {
  const [cardList, setCardList] = useState([...GameData]);
  const [count,SetCount] = useState([])

  useEffect(()=>{
    if(count.length===2){
       if(count[0].name !==count[1].name){
        setTimeout(()=>{
            let tempData=cardList.map((val)=>{
                if(val.id===count[0].id || val.id===count[1].id){
                    val.isOpen=false
                }
                return val
            })
            setCardList(tempData)
            SetCount([])
        },1000)
       }else{
        SetCount([])
       }
    }
  },[count,cardList])

  const onClickHandler = (...arg) => {
    const [obj1] = arg;
    const { id, name } = obj1;
    let shallowCardList = [...cardList];
    let updatedList = shallowCardList.map((val) => {
      if (val.id === id && val.name === name) {
        val.isOpen = true;
      }
      return val;
    });
    setCardList(updatedList)
    SetCount([...count,obj1])
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
