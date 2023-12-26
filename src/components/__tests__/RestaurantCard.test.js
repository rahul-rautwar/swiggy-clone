import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
describe("render", () => {
  it("test for prop passing", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);
    const name = screen.getByText("McDonald's");
    expect(name).toBeInTheDocument();
  });

  it("should render Restro card with promoted label", () => {
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    render(<RestaurantCardPromoted resData={MOCK_DATA} />);
    // render(<withPromotedLabel resData={MOCK_DATA} />);
    const name = screen.getByText("Promoted");
    expect(name).toBeDefined();
  });
});
