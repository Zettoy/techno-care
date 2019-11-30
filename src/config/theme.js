export default {
  screenSize: {
    xs: '0px',
    sm: '600px',
    md: '960px',
    lg: '1280px',
    xl: '1920px',
  },
  light: {
    text: {
      primary: 'black'
    },
    background: {
      primary: 'white',
      secondary: 'white',
      hover: 'darkgrey'
    }
  },
  dark: {
    text: {
      primary: 'white'
    },
    background: {
      primary: '#282828',
      secondary: '#323232',
      hover: '#4c4c4c'
    }
  },
  palette: {

  },
  elevation: {
    '1': '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    '2': '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
    '3': '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
    '4': '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
    '5': '0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22)'
  },
  animation: {
    slideUp: {
      from: {
        opacity: 0,
        transform: 'translateY(10rem)'
      },
      to: {
        opacity: 1,
        transform: 'translateY(0)'
      }
    }
  }
}