
import { Outlet } from 'react-router-dom'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'

const PortfolioLayout = () => {
  return (
    <div className='portfolio-wrapper'>
      <div className='d-flex flex-column vh-100 '>
        <nav>
          <Navbar/>
        </nav>
        <main className='content flex-fill'>
          <Outlet/>
        </main>
        <footer>
          <Footer/>
        </footer>
      </div>
    </div>
  )
}

export default PortfolioLayout