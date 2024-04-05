import './subArticle.scss'
const SubArticleComponent = ({image,text}) => {
  return (
        <div className='subArticle'>
          <img className='subImage' src={image} />
          <div className='textStack'>
            <h3 className='subText' >{text}</h3>
            <p className='subText' >{text}</p>
          </div>
        </div>
  );
};

export default SubArticleComponent;
