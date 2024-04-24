/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/preset";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [keepPreset],
  theme: {
    extend: {
      colors: {
        'tint-blue': '#1C1E53',
        'dark-blue': '#282938',
        'royal-blue': '#2405F2',
        'black': '#1B1C2B',
        'white': '#FFFFFF',
        'soft-white': 'rgba(255, 255, 255, 0.05)',
        'gray': '#F4F6FC',
        'soft-gray': 'rgba(244, 246, 252, 0.5)',
        'dusk-white': '#BBBBCB',
        'btn-border': '#F4F6FC33',
        'yellow': '#FCD980',
        'line': '#ECECF1',
        'overlay': 'rgba(28, 30, 83, 0.50)',
        'light': '#F4F5F5',
        'accent': '#EEF4FA',
        'vista-green': '#97DAAD',
        'dust': '#a8aab0',
        'black': '#000',
        'black-velvet': '#232536',
        'soft-yellow': 'rgba(252, 217, 128, 0.10)',
        'border-color': 'rgba(40, 41, 56, 0.2)',
        'halka-black': 'rgba(0, 0, 0, 0.12)',
      },
      maxWidth: {
        'container': '1280px',
        'bannerHeadingWidth': '582px',
        '562px': '562px',
        '405px': '405px',
        '303px': '303px',
        '630px': '630px',
        '624px': '624px',
        '468px': '468px',
        '950px': '950px',
        '831px': '831px',
        '842px': '842px',
        '504px': '504px',
        '733px': '733px',
        '730px': '730px',
        '646px': '646px',
        '817px': '817px',
      },
      width: {
        'bannerImgWidth': '638px',
        '843px': '843px',
        '396px': '396px',
        '414px': '414px',
        '405px': '405px',
        '290px': '290px',
        '328px': '328px',
        '52px': '52px',
        '464px': '464px',
        '656px': '656px',
        '600px': '600px',
        '399px': '399px',
        '517px': '517px',
        '595px': '595px',
        '484px': '484px',
        '547px': '547px',
        '515px': '515px',
        '224px': '224px',
        '296px': '296px',
        '272px': '272px',
        '623px': '623px',
        '168px': '168px',
        '406px': '406px',
        '281px': '281px',
        '254px': '254px',
        '575px': '575px',
        '1063px': '1063px',
        '952px': '952px',
        '438px': '438px',
      },
      height: {
        'bannerImgHeight': '360px',
        '600px': '600px',
        '284px': '284px',
        '285px': '285px',
        '52px': '52px',
        '2px': '2px',
        '1px': '1px',
        '336px': '336px',
        '340px': '340px',
        '168px': '168px',
        '410px': '410px',
        '398px': '398px',
        '477px': '477px',
        '310px': '310px',
        '380px': '380px',
        '641px': '641px',
        '508px': '508px',
      },
      fontFamily: {
        'poppins': '"Poppins", sans-serif',
        'manrope': '"Manrope", sans-serif'
      },
      fontSize: {
        large: '54px',
        miniHeading: '32px',
        midHeading: '38px',
        small: '8px',
      },
      backgroundImage: {
        'gradient': 'linear-gradient(329deg, #1C1E53 -10.96%, rgba(28, 30, 83, 0.42) 103.96%)',
        'buildImg': 'url(../../src/assets/home/build-img.png)',
        'teamGradient': 'linear-gradient(348deg, #5239FA 17.97%, rgba(255, 255, 255, 0.00) 79.2%)',
        'pricingCardBg': 'url(../../src/assets/pricing/card-bg.png)',
      },
      borderRadius: {
        'half': '41px',
      },
      padding: {
        '126px': '126px',
        '128px': '128px',
        '312px': '312px',
        '35px': '35px',
        '76px': '76px',
        '45px': '45px',
        '58px': '58px',
        '130px': '130px',
        '96px': '96px',
        '261px': '261px',
        '18px': '18px',
        '37px': '37px',
        '80px': '80px',
        '112px': '112px',
        '44px': '44px',
        '15px': '15px',
        '51px': '51px',
        '66px': '66px',
        '205px': '205px',
      },
      margin: {
        '22px': '22px',
        '86px': '86px',
        '14px': '14px',
        '31px': '31px',
        '54px': '54px',
        '96px': '96px',
        '30px': '30px',
        '41px': '41px',
        '128px': '128px',
        '40px': '40px',
        '56px': '56px',
        '220px': '220px',
      },
      lineHeight: {
        'extra-loose': '74px',
        '64px': '64px',
        '48px': '48px',
        '56px': '56px',
      },
      gap: {
        '142': '142px',
        '110': '110px',
        '29': '29px',
        '26': '26px',
        '61': '61px',
        '55': '55px',
        '140': '140px',
        '6': '6px',
        '27': '27px',
      },
      inset: {
        '396px': '396px',
      },
      content: {
        'space': '',
      },
      borderWidth: {
        '1.5': '1.5px',
        '3': '3px',
      },
      opacity: {
        '87': '.87',
      }
    },
  },
  plugins: [],
}

