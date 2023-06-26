import { render } from "@testing-library/react"
import { useContext } from "react"
import { DataProvider } from "../../../context/data"
import { SeasonsFilter } from "./SeasonsFilter"
import { HashRouter } from "react-router-dom"
import { MemoryRouter } from "react-router-dom"
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(),
}))

it("render filter", () => {
  // useContext.mockImplementation(() => ({
  //   seasons: [
  //     2008, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,
  //   ],
  // }))

  // useNavigate.mockImplementation(() => jest.fn());

  // render(
  //   <DataProvider>
  //     {/* <HashRouter> */}
  //     {/* <MemoryRouter> */}
  //       <SeasonsFilter />
  //     {/* </MemoryRouter> */}
  //     {/* </HashRouter> */}
  //   </DataProvider>
  // )
})