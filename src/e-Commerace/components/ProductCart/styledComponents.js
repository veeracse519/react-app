import styled from"@emotion/styled"
import tw from "tailwind.macro"
const ShowCartDivision=styled.div`${tw`flex  items-start h-5 cursor-pointer`}`
const CartButton=styled.div`${tw` p-4 bg-gray-800 flex flex-col`}width:400px;height:461px`
const CartItemsAlignment=styled.div`${tw`flex items-center justify-center`}`
const CartImageSize=styled.div`${tw`h-10 mr-4`}`
const Productscount=styled.p`${tw`text-center text-sm text-yellow-600 relative`}margin-top:-32px;margin-left:16px`
const CartName=styled.h2`${tw`text-white font-bold text-xl`}`
const ProductsList=styled.div`${tw`mt-8 overflow-y-auto flex-1`}`
const HideCartButton=styled.div`${tw`h-10 p-3  text-white bg-gray-800 focus:outline-none active:outline-none`}`
const HidededCartDivision=styled.div`${tw`bg-gray-800 p-1 cursor-pointer text-white text-center`}`
export{HideCartButton,ShowCartDivision,CartButton,CartItemsAlignment,CartImageSize,Productscount,CartName,ProductsList,HidededCartDivision}