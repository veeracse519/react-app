import React from "react"
import image from "./check.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./styles.css"
class Tostify extends React.Component{
    render(){
        return(
            <div className="flex items-center justify-around">
            <svg height="15pt" viewBox="0 0 512 512" width="15pt" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink">
                <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="256" x2="256" y1="0" y2="512">
                    <stop offset="0" stop-color="green"/><stop offset="1" stop-color="green"/>
                    </linearGradient><path d="m258.257812 310.347656 223.957032-245.820312 29.566406 26.9375-251.472656 276.019531-137.089844-130.320313 27.5625-28.992187zm237.992188-143.09375-31.191406 34.34375c4.527344 17.386719 6.941406 35.617188 6.941406 54.402344 0 119.101562-96.898438 216-216 216s-216-96.898438-216-216 96.898438-216 216-216c55.175781 0 105.574219 20.804688 143.796875 54.96875l26.964844-29.691406c-47.007813-42.191406-107.109375-65.277344-170.761719-65.277344-68.378906 0-132.667969 26.628906-181.019531 74.980469-48.351563 48.351562-74.980469 112.640625-74.980469 181.019531s26.628906 132.667969 74.980469 181.019531c48.351562 48.351563 112.640625 74.980469 181.019531 74.980469s132.667969-26.628906 181.019531-74.980469c48.351563-48.351562 74.980469-112.640625 74.980469-181.019531 0-30.773438-5.410156-60.710938-15.75-88.746094zm0 0" fill="url(#a)"/>
            </svg>
            {/* <img src="https://image.shutterstock.com/image-vector/accepted-tickmark-symbol-260nw-1153481353.jpg"/> */}
          <p>product added to cart</p>
          </div>
        )
    }
}
export default Tostify
/*
 <svg stroke="currentColor" fill="green" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="height: 20px; width: 20px;">
               <path d="M170.718 216.482L141.6 245.6l93.6 93.6 208-208-29.118-29.118L235.2 279.918l-64.482-63.436zM422.4 256c0 91.518-74.883 166.4-166.4 166.4S89.6 347.518 89.6 256 164.482 89.6 256 89.6c15.6 0 31.2 2.082 45.764 6.241L334 63.6C310.082 53.2 284.082 48 256 48 141.6 48 48 141.6 48 256s93.6 208 208 208 208-93.6 208-208h-41.6z">
                </path>#2af598
                #009efd
            </svg>*/



           


















/*






            .toast-styles {
                padding: 0!important;
            }
            .m-0 {
                margin: 0;
            }
            @media only screen and (max-width: 480px)
            .Toastify__toast {
                margin-bottom: 0;
            }
            .Toastify__toast--default {
                background: #fff;
                color: #aaa;
            }
            .Toastify__toast {
                position: relative;
                min-height: 64px;
                box-sizing: border-box;
                margin-bottom: 1rem;
                padding: 8px;
                border-radius: 1px;
                box-shadow: 0 1px 10px 0 rgba(0,0,0,.1), 0 2px 15px 0 rgba(0,0,0,.05);
                display: flex;
                justify-content: space-between;
                max-height: 800px;
                overflow: hidden;
                font-family: sans-serif;
                cursor: pointer;
                direction: ltr;
            }
            .m-0 {
                margin: 0;
            }
            *, :after, :before {
                box-sizing: border-box;
                border: 0 solid #e2e8f0;
            }
            *, ::after, ::before {
                box-sizing: border-box;
                border-width: 0;
                border-style: solid;
                border-color: #e2e8f0;
            }
            user agent stylesheet
            div {
                display: block;
            }
            .Toastify__toast-container {
                z-index: 9999;
                -webkit-transform: translateZ(9999px);
                position: fixed;
                padding: 4px;
                width: 320px;
                box-sizing: border-box;
                color: #fff;
            }
            html {
                font-family: system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
                line-height: 1.5;
            }
            html {
                line-height: 1.15;
                -webkit-text-size-adjust: 100%;
            }
            html {
                font-family: system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
                line-height: 1.5;
            }
            html {
                line-height: 1.15;
                -webkit-text-size-adjust: 100%;
            }
            *, :after, :before {
                box-sizing: border-box;
                border: 0 solid #e2e8f0;
            }
            *, ::after, ::before {
                box-sizing: border-box;
                border-width: 0;
                border-style: solid;
                border-color: #e2e8f0;
            }
            *, :after, :before {
                box-sizing: border-box;
                border: 0 solid #e2e8f0;
            }
            *, ::after, ::before {
                box-sizing: border-box;
                border-width: 0;
                border-style: solid;
                border-color: #e2e8f0;
            }








        */