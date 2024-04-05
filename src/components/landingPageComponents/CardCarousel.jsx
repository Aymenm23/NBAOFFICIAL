import data from "../../assets/cardCarousel.json";
import "./CardCarousel.scss";

const cardCarousel = () => {
   data.map((card) => {
      return (
         <div className="slidingDeck">
            <div className="slidingDeck__1 slide">
               <h3>{card.title}</h3>
               <p>{card.text}</p>
               <p>{card.date}</p>
            </div>
         </div>
      );
   });
};

export default cardCarousel;
