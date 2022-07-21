 import Header from "./header"
import Footer from "./footer"
// import Seo from "./seo"


const Layout = ({ children, seo }) => (
  <>
    <Header />
  
    <div>{children}</div>
   
    <Footer/>
  </>
)

export default Layout