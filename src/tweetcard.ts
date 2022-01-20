export default function tweetcard(props: any) {
  return `
        <svg
        width="850" height="390"
        viewBox="0 0 850 390"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
            <rect xmlns="http://www.w3.org/2000/svg" data-testid="card_bg" id="cardBg"
            x="0" y="0" rx="2.5" height="100%" stroke="#E4E2E2" fill-opacity="1"
            width="100%" fill="#00000000" stroke-opacity="1" style="stroke:#0000; stroke-width:1;"/>

            <style>
                body {
                    font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif;
                }
                .header {
                    font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif;
                    text-align: center;
                    margin-top: 20px;
                    color: #fff;
                }
                svg {
                    font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif;
                    background: pink;
                    border-radius: 5px;
                    border: 5px solid blue;
                
                }
                .tweet {
                    font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif;
                    text-align: center;
                    max-width: 600px;
                }
                text{ 
                    font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif;
                    word-wrap: break-word;
                }
            </style>

            <defs>
            <rect id="rect" x="50"  y="50" width="80" height="80" rx="80"/>
            <clipPath id="clip">
              <use xlink:href="#rect"/>
            </clipPath>
          </defs>
          <use xlink:href="#rect" stroke-width="2" stroke="black"/>
          <image x="50" y='50' xlink:href="${props.data[0].profile_image_url}" width="80" height="80" clip-path="url(#clip)"/>
          <text fill="#000000" font-family="Serif" font-size="60" id="svg_3" stroke="#000000" stroke-width="0" text-anchor="middle" transform="matrix(0.844199 0 0 0.844199 18.8536 10.0524)" x="240" xml:space="preserve" y="84.81544">${props.data[0].name}</text>
  <text fill="#000000" font-family="Serif" font-size="24" id="svg_4" stroke="#000000" stroke-width="0" text-anchor="middle" transform="matrix(1 0 0 1 0 0) matrix(0.675158 0 0 0.675158 39.0932 40.2368)" x="240" xml:space="preserve" y="100.22637">@${props.data[0].username}</text>
  <text fill="#000000"class="tweet" font-family="Serif" font-size="24" id="svg_5" stroke="#144a9b" stroke-width="0" text-anchor="middle" transform="matrix(0.879186 0 0 1 27.1473 20)" x="411.0082" xml:space="preserve" y="158">lorem isoaskd mslas ,salaselmam, aslmasasacscaasccccsascssacsmasmasksamsmasmmaseksmaskkas kasmaskmca asklacma askasc aksenv kasc</text>
 
    </svg>`;
}
