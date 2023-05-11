
import ReactDOM from 'react-dom/client'

import './index.css'

import {Provider} from "react-redux";
import myState from "./state/store/store";
import {AppRouter} from "./router/AppRouter";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";
const theme = createTheme({
    typography: {
        fontFamily: ["system-ui", "cursive"].join(",")
    }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
<Provider store={ myState} >
    <ThemeProvider theme={theme}>

    <AppRouter />
    </ThemeProvider>
</Provider>

)
