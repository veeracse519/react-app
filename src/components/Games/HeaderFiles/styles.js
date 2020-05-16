import styled from"@emotion/styled"
import tw from "tailwind.macro"
const Header=styled.div`${tw` flex items-center justify-between`}`
const HeaderScorePart=styled.div`${tw`flex justify-around items-center`}`
const Padding=styled.span`${tw` text-xl font-bold`}`
const ThemeButton=styled.button`${tw`p-2 mr-5`}border:${props=>props.selectedTheme?`1px solid white`:`1px solid black`}`
const HeaderTextPart=styled.div`${tw`flex`}`
const EmojiName=styled.p`${tw`text-3xl p-0`}`
const ResetButton=styled.button`${tw`p-2 mr-5`}border:${props=>props.selectedTheme?`1px solid white`:`1px solid black`}`
export {Header,ResetButton,HeaderScorePart,Padding,ThemeButton,EmojiName,HeaderTextPart}
