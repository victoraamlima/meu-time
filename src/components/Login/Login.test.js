import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { Login } from "./Login"
import { HashRouter } from "react-router-dom"


// import { validFetch } from "../../validation/validation"

// jest.mock("../../validation/validation", () => ({
//   validFetch: jest.fn(),
// }))

// import fetchMock from "jest-fetch-mock"

// fetchMock.enableMocks()

// const mockNavigate = jest.fn()
// jest.mock("react-router-dom", () => ({
//   ...jest.requireActual("react-router-dom"),
//   useNavigate: () => mockNavigate,
// }))

import { useNavigate } from "react-router-dom"

describe("login", () => {
  it("render Login", () => {
    render(
      <HashRouter>
        <Login />
      </HashRouter>
    )

    const input = screen.getByPlaceholderText(/Digite a KEY/)
    const btn = screen.getByText(/Acessar MEU TIME/)

    expect(screen.getByText(/Login/)).toBeInTheDocument()
    expect(screen.getByText(/Para acessar/)).toBeInTheDocument()

    expect(input).toBeInTheDocument()
    expect(btn).toBeInTheDocument()
  })

  // it("Must not navigate home when clicking on BTN if key is invalid, ", () => {
  //   const { getByText } = render(
  //     <HashRouter>
  //       <Login />
  //     </HashRouter>
  //   )

  //   const btn = screen.getByText(/Acessar MEU TIME/)

  //   fireEvent.click(btn)

  //   expect(getByText(/Invalide KEY/)).toBeInTheDocument()
  //   // expect(mockNavigate).toHaveBeenCalledWith("/home")
  // })

  // it("must navigate home when clicking on BTN if key is valid", async () => {
  //   // useNavigate.mockReturnValue(mockNavigate)

  //   validFetch.mockReturnValue(true)

  //   fetch.mockResponseOnce(
  //     JSON.stringify({
  //       errors: [],
  //       response: [
  //         {
  //           name: "Albania",
  //           code: "AL",
  //           flag: "https://media-3.api-sports.io/flags/al.svg",
  //         },
  //         {
  //           name: "Algeria",
  //           code: "DZ",
  //           flag: "https://media-3.api-sports.io/flags/dz.svg",
  //         },
  //       ],
  //     })
  //   )

  //   render(
  //     <HashRouter>
  //       <Login />
  //     </HashRouter>
  //   )

  //   // console.log(JSON.parse(fetch.mockResponseOnce))

  //   const btn = screen.getByText(/Acessar MEU TIME/)
  //   fireEvent.click(btn)

  //   await waitFor(() => expect(mockNavigate).toHaveBeenCalledWith("/home"))
  // })
})


