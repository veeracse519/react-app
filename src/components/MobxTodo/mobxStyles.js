// import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
const TodoDiv=styled.div`${tw`bg-indigo-100 flex h-screen flex-col items-center border border-solid border-blue-500`}`
const TodoHeading=styled.p`${tw`text-6xl text-pink-500 opacity-50`}`
const EachTodo=styled.div`${tw`flex items-center  w-11/12 h-10 text-center shadow-2xl`}`
const FooterDiv=styled.div`${tw`flex  items-center justify-around text-xs bg-white shadow-paperStack w-11/12 h-10 text-center`} display:${props=>props.count?"flex":"none"}`
export {TodoDiv,TodoHeading,EachTodo,FooterDiv}
//   font-size: 100px;
//color: rgba(175, 47, 47, 0.2);
/*
.paper {
  background: #fff;
  box-shadow:
    /* The top layer shadow */
//     0 1px 1px rgba(0,0,0,0.15),
//     /* The second layer */
//     0 10px 0 -5px #eee,
//     /* The second layer shadow */
//     0 10px 1px -4px rgba(0,0,0,0.15),
//      /* The third layer */
//     0 20px 0 -10px #eee,
//     /* The third layer shadow */
//     0 20px 1px -9px rgba(0,0,0,0.15);
//     /* Padding for demo purposes */
//     padding: 30px;
// }
//*/