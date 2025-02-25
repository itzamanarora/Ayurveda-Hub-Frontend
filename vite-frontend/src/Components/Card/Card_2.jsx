import './Card.css'


function Card_2({src, heading}) {
    return (
        <div className="card2">
            <img src={src} alt="Image 1" />
            <span className='card2-heading'>{heading}</span>
        </div>
    )
}

export default Card_2;