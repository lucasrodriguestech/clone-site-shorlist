import './styles.css';

function Card () {
    return (
        <>
            <div className="card-container">
                <img src='https://shortlist.io/wp-content/uploads//2021/03/trustpilot-testimonial-stars.svg' alt='' />
                <h4>Shortlist has been a great help for our SEO efforts</h4>
                <p>Shortlist has been a great help for our SEO efforts, all while requiring minimal oversight / guidance from us. Our organic traffic has improved due to their blogging and backlinking efforts, and their communication is stellar. I have …</p>
                <h5>READ FULL REVIEW ON TRUSTPILOT</h5>
                <div className='user-comment'>
                    <img src='https://shortlist.io/wp-content/uploads/2021/03/testimonial1-2xsize.png' alt='foto-user' />
                    <h4>David Anderson</h4>
                    <span>US</span>
                </div> 
            </div>
            <div className="card-container">
                <img src='https://shortlist.io/wp-content/uploads//2021/03/trustpilot-testimonial-stars.svg' alt='' />
                <h4>Working with Shortlist was a great experience</h4>
                <p>Working with Shortlist was a great experience. We needed a way to build high quality backlinks to our content and Shortlist did it in a way that was both time efficient and cost effective…</p>
                <h5>READ FULL REVIEW ON TRUSTPILOT</h5>
                <div className='user-comment'>
                    <img src='https://shortlist.io/wp-content/uploads/2021/03/testimonial2-2xsize.png' alt='foto-user' />
                    <h4>Christopher</h4>
                    <span>US</span>
                </div> 
            </div>
        </>
        
    )
}

export default Card;