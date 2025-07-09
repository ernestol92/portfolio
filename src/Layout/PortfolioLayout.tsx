
import { Outlet } from 'react-router-dom'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'

const PortfolioLayout = () => {
  return (
    <div className='d-flex flex-column vh-100'>
      <nav>
        <Navbar/>
      </nav>
      <main className=' flex-fill'>
        <Outlet/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default PortfolioLayout