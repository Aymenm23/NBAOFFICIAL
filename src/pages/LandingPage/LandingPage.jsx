import "./LandingPage.scss"
import LandingPageComponent from "../../components/landingPageComponents/landingPageComponent";
import MainArticleComponent from "../../components/landingPageComponents/mainArticle/MainArticleComponent";
import SubArticleComponent from "../../components/landingPageComponents/subArticle/subArticle";
import Brunson from "../../assets/BRUNSON.png"
import AD from "../../assets/AD.jpg.png"
import Bagley from "../../assets/BAGLEY.jpg.png"
import RUI from "../../assets/RUI.jpg.png"

const LandingPage = () => {
  const sampleText = "Tallest basketball player makes a basketball play!"
  return (
    <main className="landingPage">
      <LandingPageComponent/>
      {/* <section className="landingMain">
        <MainArticleComponent image={Brunson} headerText={sampleText} subText={sampleText}/>
        <div className='landingMain__subArticles'> 
          <SubArticleComponent image={AD} headerText={sampleText} subText={sampleText}/>
          <SubArticleComponent image={Bagley} headerText={sampleText} subText={sampleText}/>
          <SubArticleComponent image={RUI} headerText={"sampleText"} subText={sampleText}/>
        </div>
      </section> */}
    </main>
  );
};
export default LandingPage;
