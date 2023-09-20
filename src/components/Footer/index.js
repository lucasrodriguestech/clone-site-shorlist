
import './styles.css';

function Footer() {
  return (
    <div className="footer-container">
      <img src='https://shortlist.io/wp-content/uploads//2021/03/sl-logo-white.svg' alt='' />
      
      <div className='enderecos-container'>
        <h4>PHILADELPHIA</h4>
        <p>2402 Catharine Street</p> 
        <p>Philadelphia, Pennsylvania,</p> 
        <p>19146 US</p> 
      </div>
      <div className='enderecos-container'>
        <h4>SKOPJE</h4>
        <p>Koco Racin 14/5-8</p> 
        <p>1000 Skopje,</p> 
        <p>North Macedonia</p> 
      </div>

      <div className='enderecos-container'>
        <h4>CONTACT</h4>
        <p>info@shortlist.io</p> 
        
        <span>SEND MESSAGE -</span> 
      </div>
      
      <h1>Links built with love</h1>
      <div className='social-container'>
          <ul>
            <li>
              <img src='' alt='' />
            </li>
            <li>
              <img src='' alt='' />
            </li>
            <li>
              <img src='' alt='' />
            </li>
          </ul>
      </div>

      <hr />
      
      <div className='links-container'>
        <h3>WHITE LABEL SOLUTIONS</h3>
        <li>
          Link building
        </li>
        <li>
          Content Strategy & Writing
        </li>
        <li>
          Branding & Website Design
        </li>
        <li>
          Client Referral
        </li>
      </div>

      <div className='links-container'>
        <h3>SERVICES</h3>
        <li>
          Link building
        </li>
        <li>
          Content Strategy & Writing
        </li>
        <li>
          Branding & Website Design
        </li>
        <li>
          Client Referral
        </li>
      </div>

      <div className='links-container'>
        <h3>OUR PARTNERS</h3>
        <li>
          Inspirar
        </li>
        <li>
          Focus
        </li>
        <li>
          Taskdrive
        </li>
        <li>
          LTVplus
        </li>
        <li>
          Upcoach
        </li>
      </div>

      <div className='links-container'>
        <h3>JOIN OUR NEWSLETTER</h3>
        <p>
          And get subscriber-only first access to our promotions and case studies before everyone else!p
        </p>
      </div>

      <input type='email' placeholder='Enter yout email here...'/>
      <button>SEND</button>

      <nav className='footer-site'>
        <li>
          Disclaimer
        </li>
        <hr/>
        <li>
          Terms of Service
        </li>
        <hr/>
        <li>
          Privacy Police
        </li>
      </nav>


      <div className='copyright'>Copyright © 2021 Shortlist</div>

    </div>

    
  );
}

export default Footer;
