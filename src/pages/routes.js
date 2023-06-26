import { createHashRouter } from "react-router-dom"
import { LoginPage } from "./login-page/login-page"
import { HomePage } from "./HomePage/home-page"

const router = createHashRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
])

export { router }
