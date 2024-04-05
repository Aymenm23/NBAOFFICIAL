import "./landingPageComponent.scss";
import Etsy from "../../assets/EtsyHeadline.png";
import MainPhoto from "../../assets/MainPhoto.png";
import Green from "../../assets/NBAGreenHeadline.png";
import Food from "../../assets/FoodHeadline.png";

const LandingPageComponent = () => {
   let url = window.location.href;
   url.toLowerCase();
   console.log(url);
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
      <section className="landingMain">
         <div className="landingMain__title">
            <h1 className="titleHeader">Welcome to Your NBA Starter Kit</h1>
            <p className="titleSubtext">A lineup of content just for you</p>
         </div>
         <div className="row">
            {/* <Link to="/"> */}
            <div className="landingMain__focusArticle">
               <img className="mainImage" src={mainPhoto} />
               <h3 className="mainText">Sports News Digest for Beginners</h3>
               <p className="subText">
                  Culture writer Kat Daly breaks down the top 10 the biggest storylines you
                  don’t want to miss.
               </p>
               <p className="date">10 hours ago</p>
            </div>
            {/* </Link> */}
            <div className="landingMain__subArticles">
               <div className="subArticle">
                  <img className="subImage" src={etsy} />
                  <div className="textStack">
                     <h3 className="subText">Etsy and the NBA</h3>
                     <p className="subText">
                        Find everything from crocheted basketballs to {<br />}
                        stone-etched player cards.
                     </p>
                     <p className="date">April 3, 2024</p>
                  </div>
               </div>
               <div className="subArticle">
                  <img className="subImage" src={food} />
                  <div className="textStack">
                     <h3 className="subText">5 Arenas with the best Food</h3>
                     <p className="subText">
                        Love sushi burritos? Staples Center has got{<br />}you covered.
                     </p>
                     <p className="date">April 2, 2024</p>
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
                     <p className="date">April 1, 2024</p>
                  </div>
               </div>
            </div>
         </div>
         <div className="slidingDeck">
            <div className="slidingDeck__1 slide">
               <h3>TikTok challenges</h3>
               <p>C’mon, we know you want to.</p>
               <p>March 29, 2024</p>
            </div>
            <div className="slidingDeck__2 slide">
               <h3>3 Multi-Player Games We Love right now</h3>
               <p>Mobile basketball never felt so real.</p>
               <p>March 27, 2024</p>
            </div>
            <div className="slidingDeck__3 slide">
               <h3>Celebrity sightings</h3>
               <p>Did you see Jack Harlow at last night’s knicks game?</p>
               <p>March 26, 2024</p>
            </div>
            <div className="slidingDeck__4 slide">
               <h3>Social media follow alert</h3>
               <p>Who to follow for the best basketball content.</p>
               <p>March 25, 2024</p>
            </div>
            <div className="slidingDeck__5 slide">
               <h3>5 minute interview with Steph curry</h3>
               <p>Not sure who that is? We got you.</p>
               <p>March 22, 2024</p>
            </div>
         </div>
      </section>
   );
};

export default LandingPageComponent;
