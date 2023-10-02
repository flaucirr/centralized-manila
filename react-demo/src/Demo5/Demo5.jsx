// NOTE:
// THIS IS A useContext HOOK DEMO.
// Kung makikita mo yung buong codes, ganyan lang siya
// maikli lang. Kasi ang pinaka-purpose ng useContext
// hook is para ma-organize and mastreamline yung
// program. Dito sa code makikita natin na ang nirereturn
// lang niya is another components. ThemeProvider as wrap,
// or provider, and FunctionContext as consumer.
// Ibig sabihin ng provider and consumer, is yung provider,
// lahat ng values, components, and functions jan ay
// mapapasa sa consumer, which means, magagamit rin ni
// consumer yung mga nasa loob ni provider.
// Para mas maintindihan natin ng mas mabuti yung function ng
// useContext, kailangan nating tingnan yung dalawang components.
// So visit natin first yung ThemeProvider na file.



import React from "react"
import FunctionContext from './FunctionContext'
import { ThemeProvider } from './ThemeContext'


export default function Demo5() {
    return (
        <>
        <br />
        <br />
        <br />
        <hr />
        <h2>This is a useContext hook demo</h2>
        <ThemeProvider>
            <FunctionContext />
        </ThemeProvider>
        </>
    )
}


