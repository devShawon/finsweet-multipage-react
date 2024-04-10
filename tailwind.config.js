/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tint-blue': '#1C1E53',
        'dark-blue': '#282938',
        'royal-blue': '#2405F2',
        'black': '#1B1C2B',
        'white': '#FFFFFF',
        'gray': '#F4F6FC',
        'dusk-white': '#BBBBCB',
        'btn-border': '#F4F6FC33',
        'yellow': '#FCD980',
      },
      maxWidth: {
        'container': '1280px',
        'bannerHeadingWidth': '582px',
        '562px': '562px',
        '405px': '405px',
        '303px': '303px',
        '630px': '630px',
      },
      width: {
        'bannerImgWidth': '638px',
        '843px': '843px',
        '396px': '396px',
        '414px': '414px',
        '405px': '405px',
        '290px': '290px',
      },
      height: {
        'bannerImgHeight': '360px',
        '600px': '600px',
        '284px': '284px',

      },
      fontFamily: {
        'poppins': '"Poppins", sans-serif'
      },
      fontSize: {
        bannerFont: '54px',
        miniHeading: '32px'
      },
      backgroundImage: {
        'gradient': 'linear-gradient(329deg, #1C1E53 -10.96%, rgba(28, 30, 83, 0.42) 103.96%)',
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
      },
      margin: {
        '22px': '22px',
      },
      lineHeight: {
        'extra-loose': '74px',
        '64px': '64px',
        '48px': '48px'
      },
      gap: {
        '142': '142px',
      },
      inset: {
        '396px': '396px',
      }
    },
  },
  plugins: [],
}

