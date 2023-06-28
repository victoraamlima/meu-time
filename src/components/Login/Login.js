import { useNavigate } from "react-router-dom"
import { LoginBTN, LoginCard } from "./StyledLogin"
import { useContext, useState } from "react"
import { getCountries } from "../../services/services"
import { DataContext } from "../../context/data"
import { validFetch } from "../../validation/validation"

const Login = () => {
  const { setKey, setCountries, setSelectedCountry } = useContext(DataContext)

  const [temporaryKey, setTemporaryKey] = useState("")
  const [invalideKey, setInvalideKey] = useState(false)

  let navigate = useNavigate()

  const handleKey = (e) => {
    setTemporaryKey(e.target.value)
  }

  const handleKeyUp = (e) => {
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if (isEnterKeyPressed) {
      return verifyTemporaryKey()
    }
  }

  const fetchCountriesData = async () => {
    const LocalCountriesData = await getCountries(temporaryKey)
    return LocalCountriesData
  }

  const verifyTemporaryKey = () => {
    if (temporaryKey.length === 0) {
      setInvalideKey(true)
      return
    }

    fetchCountriesData()
      .then((data) => {
        if (validFetch(data.errors)) {
          data.response.sort((a, b) =>
            a.name.localeCompare(b.name)
          )
          setCountries(data.response)
          setSelectedCountry(data.response[0])
          setKey(temporaryKey)

          setInvalideKey(false)
          navigate("home")
        } else {
          setInvalideKey(true)
        }
      })
      .catch((err) => {
        alert(err.message)
      })
  }

  return (
    <LoginCard>
      <h1>MEU TIME</h1>
      <h2>Login</h2>
      <p>
        Para acessar o MEU TIME, comece fazendo um cadastro no site{" "}
        <a href="https://www.api-football.com/documentation-v3#section/Authentication/API-SPORTS-Account">
          API FOOTBALL
        </a>
        . Depois de concluir o cadastro, faça o login e vá para a seção API's.
        Navegue até a opção Football e clique em Live Demo. Lá, você encontrará
        sua KEY para acessar o MEU TIME.
      </p>
      <input
        type="text"
        name="key"
        placeholder="Digite a KEY"
        onChange={handleKey}
        onKeyUp={handleKeyUp}
      />
      {invalideKey && <span>Invalide KEY</span>}
      <LoginBTN onClick={verifyTemporaryKey}>Acessar MEU TIME</LoginBTN>
    </LoginCard>
  )
}

export { Login }
