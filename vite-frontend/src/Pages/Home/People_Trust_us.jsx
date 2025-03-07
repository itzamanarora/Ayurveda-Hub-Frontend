import { Link } from "react-router-dom";
import Card_2 from "../../Components/Card/Card_2";
import './Home.css';

function People_Trust_us({ heading, subheading }) {
  return (
    <div className="card2-container">
      <div className="heading-container">
        <h1 className="card-heading">{heading}</h1>
        <p className="car-subheading">{subheading}</p>
      </div>
      <div className="card-section">
        <Link 
          to={'quiz'}
          style={{textDecoration:'none'}}
          >
            <Card_2 src={'./assets/img-quiz.svg'} heading={`Quiz`} ></Card_2>
        </Link>
        <Link 
          to={'doctor'}
          style={{textDecoration:'none'}}
          >
             <Card_2 src={'./assets/img-doctor.svg'} heading={`Doctor`} />
        </Link>
        <Link 
          to={'ebook'}
          style={{textDecoration:'none'}}
          >
            <Card_2 src={'./assets/img-ebook.svg'} heading={`Ebook`} />
        </Link>
        <Link 
          to={'articles'}
          style={{textDecoration:'none'}}
          >
            <Card_2 src={'./assets/img-article.svg'} heading={`Articles`} />
        </Link>
      </div>
    </div>
  );
}

export default People_Trust_us;