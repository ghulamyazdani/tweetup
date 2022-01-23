import { text } from "express";

export default function tweetcard(props: any, quote: any) {
  const quoted = quote.content.split(" ");
  var text1: any = [];
  var text2: any = [];
  if (quoted.length > 10) {
    for (var i = 0; i < Math.floor(quoted.length / 2); i++) {
      text1.push(quoted[i]);
    }
    for (var i = Math.floor(quoted.length / 2); i < quoted.length; i++) {
      text2.push(quoted[i]);
    }
  }

  return `
        <svg
        width="800" height="350"
        viewBox="0 0 800 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <style>
                body {
                    font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif;
                }
                svg {
                    font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif;
                    background: #fff;
                    border-radius: 5px;
                    border: 5px solid #1DA1F2;
                }
            </style>
          <defs>
            <rect id="rect" x="50" y="50" width="80" height="80" rx="80"/>
            <clipPath id="clip">
              <use xlink:href="#rect"/>
            </clipPath>
          </defs>
          <use xlink:href="#rect" stroke-width="2" stroke="black"/>
          <image x="50" y="50" xlink:href="${
            props.data[0].profile_image_url
          }" width="80" height="80" clip-path="url(#clip)"/>
          <text class="name" fill="#000000" font-size="24" id="svg_3" stroke="#000000" stroke-width="0" text-anchor="middle" transform="matrix(0.844199 0 0 0.844199 18.8536 10.0524)" x="260" xml:space="preserve" y="84.81544">${
            props.data[0].name
          }</text>
  <text fill="#000000"  font-size="24" id="svg_4" stroke="#000000" stroke-width="0" text-anchor="middle" transform="matrix(1 0 0 1 0 0) matrix(0.675158 0 0 0.675158 39.0932 40.2368)" x="260" xml:space="preserve" y="95">@${
    props.data[0].username
  }</text>
 <text fill="#000000" width="100px" font-size="24" id="svg_5" stroke="#144a9b" stroke-width="0" text-anchor="middle" transform="matrix(0.879186 0 0 1 27.1473 20)" x="411.0082" xml:space="preserve" y="158">${
   quoted.length < 10 ? quote.content : text1.join(" ")
 }</text> 
 <text fill="#000000" width="100px" font-size="24" id="svg_5" stroke="#144a9b" stroke-width="0" text-anchor="middle" transform="matrix(0.879186 0 0 1 27.1473 20)" x="411.0082" xml:space="preserve" y="184">${text2.join(
   " "
 )}</text>          
</svg>`;
}
