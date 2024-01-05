import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import appStore from "../../utils/appStore";
import {Provider} from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
// It will fail bcoz react-redux it does not understand useSelector
// test("Should render login button in Header",()=>{
//     render(<Header/>);

// })


// We used link that is comming from router-dom
// test("Should render login button in Header",()=>{

//     render(
//     <Provider store={appStore}>
//             <Header/>
//     </Provider>
//     );

// })

it("Should render header component with a login button",()=>{
    render(
        <BrowserRouter>    
    <Provider store={appStore}>
            <Header/>
    </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button",{name:"Login"}); // Good way to find the login button
    // const loginButton = screen.getByText("Login"); 

    expect(loginButton).toBeInTheDocument();
})

it("Should render header component with cart items",()=>{
    render(
        <BrowserRouter>    
    <Provider store={appStore}>
            <Header/>
    </Provider>
        </BrowserRouter>
    );

    
    const cartItems = screen.getByText(/Cart/);  //regex

    expect(cartItems).toBeInTheDocument();
})

it("Should Change login button to logout on CLick",()=>{
    render(
        <BrowserRouter>    
    <Provider store={appStore}>
            <Header/>
    </Provider>
        </BrowserRouter>
    );

    
    const loginButton = screen.getByRole("button",{name:"Login"});  //regex


    fireEvent.click(loginButton);
    
    const logoutButton = screen.getByRole("button",{name:"Logout"});

    expect(logoutButton).toBeInTheDocument();
})


