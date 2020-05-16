import React,{Component} from "react"
import {render} from "@testing-library/react"
import { HelloText } from "./HelloText"
//import { HelloText } from "./HelloText"
describe("Hello message test:",()=>{
    it("should render given message",()=>{
         const{getByText,debug}=render(<HelloText message="world"/>)
         getByText(/world/i)
    
    })
})