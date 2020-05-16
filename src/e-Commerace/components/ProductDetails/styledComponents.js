import styled from"@emotion/styled"
import tw from "tailwind.macro"
const ProductDetails=styled.div`${tw`w-48 hover:border border-solid hover:border-bg-gray-300 flex flex-col justify-between items-center ml-12 mb-10 p-2 relative`}`
const ProductTitle=styled.p`${tw`h-45px m-0 text-center`}`
const ProductStyleLine=styled.div`${tw`w-4 m-0 border-t-2 rounded flex  border-yellow-600 mt-2 px mb-2`}`
const ProductCurrencyFormate=styled.span`${tw`text-xs mr-1`}`
const ProductPrice=styled.span`${tw`text-xl `}`
const ProductPriceDecimals=styled.span`${tw`text-xs`}`
const InstallmentsFormate=styled.p`${tw`text-sm text-gray-700 mb-2 h-5 text-center`}`
const AddToCartButton=styled.button`${tw`w-full py-3 text-white bg-black text-center rounded text-sm focus:outline-none m-0`}`
export{ProductDetails,ProductTitle,ProductStyleLine,ProductCurrencyFormate,ProductPrice,ProductPriceDecimals,InstallmentsFormate,AddToCartButton}