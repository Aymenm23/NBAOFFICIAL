import { Link } from 'react-router-dom';
import './IndexComponent.scss'
import closeIcon from "../../assets/eXit.svg"

const IndexComponent = () => {
  return (
    <section className="popUpCard">
      <div className='nbaBackground'></div>
      <div className='popUpCard__greyBackground'></div>
        <div className='popUpCard__x'> 
        <Link to="https://www.nba.com/" className=''>
          <img src={closeIcon} className='xIcon'/>
        </Link>
      </div>
      <div className='popUpCard__content'>
        <div className='content'>
        <div className='content__text'>
          <h1 className='indexTitle'>Are you ready for the experience of a lifetime?</h1>
        </div>
        <div className='content__button'>
          <Link to="/questions">
            <div className='indexButton'>
              <p>Proceed</p>
            </div>
          </Link>
        </div>

        </div>
      </div>
    </section>
  );
};

export default IndexComponent;
