import ImageSlider from "../../Components/Image-Slider/ImageSlider";
import NavTop from "../../Components/NavBar/NavTop";
import './Home.css'
import Certificate from "./Certificate";
import Mid_Bar from "../../Components/Mid-bar/Mid_Bar";
import Footer from "../../Components/Footer/Footer";
import Mid_Bar_Sale from "../../Components/Mid-bar/Mid_Bar_Sale";
import Choose_what_to_solve from "./Choose_what_to_solve";
import People_Trust_us from "./People_Trust_us";

function Home() {
  // Set the document title to Ayurveda Hub when the component mounts
  document.title = "Ayurveda Hub";

  
  return (
    <div>
      <NavTop />
      <Mid_Bar_Sale text={'SALE!!'} />
      <ImageSlider />
      <Certificate />
      <Mid_Bar text={`Addressing the Root Cause <strong>Since 2020</strong> with <strong>4+ Years</strong> of In-house Expertise `} />
      <Choose_what_to_solve heading={'Choose what to solve'} subheading={'we’ve got you covered!'} />
      <Mid_Bar text={'Traditional remedies for modern life.'} />
      <People_Trust_us heading={'People Trust US because'} subheading={'we go one step ahead'} />
      <Mid_Bar text={'Pure and natural Ayurvedic products for your wellbeing.'} />
      <Mid_Bar text={'Experience the power of Ayurveda in your daily life.'} />
      <Footer />
    </div>
  );
}

export default Home;