import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import RestaurantMenu from '../RestaurantMenu';
import MOCK_DATA_NAME from '../mocks/mockResMenu.json';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import { BrowserRouter } from 'react-router-dom';
import Header from "../Header";
import "@testing-library/jest-dom";

import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  });
});

it('should load Restauarant Menu component', async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
          <RestaurantMenu />
          <Cart/>
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText('London Doners (7)');
  fireEvent.click(accordionHeader);

    
  expect(screen.getAllByTestId('foodItems').length).toBe(4);


 const addBtns = screen.getAllByRole("button",{name:"Add +"});

 fireEvent.click(addBtns[0]);

 expect(screen.getByText(/Cart - (1 items)/).toBeInTheDocument());


 expect(screen.getAllByTestId("foodItems").length.toBe(5));


fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}));

expect(screen.getAllByTextId("foodItems").length.toBe(5));



expect(screen.getByText("Cart is empty")).toBeInTheDocument();
});
