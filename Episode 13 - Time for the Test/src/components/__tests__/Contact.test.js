import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// to group tests we use describe

describe("Contact Us Page Case", () => {
  
    beforeAll(()=>{
      console.log("Before All");
    })

    beforeEach(()=>{
      console.log("Before Each");
    })

    afterAll(()=>{
      console.log("After All");
    });

    afterEach(()=>{
      console.log("After Each");
    });


    // we can write name as it  
  it("Should load contact us component", () => {
    render(<Contact />);
    // Different roles , which are defined by jest
    const heading = screen.getByRole("heading"); // rendered will be accessed by the screen
    // Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load submit text inside contact component", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");
    // Assertion
    expect(button).toBeInTheDocument();
  });

  it("Should load button inside contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");
    // Assertion
    expect(button).toBeInTheDocument();
  });

  test("Should load input inside contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Name");
    // Assertion
    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 input inside contact component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");
    // Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
