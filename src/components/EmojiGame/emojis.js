import styled from"@emotion/styled"
import tw from "tailwind.macro"
const Header=styled.div`${tw` flex items-center justify-between`}`
const HeaderScorePart=styled.div`${tw`flex justify-around items-center`}`
const Padding=styled.h2`${tw`p-4 font-bold`}`
const ThemeButton=styled.button`${tw`p-2`}border:${props=>props.selectedTheme?`1px solid white`:`1px solid black`}`
const HeaderTextPart=styled.div`${tw`flex`}`
const EmojiCardStyle=styled.div`${tw`pt-10 flex flex-wrap justify-around`}`
const WinrLoss=styled.div`${tw` w-screen h-screen flex flex-col justify-center items-center`}`
const EmojiName=styled.p`${tw`text-3xl p-2`}`
const Loss=styled.p`${tw`text-3xl  text-red-800 text-bold`}`
const Won=styled.p`${tw`text-3xl text-green-600 text-bold`}`
const ShowScore=styled.p`${tw`text-3xl m-0 text-extrabold`}`
const PlayButton=styled.button`${tw`p-3 bg-blue-700 text-white`}`
export {PlayButton,Header,ShowScore,HeaderScorePart,Loss,Won,Padding,ThemeButton,EmojiName,HeaderTextPart,EmojiCardStyle,WinrLoss}
//p-2 mr-4 border-solid border-white border
//p-2 border-solid border-black border