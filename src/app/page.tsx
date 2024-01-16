import Header from './../components/Header/Header';
import Hero from './../components/Hero/Hero';
import HeaderMob from './../components/Header/HeaderMob';
import Services from './../components/Services/Services';
import About from './../components/About/About';
import Work from './../components/Work/Work';
import Advantages from './../components/Advantages/Advantages';

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
    </main>
    </>
  )
}
