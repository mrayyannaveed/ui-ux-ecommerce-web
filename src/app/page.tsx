import Dress_style from "./components/dress_style";
import Hero_section from "./components/hero_section";
import Sponsors from "./components/sponsors";
import Testimonals from "./components/testimonals";
import Product from "./product/page";

export default function Home() {
  return (
    <div>
      <Hero_section/>
      <Sponsors/>
      <Product/>
      <Dress_style/>
      <Testimonals/>
    </div>
  )
}