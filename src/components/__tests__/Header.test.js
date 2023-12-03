import { fireEvent, render, screen } from "@testing-library/react";

import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";

describe("test header component", () => {
  //   it("should render header component with a header", () => {
  //     render(
  //       <BrowserRouter>
  //         <Provider store={appStore}>
  //           <Header />
  //         </Provider>
  //       </BrowserRouter>
  //     );

  //     const header = screen.getByRole("ul", { name: "header" });
  //     expect(header).toBeInTheDocument();
  //   });

  it("should render header component with a cart", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cart = screen.getByText("Cart (0)");
    expect(cart).toBeInTheDocument();

    // using regex
    const cart2 = screen.getByText(/cart/i);
    expect(cart2).toBeInTheDocument();
  });

  it("should click event handler", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const navMenu = screen.getByText(/Contact/i);
    fireEvent.click(navMenu);
    // expect(cart).toBeInTheDocument();
  });
});
