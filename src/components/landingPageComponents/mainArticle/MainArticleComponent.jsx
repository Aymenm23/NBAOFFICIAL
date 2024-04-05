import './MainArticleComponent.scss'


const MainArticleComponent = ({image,headerText}) => {
  
  return (
      <div className='landingMain__focusArticle'>
        <img className='mainImage' src={image} />
        <h3 className='mainText' >{headerText}</h3>
      </div>
  );
};

export default MainArticleComponent;
