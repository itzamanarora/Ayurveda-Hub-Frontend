import Card_2 from "../../Components/Card/Card_2";
import './Home.css'

function People_Trust_us({ heading, subheading }) {
  return (
    <div className="card2-container">
      <div className="heading-container">
        <h1 className="card-heading">{heading}</h1>
        <p className="car-subheading">{subheading}</p>
      </div>
      <div className="card-section">
        <Card_2 src={'./Quiz.svg'} heading={`Quiz`} />
        <Card_2 src={'./Doctor.svg'} heading={`Doctor`} />
        <Card_2 src={'./EBook.svg'} heading={`Ebook`} />
        <Card_2 src={'./Article.svg'} heading={`Articles`} />
      </div>
    </div>
  );
}

export default People_Trust_us;