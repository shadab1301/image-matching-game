import { blankCard as defaultImage } from "./../images";
import "../styles.css";
export const CardItem = ({ isOpen, image, id, onClick, name }) => {
  const imagePath = isOpen ? image : defaultImage;
  return (
    <div className="card-item" style={{width:"150px",height:"150px",border:"1px solid grey"}} onClick={() => onClick({ id, name })}>
      <img src={imagePath} alt="Image" height={"100%"} width={"100%"} />
    </div>
  );
};
