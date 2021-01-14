import React from "react"
import ReactDOM from "react-dom"
import App from "../App"

// Mocks render method as a jest function to use 'toHaveBeenCalledWtih'
jest.mock("react-dom", () => ({ render: jest.fn() }))

test("renders with App and root div", () => {

    // Add div element with id = root, so that 'document.getElementById('root')' in index.js is not null
    const root = document.createElement("div")
    root.id = "root"
    document.body.appendChild(root)

    // Requires index.js to call render method
    require("../index.js")

    // Expect the render method to be called with App component and HTML element with id = root
    expect(ReactDOM.render).toHaveBeenCalledWith(<React.StrictMode><App /></React.StrictMode>, root)
})
