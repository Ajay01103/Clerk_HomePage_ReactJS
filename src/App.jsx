import CTA from "./components/CTA"
import CTA2 from "./components/CTA2"
import Hero from "./components/Hero"
import LogoGrid from "./components/LogoGrid"
import { NavbarWithMegaMenu } from "./components/Navbar"

function App() {
  return (
    <>
      <NavbarWithMegaMenu />
      <Hero />
      <LogoGrid />
      <CTA />
      <CTA2 />
      {/* <Features /> */}
    </>
  )
}

export default App

