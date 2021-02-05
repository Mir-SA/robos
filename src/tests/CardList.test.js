import React from "react";
import { shallow } from "enzyme";
import CardList from "../components/CardList";

it("expect to render CardList component", () => {
  const mockRobots = [
    {
      id: 1,
      name: "Amitabh Bacchan",
      username: "BigB",
      email: "Bigb@yahoo.com",
    },
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
