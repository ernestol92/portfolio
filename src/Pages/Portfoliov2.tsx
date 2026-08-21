import { useTranslation } from "react-i18next";

const Portfoliov2 = () => {
  const { t } = useTranslation();
  return (
    <div className="max-width">
      <div className="d-flex flex-column align-items-center">
        <h1 className="text-white mt-4">Portfolio</h1>
        <p className="text-white text-center mt-4 w-75 max-w-75 lh-lg portfolio-pre-line">
          {t("portfolioPage.portfolioIntro")}
        </p>
      </div>

      <div className="project-wrapper d-flex rounded-4 mt-4 w-75 mb-4 mx-auto flex-column flex-md-row">
        <div className="px-4 pt-4 p-md-4 d-flex flex-column gap-2 w-100 w-md-50">
          <h2 className="text-white text-center">
            {t("portfolioPage.rehabAppTitle")}
          </h2>
          <p className="project-bread text-white text-center fs-6 mb-0 px-2">
            {t("portfolioPage.rehabAppDescription")}
          </p>
          {/* <a className="mx-auto" href="https://ernestol92.github.io/GymCoach/">
            <button className="btn-custom-small space-grotesk m-4">
              {t("portfolioPage.visitButton")}
            </button>
          </a> */}
        </div>

        <div className="project-img-container w-100 w-md-50 px-4 px-md-4">
          <img className="project-img" src="Icons/Rehab.png" alt="" />
        </div>
      </div>

      <div className="project-wrapper d-flex rounded-4 mt-4 w-75 mb-4 mx-auto flex-column flex-md-row-reverse ">
        <div className="px-4 pt-4 p-md-4 d-flex flex-column gap-2 w-100 w-md-50">
          <h2 className="text-white text-center">
            {t("portfolioPage.gymCoachTitle")}
          </h2>
          <p className="project-bread text-white text-center fs-6 mb-0 px-2">
            {t("portfolioPage.gymCoachDescription")}
          </p>
          <a className="mx-auto" href="https://ernestol92.github.io/GymCoach/">
            <button className="btn-custom-small space-grotesk m-4">
              {t("portfolioPage.visitButton")}
            </button>
          </a>
        </div>

        <div className="project-img-container w-100 w-md-50 px-4 px-md-4">
          <img className="project-img" src="Icons/GymCoach.png" alt="" />
        </div>
      </div>

      <div className="project-wrapper d-flex rounded-4 mt-4 w-75 mb-4 mx-auto flex-column flex-md-row">
        <div className="px-4 pt-4 p-md-4 d-flex flex-column gap-2 w-100 w-md-50">
          <h2 className="text-white text-center">
            {t("portfolioPage.portfolioTitle")}
          </h2>
          <p className="project-bread text-white text-center fs-6 mb-0 px-2">
            {t("portfolioPage.portfolioDescription")}
          </p>
          <a className="mx-auto" href="/">
            <button className="btn-custom-small space-grotesk m-4">
              {t("portfolioPage.visitButton")}
            </button>
          </a>
        </div>

        <div className="project-img-container w-100 w-md-50 px-4 px-md-4">
          <img className="project-img" src="Icons/portfolio.png" alt="" />
        </div>
      </div>

      <div className="project-wrapper d-flex rounded-4 mt-4 w-75 mb-4 mx-auto flex-column flex-md-row-reverse">
        <div className="px-4 pt-4 p-md-4 d-flex flex-column gap-2 w-100 w-md-50">
          <h2 className="text-white text-center">
            {t("portfolioPage.workerServiceTitle")}
          </h2>
          <p className="project-bread text-white text-center fs-6 mb-0 px-2">
            {t("portfolioPage.workerService")}
          </p>
          {/* <a className="mx-auto" href="">
            <button className="btn-custom-small space-grotesk m-4">
              {t("portfolioPage.visitButton")}
            </button>
          </a> */}
        </div>

        <div className="project-img-container w-100 w-md-50 px-4 px-md-4">
          <img
            className="project-img"
            src="Icons/PrinterSimulator.png"
            alt=""
          />
        </div>
      </div>

      <div className="project-wrapper d-flex rounded-4 mt-4 w-75 mb-4 mx-auto flex-column flex-md-row">
        <div className="px-4 pt-4 p-md-4 d-flex flex-column gap-2 w-100 w-md-50">
          <h2 className="text-white text-center">
            {t("portfolioPage.gameTitle")}
          </h2>
          <p className="project-bread text-white text-center fs-6 mb-0 px-2">
            {t("portfolioPage.gameDescription")}
          </p>
          {/* <a className="mx-auto" href="">
            <button className="btn-custom-small space-grotesk m-4">
              {t("portfolioPage.visitButton")}
            </button>
          </a> */}
        </div>

        <div className="project-img-container w-100 w-md-50 px-4 px-md-4">
          <img className="project-img" src="Icons/unity-6.png" alt="" />
        </div>
      </div>

      <div className="project-wrapper d-flex rounded-4 mt-4 w-75 mb-4 mx-auto flex-column flex-md-row-reverse">
        <div className="px-4 pt-4 p-md-4 d-flex flex-column gap-2 w-100 w-md-50">
          <h2 className="text-white text-center">
            {t("portfolioPage.devJournalTitle")}
          </h2>
          <p className="project-bread text-white text-center fs-6 mb-0 px-2">
            {t("portfolioPage.devJournalDescription")}
          </p>
          {/* <a className="mx-auto" href="">
            <button className="btn-custom-small space-grotesk m-4">
              {t("portfolioPage.visitButton")}
            </button>
          </a> */}
        </div>

        <div className="project-img-container w-100 w-md-50 px-4 px-md-4">
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
