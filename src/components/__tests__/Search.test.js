import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/restroListMock.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

// beforeEach(() => {
//   jest.spyOn(global, "fetch").mockResolvedValue({
//     json: jest.fn().mockResolvedValue(MOCK_DATA),
//   });
// });

// afterEach(() => {
//   jest.restoreAllMocks();
// });

describe("when", () => {
  it("should render body component", async () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const searchBtn = screen.getByRole("button", {
      name: "Search",
    });
    expect(searchBtn).toBeInTheDocument();

    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, { target: { value: "Burger" } });
    fireEvent.click(searchBtn);
    // console.log(screen);
    // const cards = screen.getAllByTestId("restCard");
    // expect(cards.length).toBe(1);
  });
});
