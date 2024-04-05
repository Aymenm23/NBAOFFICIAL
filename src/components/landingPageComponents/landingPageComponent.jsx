import "./landingPageComponent.scss";
import Etsy from "../../assets/EtsyHeadline.png";
import MainPhoto from "../../assets/MainPhoto.png";
import Green from "../../assets/NBAGreenHeadline.png";
import Food from "../../assets/FoodHeadline.png";

const LandingPageComponent = () => {
   let url = window.location.href;
   let mainPhoto = MainPhoto;
   let etsy = Etsy;
   let food = Food;
   let green = Green;
   console.log();
   if (url.includes("expert")) {
      mainPhoto = Etsy;
      etsy = Etsy;
      food = Etsy;
      green = Etsy;
   }
   return (
      <>
         <section className="landingMain">
            <div className="landingMain__title">
               <h1 className="titleHeader">Welcome to Your NBA Starter Kit</h1>
               <p className="titleSubtext">A lineup of content just for you</p>
            </div>
            <div className="row">
               <div className="landingMain__focusArticle">
                  <img className="mainImage" src={mainPhoto} />
                  <h3 className="mainText">Sports News Digest for Beginners</h3>
               </div>
               <div className="landingMain__subArticles">
                  <div className="subArticle">
                     <img className="subImage" src={etsy} />
                     <div className="textStack">
                        <h3 className="subText">Etsy and the NBA</h3>
                        <p className="subText">
                           Find everything from crocheted basketballs to {<br />}
                           stone-etched player cards.
                        </p>
                        <p className="date">April 1</p>
                     </div>
                  </div>
                  <div className="subArticle">
                     <img className="subImage" src={food} />
                     <div className="textStack">
                        <h3 className="subText">5 Arenas with the best Food</h3>
                        <p className="subText">
                           Love sushi burritos? Staples Center has got{<br />}you covered.
                        </p>
                        <p className="date">April 1</p>
                     </div>
                  </div>
                  <div className="subArticle">
                     <img className="subImage" src={green} />
                     <div className="textStack">
                        <h3 className="subText">The NBA Goes Green</h3>
                        <p className="subText">
                           How the NBA is working with the EPA to make {<br />}sustainable
                           changes.
                        </p>
                        <p className="date">April 1</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default LandingPageComponent;
