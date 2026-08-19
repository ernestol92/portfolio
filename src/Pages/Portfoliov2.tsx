import { useTranslation } from "react-i18next";

const Portfoliov2 = () => {
  const { t } = useTranslation();
  return (
    <div className="max-width">
      <div className="portfolio-intro-wrapper">
        <h1 className="portfolio-title">Portfolio</h1>
        <p className="portfolio-bread lh-lg">
          Jag tycker om att ständigt bredda mina kunskaper genom att bygga,
          testa och lära mig nya tekniker. Samtidigt försöker jag undvika att
          sprida mitt fokus för tunt och lägger därför extra tid på att
          utvecklas inom de områden jag trivs bäst med. Mitt huvudsakliga fokus
          ligger på backendutveckling, API:er, databaser och .NET, men jag
          tycker även om att förstå hur frontend och andra delar av en
          applikation hänger ihop. Genom egna projekt och tidigare erfarenheter
          försöker jag hela tiden omsätta teori till praktisk erfarenhet. Jag
          tror på att lära genom att faktiskt bygga saker, göra misstag och
          förstå varför en lösning fungerar. På den här sidan samlar jag några
          av mina projekt och det jag arbetar med för att fortsätta utvecklas
          som utvecklare.
        </p>
      </div>

      <div className="project-wrapper">
        <div className="project-typography">
          <h2 className="project-h2">{t("portfolioPage.rehabAppTitle")}</h2>
          <p className="project-bread">
            {t("portfolioPage.rehabAppDescription")}
          </p>
          {/* <a className="mx-auto" href="https://ernestol92.github.io/GymCoach/">
            <button className="btn-custom-small space-grotesk m-4">
              {t("portfolioPage.visitButton")}
            </button>
          </a> */}
        </div>

        <div className="project-img-container">
          <img className="project-img" src="Icons/Rehab.png" alt="" />
        </div>
      </div>

      <div className="project-wrapper-reverse">
        <div className="project-typography">
          <h2 className="project-h2">{t("portfolioPage.gymCoachTitle")}</h2>
          <p className="project-bread">
            {t("portfolioPage.gymCoachDescription")}
          </p>
          <a className="mx-auto" href="https://ernestol92.github.io/GymCoach/">
            <button className="btn-custom-small space-grotesk m-4">
              {t("portfolioPage.visitButton")}
            </button>
          </a>
        </div>

        <div className="project-img-container">
          <img className="project-img" src="Icons/GymCoach.png" alt="" />
        </div>
      </div>

      <div className="project-wrapper">
        <div className="project-typography">
          <h2 className="project-h2">{t("portfolioPage.portfolioTitle")}</h2>
          <p className="project-bread">
            {t("portfolioPage.portfolioDescription")}
          </p>
          <a className="mx-auto" href="www.ernestolinares.site">
            <button className="btn-custom-small space-grotesk m-4">
              {t("portfolioPage.visitButton")}
            </button>
          </a>
        </div>

        <div className="project-img-container">
          <img className="project-img" src="Icons/portfolio.png" alt="" />
        </div>
      </div>

      <div className="project-wrapper-reverse">
        <div className="project-typography">
          <h2 className="project-h2">
            {t("portfolioPage.workerServiceTitle")}
          </h2>
          <p className="project-bread">{t("portfolioPage.workerService")}</p>
          {/* <a className="mx-auto" href="">
            <button className="btn-custom-small space-grotesk m-4">
              {t("portfolioPage.visitButton")}
            </button>
          </a> */}
        </div>

        <div className="project-img-container">
          <img
            className="project-img"
            src="Icons/PrinterSimulator.png"
            alt=""
          />
        </div>
      </div>

      <div className="project-wrapper">
        <div className="project-typography">
          <h2 className="project-h2">Unity Game Developing</h2>
          <p className="project-bread">
            Ett personligt hobbyprojekt där jag utvecklar ett eget 2D-spel i
            Unitys spelmotor och utforskar spelutveckling. Spelets
            funktionalitet utvecklas i C# med Visual Studio, samtidigt som jag
            arbetar med bland annat spelmekanik, rörelse, interaktioner och
            andra centrala delar av spelet. Projektet ger mig möjlighet att
            bredda mina kunskaper inom utveckling och samtidigt fördjupa mig i
            C# genom ett område utanför traditionell webbutveckling.
          </p>
          {/* <a className="mx-auto" href="">
            <button className="btn-custom-small space-grotesk m-4">
              {t("portfolioPage.visitButton")}
            </button>
          </a> */}
        </div>

        <div className="project-img-container">
          <img className="project-img" src="Icons/unity-6.png" alt="" />
        </div>
      </div>

      <div className="project-wrapper-reverse">
        <div className="project-typography">
          <h2 className="project-h2">Dev Journal</h2>
          <p className="project-bread">
            En personlig utvecklingsblogg där jag dokumenterar mina projekt, vad
            jag lär mig och de problem jag stöter på under min utveckling.
            Plattformen byggs från grunden med ASP.NET Core och GraphQL i
            backend samt Next.js och Tailwind CSS i frontend. Inlägg kan
            kategoriseras och taggas efter bland annat teknik och ämnesområde,
            vilket gör det enkelt att hitta inlägg om specifika tekniker.
            Projektet ger mig samtidigt möjlighet att fördjupa mina kunskaper
            inom GraphQL, MongoDB, Next.js och modern applikationsarkitektur.
          </p>
          {/* <a className="mx-auto" href="">
            <button className="btn-custom-small space-grotesk m-4">
              {t("portfolioPage.visitButton")}
            </button>
          </a> */}
        </div>

        <div className="project-img-container">
          <img
            className="project-img"
            src="Icons/website-construction.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Portfoliov2;
