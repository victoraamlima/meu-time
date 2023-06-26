// import logo from "./logo.svg"
import "./App.css"
import { RouterProvider } from "react-router-dom"
import { router } from "./pages/routes"
import { GlobalStyle } from "./style/GlobalStyle"
import { DataProvider } from "./context/data"

function App() {
  return (
    <DataProvider>
      <GlobalStyle />
      <RouterProvider router={router} />
    </DataProvider>
  )
}

export default App
