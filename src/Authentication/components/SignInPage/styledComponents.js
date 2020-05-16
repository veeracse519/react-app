import styled from"@emotion/styled"
import tw from "tailwind.macro"
const SignInDiv=styled.div`${tw`flex justify-center items-center h-screen bg-gray-200`}`
const PageHeading=styled.h2`${tw`font-bold mb-4`}`
const Form=styled.div`${tw`flex flex-col p-8 bg-white`}`
const Heading=styled.h2`${tw`font-bold mb-4`}`
const UserNameBox=styled.input`${tw`border border-gray-400 mb-3 w-48 h-10 pl-2 focus:outline-none rounded`}`
const PasswordBox=styled.input`${tw`border border-gray-400 mb-3 w-48 h-10 pl-2 focus:outline-none rounded`}`
const ErrorMessege=styled.span`${tw`text-red-700 mt-2 w-48 text-center text-sm`}`
const SignInButton=styled.button`${tw`flex justify-center w-48 h-10 rounded bg-gray-900 text-white focus:outline-none cursor-pointer`}`
export {SignInDiv,PageHeading,Form,Heading,UserNameBox,PasswordBox,SignInButton,ErrorMessege}