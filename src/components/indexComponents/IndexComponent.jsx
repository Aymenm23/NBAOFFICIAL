import { Link } from "react-router-dom";
import "./IndexComponent.scss";
import closeIcon from "../../assets/eXit.svg";
import nbaLogo from "../../assets/nbaLogo.png";

const IndexComponent = () => {
   return (
      <section className="popUpCard">
         <div className="nbaBackground"></div>
         <div className="popUpCard__greyBackground"></div>
         <div className="popUpCard__x">
            <Link to="https://www.nba.com/" className="">
               <img src={closeIcon} className="xIcon" />
            </Link>
         </div>
         <div className="popUpCard__nbaLogo">
            <img src={nbaLogo} className="nbaLogo" />
         </div>
         <div className="popUpCard__content">
            <div className="content">
               <div className="content__text">
                  <h2 className="indexTitle">YOUR FANDOM. {<br />} YOUR EXPERIENCE.</h2>
                  <h3 className="indexSubtext">
                     Tailor your NBA content using <span className="red">D.U.N.K</span>
                  </h3>
               </div>
               <Link to="/questions" className="content__button">
                  <div className="indexButton">
                     <p>Get Started</p>
                  </div>
               </Link>
            </div>
         </div>
      </section>
   );
};

export default IndexComponent;
