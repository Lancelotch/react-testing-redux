import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import "../../setupTests";

const setUp = (props={})=> {
    const component = shallow(<Header/>);
    return component;
}

const findByTestAttr = (component, attr)=> {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}

describe("Header Component", () => {
   let component;
   beforeEach(()=>{
    component = setUp();
   })
  it("should renders without errors", () => {
    const wrapper = findByTestAttr(component, 'header');
    expect(wrapper.length).toBe(1);
  });

  it("should renders logo", () => {
    const wrapper = findByTestAttr(component, 'logoImg');
    expect(wrapper.length).toBe(1);
  });
});
