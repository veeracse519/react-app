import styled from"@emotion/styled"
import tw from "tailwind.macro"
const ShipItButton=styled.button`${tw`bg-black w-full py-2 text-white my-4 rounded  focus:outline-none`};
cursor:${props=>props.value?`pointer`:`not-allowed`}`
export default ShipItButton