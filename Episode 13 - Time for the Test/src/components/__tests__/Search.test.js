import { render, screen, act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Search Res List for Burger text input", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");
  // console.log(searchInput);

  fireEvent.change(searchInput, { target: { value: "burger" } });

  fireEvent.click(searchBtn);

  // Screen should load 4 cards

  const cardsAfterSearch = screen.getAllByTestId("resCards");

  expect(cardsAfterSearch.length).toBe(4);
});

it("Should Filter Top Rated Restaurants", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeFilter = screen.getAllByTestId("resCard");

  expect(cardsBeforeFilter.length).toBe(20);

  
  const topRatedBtn = screen.getByRole("button",{name:"Top Rated Restaurants"});

  fireEvent.click(topRatedBtn);


  const cardsAfterFilter = screen.getAllByTestId("resCard");

  expect(cardsAfterFilter.length).toBe(1);
});
