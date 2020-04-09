import React from"react"
import styled from"@emotion/styled"
import tw from "tailwind.macro"
const DivWrap=styled.div`${tw`m-5 h-64 p-1 rounded-sm shadow-lg  flex flex-col items-center  justify-around w-64 text-gray-400`}background-color:${props=>props.id};`;
const UserNameBox =styled.input`${tw`border-b-2 border-gray-400 focus:border-teal-500`}background-color:${props=>props.id}`;
const Userdiv=styled.div`${tw`flex items-center`}`
const Color=styled.div`${tw`flex justify-around w-64 `}`
export { DivWrap,UserNameBox,Userdiv,Color}