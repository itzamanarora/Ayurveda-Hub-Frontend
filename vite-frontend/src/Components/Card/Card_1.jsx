import './Card.css'


function Card_1({src, heading, subheading}) {
    return (
        <div className="card1">
            <img src={src} alt="Image 1" />
            <span className='card1-heading'>{heading}</span>
            <span className='card1-subheading' dangerouslySetInnerHTML={{__html: subheading}}></span>
        </div>
    )
}

export default Card_1;