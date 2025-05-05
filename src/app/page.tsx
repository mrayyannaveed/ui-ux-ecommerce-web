import Hero_section from "./components/hero_section";
import New_arrivals from "./components/new_arrivals";
import Sponsors from "./components/sponsors";
import Top_selling from "./components/top_selling";

export default function Home() {
  return (
    <div>
      <Hero_section/>
      <Sponsors/>
      <New_arrivals/>
      <Top_selling/>
    </div>
  )
}