import { useTranslation } from 'react-i18next'

const Contact = () => {
  const {t} = useTranslation();
    const successDiv = document.querySelector("#success-div")
    const handleSubmit = ()=>{
      successDiv?.classList.remove("display-none")
    }

  return (
    <div className='px-4 position-relative other-bg h-100 d-flex flex-column align-items-center gap-3'>

        <p className='w-75 text-center text-white space-grotesk my-5'>{t("contactPage.thanksText")}</p>
        <a className='text-white space-grotesk text-decoration-none' href="mailto:ernestol92@hotmail.com"><img src="Icons/email.png" alt="" /> Ernestol92@hotmail.com</a>
        <a className='text-white space-grotesk text-decoration-none' href='https://wa.me/46767119022' ><img src="Icons/whatsapp.png" alt="" /> +55 (82) 99660-6790 <span className=" px-4 d-block">+46 076-711 90 22</span></a>
        <a className='text-white space-grotesk text-decoration-none' href="https://www.linkedin.com/in/ernesto-linares-64a506325/"><img src="Icons/linkedin.png" alt="" /> LinkedIn</a>
        <a className='text-white space-grotesk text-decoration-none' href="https://www.instagram.com/linares_ernesto/"><img src="Icons/insta.png" alt="" /> linares_ernesto</a>
        
        


      <div className='w-75 my-5 h-auto d-flex flex-column align-items-center'>
        <h1 className='space-grotesk text-white'>{t("contactPage.contactFormTitle")}</h1>
        <form onSubmit={handleSubmit} className='d-flex flex-column gap-4' action="https://formsubmit.co/a365f97cb28bbb2af9733dc1cbec195f" method="POST">
          <div className='d-flex gap-4 '>
            <input className='form-control box-shadow' type="text" name='name' id='name' placeholder={t("contactPage.namePlaceholder")}/>
            <input className='form-control box-shadow' type='email' name='email' id='email' placeholder={t("contactPage.emailPlaceholder")}/>
          </div>
          <textarea className='form-control box-shadow' style={{height: "250px"}} name="textarea" id="textarea" placeholder={t("contactPage.messagePlaceholder")}></textarea>
          <button className='space-grotesk btn-custom-small' type='submit'>{t("contactPage.submitButton")}</button>
        </form>
      </div>
      <div id="success-div" className="display-none success-div box-shadow accent-color-bg w-auto h-auto text-center rounded-3">
        <p className="text-white m-3 fw-bold space-grotesk fs-5">{t("contactPage.successMessage")}</p>
      </div>
    </div>
  )
}

export default Contact