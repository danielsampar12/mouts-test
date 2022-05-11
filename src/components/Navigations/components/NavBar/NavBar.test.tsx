import { render, fireEvent, act } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context";

import { NavBar } from ".";
import { createMockRouter } from "../../../../tests/createMockRouter";

describe("NavBar", () => {
  it("Should navigate correctly", () => {
    const push = jest.fn();

    const { getByText } = render(
      <RouterContext.Provider value={createMockRouter({ push })}>
        <NavBar />
      </RouterContext.Provider>
    );

    expect(getByText("Home")).toBeInTheDocument();

    fireEvent.click(getByText("Home"));

    expect(push).toHaveBeenCalledWith("/");

    fireEvent.click(getByText("Favoritos"));

    expect(push).toHaveBeenCalledWith("/favorites");
  });
});
