import { createMuiTheme } from '@material-ui/core/styles'

export const themeMaterial = createMuiTheme({
  palette: {
    primary: {
      main: '#880E4F',
      light: '#BC477B',
      dark: '#560027'
    },
    secondary: {
      main: '#C7A64B'
    }
  },
  overrides: {
    MuiStepIcon: {
      root: {
        '&$completed': {
          color: '#BC477B'
        },
        '&$active': {
          fill: '#880E4F',
          '& $text': {
            fill: '#FFF'
          }
        }
      },
      text: {
        fill: '#FFF'
      }
    }
  }
})
