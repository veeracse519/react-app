import styled from"@emotion/styled"
import tw from "tailwind.macro"
const SelectionName=styled.label`${tw`text-center`}`
const ProductsCount=styled.p`${tw`hidden sm:flex`}`
const HeaderSection=styled.div`${tw`flex justify-between items-center my-4`}`
const Selection=styled.select`${tw`rounded-md bg-white border border-gray-400 hover:border-gray-700 focus:outline-none `}`
export{Selection,SelectionName,HeaderSection,ProductsCount}