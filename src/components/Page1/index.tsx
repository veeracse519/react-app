import React from "react";
import logo from "../../logo.svg";
import styled from '@emotion/styled'
import tw from "tailwind.macro"
const PageContainer = styled.div `${tw `bg-gray-800 h-screen flex justify-center flex-col items-center`}`



function Page1() {

     return (
          <PageContainer >
       <img src={logo} className="App-logo w-1/4" alt="logo" />
        <h1 className="text-white">Page 1</h1>
       </PageContainer>);
}

export default Page1;
