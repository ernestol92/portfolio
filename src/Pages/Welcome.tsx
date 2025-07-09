

import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const Welcome = () => {
  const { t, i18n } = useTranslation()

  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [btnText, setBtnText] = useState("")

  const [typoText, setTypoText] = useState("")
  const [fullText, setFullText] = useState("")

  useEffect(() => {
    setText("")
    setIndex(0)
    setBtnText("")
    setTypoText(t("welcomePage.typo"))
    setFullText(t("welcomePage.intro"))
  }, [i18n.language, t])

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    const linkAboutBtn = document.querySelector("#linkToAboutme")

    if (index === 0) {
      linkAboutBtn?.classList.add("display-none")
    }

    if (index > typoText.length + 7 && text.length === fullText.length) {
      setBtnText(t("welcomePage.aboutMeButton"))
      linkAboutBtn?.classList.remove("display-none")
      return
    }

    if (index < typoText.length) {
      timeout = setTimeout(() => {
        setText(typoText.slice(0, index + 1))
        setIndex(index + 1)
      }, 40)
    } else if (index === typoText.length) {
      timeout = setTimeout(() => setIndex(index + 1), 1000)
    } else if (index < typoText.length + 7) {
      timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1))
        setIndex(index + 1)
      }, 100)
    } else if (text.length < fullText.length) {
      timeout = setTimeout(() => {
        const nextChar = fullText[text.length]
        setText((prev) => prev + nextChar)
        setIndex(index + 1)
      }, 40)
    }

    return () => clearTimeout(timeout)
  }, [index, text, typoText, fullText, t])

  return (
    <div className="welcome-bg welcome-text space-grotesk fw-light lh-lg h-100 text-center align-content-center p-5 text-white">
      <span className="d-block mb-5">{text}</span>
      <Link id="linkToAboutme" className="display-none" to="/aboutme">
        <button className="btn-custom mt-5 space-grotesk">{btnText}</button>
      </Link>
    </div>
  )
}

export default Welcome
