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
        'soft-white': 'rgba(255, 255, 255, 0.05)',
        'gray': '#F4F6FC',
        'soft-gray': 'rgba(244, 246, 252, 0.5)',
        'dusk-white': '#BBBBCB',
        'btn-border': '#F4F6FC33',
        'yellow': '#FCD980',
        'line': '#ECECF1',
        'overlay': 'rgba(28, 30, 83, 0.50)'
      },
      maxWidth: {
        'container': '1280px',
        'bannerHeadingWidth': '582px',
        '562px': '562px',
        '405px': '405px',
        '303px': '303px',
        '630px': '630px',
        '624px': '624px',
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
        '624px': '624px',
        '399px': '399px',
        '517px': '517px',
      },
      height: {
        'bannerImgHeight': '360px',
        '600px': '600px',
        '284px': '284px',
        '285px': '285px',
        '52px': '52px',
        '2px': '2px',

      },
      fontFamily: {
        'poppins': '"Poppins", sans-serif',
        'manrope': '"Manrope", sans-serif'
      },
      fontSize: {
        large: '54px',
        miniHeading: '32px',
        midHeading: '38px',
      },
      backgroundImage: {
        'gradient': 'linear-gradient(329deg, #1C1E53 -10.96%, rgba(28, 30, 83, 0.42) 103.96%)',
        'buildImg': 'url(./src/assets/build-img.png)',
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
      },
      margin: {
        '22px': '22px',
        '86px': '86px',
        '14px': '14px',
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
      },
      inset: {
        '396px': '396px',
      },
      content: {
        'space': '',
      },
      borderWidth: {
        '1.5': '1.5px',
      }
    },
  },
  plugins: [],
}

