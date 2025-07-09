import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Portfolio = () => {
const {t} = useTranslation();

  return (
    <div className='h-100 other-bg'>
      <div className='portfolio-grid py-5 h-100'>
        <div className='custom-card'>
          <div className='custom-card-header space-grotesk'>{t("portfolioPage.ventixeTitle")}</div>
          <img className='custom-card-img' src="./Icons/Ventixe.png" alt="" />
          <div className='position-relative'>
            <p className='custom-card-description'>{t("portfolioPage.ventixeDescription")}
            </p>

          </div>
          <a className='mx-auto' href='https://brave-bush-02f3d5103.2.azurestaticapps.net/'>
            <button className='btn-custom-small space-grotesk m-4'>{t("portfolioPage.visitButton")}</button>
          </a>
        </div>

        <div className='custom-card'>
          <div className='custom-card-header space-grotesk'>{t("portfolioPage.alphaTitle")}</div>
            <img className='custom-card-img' src="./Icons/ALPHA.png" alt="" />
            <div className='position-relative'>
              <p className='custom-card-description'>{t("portfolioPage.alphaDescription")}
            </p>

        </div>
          <a className='mx-auto' href='https://github.com/ernestol92/ASP.NET.MVC'>
            <button className='btn-custom-small space-grotesk m-4'>{t("portfolioPage.visitButton")}</button>
          </a>
        </div>

        <div className='custom-card'>
          <div className='custom-card-header space-grotesk'>{t("portfolioPage.portfolioTitle")}</div>
          <img className='custom-card-img' src="./Icons/portfolio.png" alt="" />
          <div className='position-relative'>
            <p className='custom-card-description'>{t("portfolioPage.portfolioDescription")}</p>
          </div>
          <Link className='mx-auto' to="/">
            <button className='btn-custom-small space-grotesk m-4'>{t("portfolioPage.visitButton")}</button>
          </Link>
        </div>
      </div>

    </div>
    
  )
}

export default Portfolio