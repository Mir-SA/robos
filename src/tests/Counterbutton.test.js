import React from "react";
import { shallow } from "enzyme";
import Counterbutton from "../components/Counterbutton";

it("expect to render Counterbutton component", () => {
  const mockColor = "red";
  expect(shallow(<Counterbutton color={mockColor} />)).toMatchSnapshot();
});

it("correctly increments the counter", () => {
  const mockColor = "red";
  const wrapper = shallow(<Counterbutton color={mockColor} />);

  wrapper.find('[id="counter"]').simulate("click");
  wrapper.find('[id="counter"]').simulate("keypress");
  expect(wrapper.state()).toEqual({ count: 1 });
  expect(wrapper.props().color).toEqual("red");
});
