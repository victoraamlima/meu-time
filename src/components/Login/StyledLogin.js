import styled from "styled-components"

const LoginCard = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 20px;
  gap: 15px;
  margin: 15px;
  background: #c5d932;

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 20px;
  }

  p {
    font-size: 15px;
  }
`
const LoginBTN = styled.button`
  unset: all;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 10px;
  font-size: 15px;
`
export { LoginCard, LoginBTN }
