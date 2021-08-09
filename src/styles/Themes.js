import {createMuiTheme} from "@material-ui/core";
// MUI Theme
// import theme from "styles/muiTheme";
export const rcpTheme = createMuiTheme({
    palette: {
        primary: {
            main:'#BF0000',
            light:'#FB9A9A',
            dark:'#590000',
            contrastText:'#fff'
        },
        secondary: {
            main:'#C53E6C',
            light:'#FC7092',
            dark:'#90003B',
            contrastText:'#fff'
        },
    },
    typography:{
        fontFamily:"Rakuten Sans",
        fontSize:16
    }
});