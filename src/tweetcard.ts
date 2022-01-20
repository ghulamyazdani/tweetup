import "./svg.css";
export default function tweetcard(props: any) {
  return `
        <svg
        width="1200"
        height="420"
        viewBox="0 0 1200 420"
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
                }
                svg {
                    font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif;
                }
            </style>
            <foreignObject x="0" y="0" width="1200" height="50">
                <h1 xmlns="http://www.w3.org/1999/xhtml" class="header">
                    Ghulam Yazdani's tweetup
                </h1>
            </foreignObject>
    </svg>`;
}
