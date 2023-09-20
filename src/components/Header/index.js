import Card from '../Card';
import './styles.css';
import {AiOutlineAlignLeft} from 'react-icons/ai';

function Header() {
  return (
    <>
      <div className="header-container">
          <img src={'https://shortlist.io/wp-content/uploads/2021/03/shortlist-logo1.svg'} alt='' />
          <div><AiOutlineAlignLeft/></div>
      </div>
      <div className='header-hero'>
        <h1>Natural, Clean Backlinks Built For You</h1>
        <p>We help you develop a reputable backlink profile by building contextual, dofollow links that will increase your search engine rankings and your site’s traffic.</p>
        <button className='button-one'>Talk With An SEO Expert</button>
        <div className='selos-container'>
          <img src='https://shortlist.io/wp-content/uploads/2022/12/trustpilot-sl.svg' alt=''/>
          <img src='https://shortlist.io/wp-content/uploads//2021/03/clutch-badge.svg' alt=''/>
        </div>
      <Card />
      </div>
      
    </>
    
  );
}

export default Header;
