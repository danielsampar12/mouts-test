import { render, fireEvent, act } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { Pagination } from ".";
import { createMockRouter } from "../../../tests/createMockRouter";

describe("PaginationButton", () => {
  it("Should navigate to next page correctly", () => {
    const push = jest.fn();

    const { getByTestId } = render(
      <RouterContext.Provider value={createMockRouter({ push })}>
        <Pagination page={0} />
      </RouterContext.Provider>
    );

    expect(getByTestId("page").textContent).toEqual("1");

    fireEvent.click(getByTestId("next-button"));

    expect(push).toHaveBeenCalledWith("/?page=1");
  });

  it("Should navigate previous page correctly", () => {
    const push = jest.fn();

    const { getByTestId } = render(
      <RouterContext.Provider value={createMockRouter({ push })}>
        <Pagination page={1} />
      </RouterContext.Provider>
    );

    expect(getByTestId("page").textContent).toEqual("2");

    fireEvent.click(getByTestId("previous-button"));

    expect(push).toHaveBeenCalledWith("/?page=0");
  });

  it("Should not render previous button if page is equal to 0", () => {
    const push = jest.fn();

    const { getByTestId } = render(
      <RouterContext.Provider value={createMockRouter({ push })}>
        <Pagination page={0} />
      </RouterContext.Provider>
    );

    expect(() => getByTestId("previous-button")).toThrow(
      "Unable to find an element"
    );

    expect(getByTestId("page").textContent).toEqual("1");
  });
});
