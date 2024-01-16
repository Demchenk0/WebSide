import Header from './../components/Header/Header';
import Hero from './../components/Hero/Hero';
import HeaderMob from './../components/Header/HeaderMob';
import Services from './../components/Services/Services';
import About from './../components/About/About';
import Work from './../components/Work/Work';
import Advantages from './../components/Advantages/Advantages';
import Form from './../components/Form/Form';
import Review from './../components/Review/Review';
import Faq from './../components/Faq/Faq';

export default function Home() {
  return (
    <>
    <HeaderMob/>
      {/* <Header /> */}
    <main >
      <Hero/>
      <Services />
      <About /> 
      <Work />
      <Advantages />
      <Form />
      <Review/>
      <Faq/>
    </main>
    </>
  )
}
