import './Home.css'
import Mid_Bar from "../../Components/Mid-bar/Mid_Bar";
import Mid_Bar_Sale from "../../Components/Mid-bar/Mid_Bar_Sale";
import Choose_what_to_solve from "./Choose_what_to_solve";
import People_Trust_us  from "./People_Trust_us";

function Home() {
  // Set the document title to Ayurveda Hub when the component mounts
  document.title = "Ayurveda Hub";


  return (
    <div>
      <Mid_Bar_Sale text={'Use Code <Strong>FIRST50</Strong> - & get Flat <Strong>50% OFF</Strong> on your first Order!'} />

      {/* Image Slider  */}
      <div className="image-slider">
        <img src={`${import.meta.env.BASE_URL}assets/img-homeSection.jpg`}></img>
      </div>

      {/* Certificate  */}
      <div className="container">
        <div className="inner-container">
          <img src={`${import.meta.env.BASE_URL}assets/img-national_amblem.svg`} alt="national" />Ministry of AYUSH
        </div>
        <div className="inner-container">
          <img src={`${import.meta.env.BASE_URL}assets/img-FDA.svg`} alt="FDA" />USFDA approved
        </div>
      </div>

      <Mid_Bar text={`Addressing the Root Cause <strong>Since 2020</strong> with <strong>4+ Years</strong> of In-house Expertise `} />
      <Choose_what_to_solve heading={'Choose what to solve'} subheading={'we’ve got you covered!'} />
      <Mid_Bar text={'Traditional remedies for modern life.'} />
      <People_Trust_us heading={'People Trust US because'} subheading={'we go one step ahead'} />
      <Mid_Bar text={'Pure and natural Ayurvedic products for your wellbeing.'} />
      <Mid_Bar text={'Experience the power of Ayurveda in your daily life.'} />
    </div>
  );
}

export default Home;