import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import ReastaurantCard from "../RestaurantCard"

// This is unit testing of RestaurantCard wheather its loaded or not

it("Should render restarant cards ",()=>{
    render(<ReastaurantCard resData={MOCK_DATA}/>)

    const name = screen.getByText("Burger King")

    expect(name).toBeInTheDocument();
})

// it("should render restaurantCard Component with Promoted Label",()=>{
// test with promoted lable ( Higher Order COmponent)
// });
