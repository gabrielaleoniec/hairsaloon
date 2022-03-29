import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Salon from "../../../../src/components/features/Salon/Salon";
import salon from "../../../mock_data/salon.json";

const props = {
  salon,
};

jest.mock("moment", () => () => ({ format: () => "Thu" }));

describe("Empty salon", () => {
  beforeEach(() => {
    render(<Salon salon={null} />);
  });
  it("does not render salon when the data is null", () => {
    expect(screen.queryByText("Sax & Fön")).toEqual(null);
  });
});

describe("Salon component with correct salon data", () => {
  beforeEach(() => {
    render(<Salon {...props} />);
  });

  it("renders header with proper title", () => {
    expect(screen.getByText(/Sax & Fön/i)).toBeInTheDocument();
  });
  it("renders stars with proper rating", () => {
    expect(screen.getByTitle("Rating is 5 out of 5")).toBeInTheDocument();
  });
  it("renders two tab buttons with name Info and Schema", () => {
    expect(screen.getByTestId("info")).toBeInTheDocument();
    expect(screen.getByTestId("schema")).toBeInTheDocument();
  });
  it("renders Info tab content on info button click", () => {
    const button = screen.getByTestId("info");
    fireEvent.click(button);
    expect(
      screen.getByText("12220 Cassin Knoll South Rod, IN 07157")
    ).toBeInTheDocument();
    expect(screen.getByText(salon.phone)).toBeInTheDocument();
    expect(screen.getByText(salon.website)).toBeInTheDocument();
    expect(screen.getByText(salon.website)).toBeInTheDocument();
    expect(screen.getByTestId("description")).toHaveTextContent(
      salon.description
    );
  });

  it("renders Schema tab content on schema button click", () => {
    const button = screen.getByTestId("schema");
    fireEvent.click(button);
    expect(screen.queryAllByText("Schema")).toHaveLength(2);
    expect(
      screen.queryByText("12220 Cassin Knoll South Rod, IN 07157")
    ).not.toBeInTheDocument();
  });
  it("renders OpenHours with correct text", () => {
    // Moment has been mocked to return Thu as date format
    expect(screen.getByText("Öppet till 20:00 idag")).toBeInTheDocument();
  });
});
