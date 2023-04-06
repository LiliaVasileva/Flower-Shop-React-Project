import {render, screen} from "@testing-library/react";
import Item from "./Item";
import { BrowserRouter } from "react-router-dom";

describe("Item Component Testing", () => {
    const name = "My Test Title";

    render(<BrowserRouter>
        <Item name={name} />
    </BrowserRouter>);

    expect(screen.queryByText(name)).toBeInTheDocument()
});