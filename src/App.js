import { useState } from "react";
import "./index.css";

function App() {
  const [status, setStatus] = useState(false);

  let styles = {
    transform: `translateX(${status ? "-190px" : "200px"})`,
  };

  return (
    <div className="App" onClick={() => setStatus(!status)}>
      <div
        className="container"
        style={{
          backgroundColor: `${
            status ? "rgba(0, 0, 255, 0.261)" : "rgba(255, 68, 0, 0.261)"
          }`,
        }}
      >
        <svg
          width="4764"
          height="1800"
          viewBox="0 0 4764 1800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={styles}
        >
          <path
            d="M4764 900C4764 1256.78 4474.78 1546 4118 1546H2382V254H4118C4474.78 254 4764 543.224 4764 900V900Z"
            fill="#FFC700"
          />
          <path
            d="M0 900C0 543.224 289.224 254 646 254H2382V1546H646C289.224 1546 0 1256.78 0 900V900Z"
            fill="#64BBFA"
          />
          <path
            d="M3772.85 899.182C3772.85 937.534 3765.93 970.678 3752.08 998.614C3738.23 1026.55 3719.23 1048.09 3695.08 1063.24C3670.93 1078.4 3643.35 1085.97 3612.34 1085.97C3581.33 1085.97 3553.75 1078.4 3529.6 1063.24C3505.45 1048.09 3486.45 1026.55 3472.6 998.614C3458.75 970.678 3451.83 937.534 3451.83 899.182C3451.83 860.83 3458.75 827.686 3472.6 799.75C3486.45 771.814 3505.45 750.271 3529.6 735.119C3553.75 719.968 3581.33 712.392 3612.34 712.392C3643.35 712.392 3670.93 719.968 3695.08 735.119C3719.23 750.271 3738.23 771.814 3752.08 799.75C3765.93 827.686 3772.85 860.83 3772.85 899.182ZM3730.24 899.182C3730.24 867.695 3724.97 841.121 3714.44 819.459C3704.02 797.797 3689.87 781.402 3672 770.276C3654.24 759.149 3634.36 753.585 3612.34 753.585C3590.32 753.585 3570.38 759.149 3552.5 770.276C3534.75 781.402 3520.6 797.797 3510.07 819.459C3499.65 841.121 3494.44 867.695 3494.44 899.182C3494.44 930.669 3499.65 957.243 3510.07 978.905C3520.6 1000.57 3534.75 1016.96 3552.5 1028.09C3570.38 1039.21 3590.32 1044.78 3612.34 1044.78C3634.36 1044.78 3654.24 1039.21 3672 1028.09C3689.87 1016.96 3704.02 1000.57 3714.44 978.905C3724.97 957.243 3730.24 930.669 3730.24 899.182ZM4135.25 717.364V1081H4092.63L3894.48 795.489H3890.93V1081H3846.89V717.364H3889.51L4088.37 1003.59H4091.92V717.364H4135.25Z"
            fill="black"
            fill-opacity="0.5"
          />
          <path
            d="M626.852 899.182C626.852 937.534 619.928 970.678 606.078 998.614C592.229 1026.55 573.23 1048.09 549.082 1063.24C524.935 1078.4 497.354 1085.97 466.341 1085.97C435.328 1085.97 407.747 1078.4 383.599 1063.24C359.452 1048.09 340.453 1026.55 326.604 998.614C312.754 970.678 305.83 937.534 305.83 899.182C305.83 860.83 312.754 827.686 326.604 799.75C340.453 771.814 359.452 750.271 383.599 735.119C407.747 719.968 435.328 712.392 466.341 712.392C497.354 712.392 524.935 719.968 549.082 735.119C573.23 750.271 592.229 771.814 606.078 799.75C619.928 827.686 626.852 860.83 626.852 899.182ZM584.239 899.182C584.239 867.695 578.971 841.121 568.436 819.459C558.019 797.797 543.874 781.402 526 770.276C508.244 759.149 488.358 753.585 466.341 753.585C444.324 753.585 424.378 759.149 406.504 770.276C388.749 781.402 374.603 797.797 364.068 819.459C353.652 841.121 348.443 867.695 348.443 899.182C348.443 930.669 353.652 957.243 364.068 978.905C374.603 1000.57 388.749 1016.96 406.504 1028.09C424.378 1039.21 444.324 1044.78 466.341 1044.78C488.358 1044.78 508.244 1039.21 526 1028.09C543.874 1016.96 558.019 1000.57 568.436 978.905C578.971 957.243 584.239 930.669 584.239 899.182ZM700.893 1081V717.364H918.933V756.426H744.928V879.295H902.598V918.358H744.928V1081H700.893ZM994.35 1081V717.364H1212.39V756.426H1038.38V879.295H1196.06V918.358H1038.38V1081H994.35Z"
            fill="black"
            fill-opacity="0.5"
          />
          <circle cx="2338" cy="900" r="900" fill="url(#paint0_linear_0_1)" />
          <defs>
            <linearGradient
              id="paint0_linear_0_1"
              x1="2338"
              y1="0"
              x2="2338"
              y2="1800"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D9D9D9" />
              <stop offset="1" stop-color="#AD9191" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default App;
