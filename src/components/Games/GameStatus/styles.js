import styled from"@emotion/styled"
import tw from "tailwind.macro"
const WinrLoss=styled.div`${tw`w-full py-2 text-white text-center text-2xl flex-1 flex justify-center items-center flex-col`}`
const Loss=styled.p`${tw`font-bold py-3 text-3xl text-red-500`}`
const Won=styled.p`${tw`text-3xl text-green-600 text-bold`}`
const ShowScore=styled.p`${tw`text-4xl font-bold text-white`}`
const PlayButton=styled.button`${tw`bg-indigo-500 hover:bg-indigo-700 text-white py-2 px-4 rounded`}`
export {PlayButton,ShowScore,Loss,Won,WinrLoss}