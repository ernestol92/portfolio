import { useTranslation } from "react-i18next"


const LanguageSwitch = () => {
    const { i18n } = useTranslation()
  return (
    <div className="d-flex justify-content-end gap-3 px-2">
      <button className="language-btns" onClick={() => i18n.changeLanguage('en')}>🇬🇧 English</button>
      <button className="language-btns" onClick={() => i18n.changeLanguage('sv')}>🇸🇪 Svenska</button>
      <button className="language-btns" onClick={() => i18n.changeLanguage('pt')}>🇧🇷 Português</button>
    </div>
  )
}

export default LanguageSwitch