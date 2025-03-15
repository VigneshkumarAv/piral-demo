import * as React from "react";
import { sculptureList } from "../data/carousel";
import "../style.scss";

export const Carousel: React.FC = () => {
  const [index, setIndex] = React.useState<number>(0);
  const [showMore, setShowMore] = React.useState<boolean>(false);
  
  function handleNextClick() {
    setIndex((nextInd) =>
      nextInd === sculptureList.length - 1 ? 0 : nextInd + 1
    );
  }

  function handlePreviousClick() {
    setIndex((prevInd) =>
      prevInd === 0 ? sculptureList.length - 1 : prevInd - 1
    );
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
    <section>
    <h1>Carousel - Sculptures</h1>
    <p>Used ExtensionSlot in the main shell and registered extensions using registerExtension in the pilet.</p>      
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      </section>
      {showMore && <p>{sculpture.description}</p>}
      <section className="carousel">
      <button onClick={handlePreviousClick}> {"<"}</button>
      <img src={sculpture.url} alt={sculpture.alt} className="carousel-img"/>
      <button onClick={handleNextClick}>{">"}</button>
      </section>
    </>
  );
};
