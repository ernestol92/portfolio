import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const AboutMe = () => {
  const {t} = useTranslation();
  return (
    <div className='max-width h-100 d-flex pt-5 pb-5 fi flex-column align-items-center justify-content-between '>
      <img className='mb-4 profile-svg' src="./Icons/portrait.svg" alt="portrait of ernesto" />
      <div className='w-50 pt-4 d-flex flex-column text-center text-white'>
        <h2 className='space-grotesk'>{t("aboutPage.introductionTitle")}</h2>
        <p className='manrope p-1 lh-lg'>{t("aboutPage.introductionText")}
        </p>
      </div>


      <div className='w-50 pt-4 d-flex flex-column text-center text-white'>
        <h2 className='space-grotesk'>{t("aboutPage.techToolsTitle")}</h2>
        <ul className='manrope text-center mx-auto p-1 lh-lg' style={{ listStylePosition: 'inside', width: 'fit-content' }}>
          <li><strong>Frontend:</strong> HTML, CSS, React, ASP.NET core MVC.</li>
          <li><strong>Backend:</strong> .NET 8, Node.js (Express/NestJS).</li>
          <li><strong>Languages:</strong> JavaScript, TypeScript, C#</li>
          <li><strong>DBs:</strong> MySQL, SQL Server, PostgreSQL, IndexedDB.</li>
          <li><strong>Architecture:</strong> Layered architecture (UI, BLL, DAL), Microservices.</li>
          <li><strong>IDEs:</strong> VSCode, Visual Studio 2022, Cursor.</li>
          <li><strong>Tools:</strong> Scrum, Github, Git, Postman.</li>
        </ul>
      </div>


      <div className='w-50 pt-4 d-flex flex-column text-center text-white'>
        <h2 className='space-grotesk'>{t("aboutPage.traitsTitle")}</h2>
        <p className='manrope p-1 lh-lg'>{t("aboutPage.traitsText")}</p>
      </div>
      <a className='cv-btn' href={`${import.meta.env.BASE_URL}Cv/ErnestoCv.pdf`} target='_blank' rel='norefferer'>{t("aboutPage.cvButton")}</a>
      <Link to="/portfolio"><button className='btn-custom space-grotesk mb-5'>{t("aboutPage.portfolioButton")}</button></Link>

    </div>

  )
}

export default AboutMe