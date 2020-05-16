import styled from"@emotion/styled"
import tw from "tailwind.macro"
const TotalPriceCheckout=styled.div`${tw`absolute bottom-0 right-0 p-4 bg-gray-800 shadow-inner`}width:400px;`
const PriceDetails=styled.div`${tw`flex justify-between items-center mt-4`}`
const Title=styled.h3`${tw`text-gray-500`}`
const TotalCost=styled.p`${tw`text-yellow-600`}`
export{TotalPriceCheckout,PriceDetails,Title,TotalCost}