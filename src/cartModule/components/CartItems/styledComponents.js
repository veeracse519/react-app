import styled from"@emotion/styled"
import tw from "tailwind.macro"
const CartItemBody=styled.div`${tw`flex text-sm my-2 items-center relative`}width:350px`
const RemoveButton=styled.button`${tw`font-bold absolute top-0 right-0`}`
const CartItemDetails=styled.div`${tw`ml-2 flex-1`}`
const ProductTitle=styled.h3`${tw`text-white m-0`}`
const ProductStyle=styled.p`${tw`text-gray-500 text-xs m-0`}`
const ProductQuantity=styled.p`${tw`text-gray-500 text-xs m-0`}`
const ProducrPrice=styled.p`${tw`text-yellow-600 ml-auto`}`
export {CartItemBody,RemoveButton,CartItemDetails,ProductTitle,ProductStyle,ProductQuantity,ProducrPrice}
