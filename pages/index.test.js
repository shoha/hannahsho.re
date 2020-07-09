import React from "react"
import { mount } from "enzyme"
import Home from "./index"

describe("index page", () => {
  it("should have Head component", () => {
    const subject = mount(<Home />)

    expect(subject.find("Head")).toHaveLength(1)
  })
})
