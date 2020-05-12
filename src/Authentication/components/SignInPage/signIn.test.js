import React from "react";
import { render } from "@testing-library/react";
import SignPage from ".";
describe("Sign IN page TestCases:",()=>{
   it("UserName Test Case:",()=>{
    const username="veera";
    const{getByPlaceholderText,debug}=render(<SignPage username={username}/>);
    const usernamePlaceHolder=getByPlaceholderText("UserName");
    expect(usernamePlaceHolder.value).toBe(username);
   });
   it("Password Test Case:",()=>{
      const password="1234";
      const{getByPlaceholderText,debug}=render(<SignPage password={password}/>);
      const passwordPlaceHolder=getByPlaceholderText("Password");
      expect(passwordPlaceHolder.value).toBe(password);
     });
     it("Error message Test Case:",()=>{
      const errorMessage="Network error";
      const{getByText,debug}=render(<SignPage errorMessage={errorMessage}/>);
    getByText(/Network error/i);
    //  expect(passwordPlaceHolder.value).toBe(password);
     });
     it("Error message Test Case:",()=>{
      const userMessage="Please enter UserName";
      const{getByText,debug}=render(<SignPage errorMessage={userMessage}/>);
    getByText(/Please enter UserName/i);
    //  expect(passwordPlaceHolder.value).toBe(password);
     });
     it("Error message Test Case:",()=>{
      const passwordMessage="Please enter Password";
      const{getByText,debug}=render(<SignPage errorMessage={passwordMessage}/>);
    getByText(/Please enter Password/i);
    //  expect(passwordPlaceHolder.value).toBe(password);
     });
})