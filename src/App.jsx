import CTA from "./components/CTA"
import CTA2 from "./components/CTA2"
import CTA3 from "./components/CTA3"
import Hero from "./components/Hero"
import LogoGrid from "./components/LogoGrid"
import { NavbarWithMegaMenu } from "./components/Navbar"
import Reviews from "./components/Reviews"

function App() {
  return (
    <>
      <NavbarWithMegaMenu />
      <Hero />
      <LogoGrid />
      <CTA />
      <CTA2 />
      {/* <CTA3 /> */}
      {/* <Features /> */}
      <Reviews />
    </>
  )
}

export default App

