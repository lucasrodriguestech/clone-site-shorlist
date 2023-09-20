import './styles.css';

function Artigos() {

    const cards = [
        {
            img: 'https://shortlist.io/wp-content/uploads/2023/03/annie-spratt-QckxruozjRg-unsplash-650x434.webp',
            h5: 'case studies',
            h3: 'The Power of Consistency: Long-Term Benefits of SEO & Link-Building Services',
            p: 'What is the most important aspect of a successful business’s online presence? That’s easy – an authority website.  But here’s the thing'
        },
        {
            img: 'https://shortlist.io/wp-content/uploads/2021/10/linkbuilng-slblog-1-650x433.webp',
            h5: 'case studies',
            h3: 'How to Successfully Outsource Link Building Campaigns in 2021',
            p: 'Link building is without a doubt a vital component to any successful SEO campaign. A well-thought link-building strategy will help ensure that'
        },
        {
            img: 'https://shortlist.io/wp-content/uploads/2021/08/istockphoto-1137014758-612x612-1-1-jpg.webp',
            h5: 'case studies',
            h3: 'SEO Case Study: How Long Do Guest Post Links Last?',
            p: 'Let’s face it, link building is a pain. It takes time, money, and energy from you, so frankly, you want to make'
        }
        
    ]

    return (
        <div className="artigos-container">
            <div className='texts-container'>
                <h4>Case Studies</h4>
                <h2>Link building</h2>
                <p>that produces results, because that's what matters</p>
            </div>

            
                {cards.map((card, index) => (
                <div className='artigo-container' key={index}>   
                    <img src={card.img} alt='' />
                    <h5>{card.h5}</h5>
                    <h3>{card.h3}</h3>
                    <p>{card.p}</p>
                </div>
                ))}
        </div>
    )
}

export default Artigos;