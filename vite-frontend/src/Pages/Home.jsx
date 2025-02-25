import ImageSlider from "../Components/Image-Slider/ImageSlider";
import NavTop from "../Components/NavBar/NavTop";
import './Home.css'
import Certificate from "./Certificate";
import Mid_Bar from "../Components/Mid-bar/Mid_Bar";
import Card_1 from "../Components/Card/Card_1";
import Footer from "../Components/Footer/Footer";
import Mid_Bar_Sale from "../Components/Mid-bar/Mid_Bar_Sale";

function Home() {
  return (
    <>
      <NavTop />
      <Mid_Bar_Sale text={'SALE!!'} />
      <ImageSlider />
      <Certificate />
      <Mid_Bar text={`Addressing the Root Cause <strong>Since 2020</strong> with <strong>4+ Years</strong> of In-house Expertise `} />
      <div className="card1-container">
            <div className="heading-container">
                <h1 className="card-heading">Choose what to solve</h1>
                <p className="car-subheading">we’ve got you covered!</p>
            </div>
            <div className='card-section'>
            <Card_1 src={'./Period-health.svg'} heading={'Women'} subheading={`Period <br /> Health`}/>
            <Card_1 src={'./Sexual-health.svg'} heading={'Men'} subheading={`Sexual <br /> Health`}/>
            <Card_1 src={'./Hair-health.svg'} heading={'All Genders'} subheading={`Hair <br /> Health`}/>
            <Card_1 src={'./Mental-health.svg'} heading={'All Genders'} subheading={`Mental <br /> Health`}/>
            <Card_1 src={'./Healthy-food.svg'} heading={'All Genders'} subheading={`Healthy <br /> Food`}/>
            </div>
        </div>
      <Mid_Bar text={'Traditional remedies for modern life.'} />
      <Mid_Bar text={'Pure and natural Ayurvedic products for your wellbeing.'} />
      <Mid_Bar text={'Experience the power of Ayurveda in your daily life.'} />
      <Footer />
    </>
  );
}

export default Home;