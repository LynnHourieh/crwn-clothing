import { Link } from "react-router-dom";
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './directory-item.styles';

const DirectoryItem = ({ category }) => {
  const { imageurl, title } = category;

  return (
    <DirectoryItemContainer>
      <BackgroundImage imageurl={imageurl} />
      <Body>
        <Link to={"shop/" + `${title}`}>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Link>
      </Body>
    </DirectoryItemContainer>
    // <div className="directory-item-container">
    //   <div
    //     className="background-image"
    //     style={{
    //       backgroundImage: `url(${imageUrl})`,
    //     }}
    //   />

    //   <div className="body">
    //     <Link to={"shop/" + `${title}`}>
    //       <h2>{title}</h2>
    //       <p>Shop Now</p>
    //     </Link>
    //   </div>
    // </div>
  );
};

export default DirectoryItem;
