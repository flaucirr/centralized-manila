// Ito na nandito na tayo sa children or consumer,
// ito yung pinaka inner level ng components.
// Dito natin gagamitin lahat ng functions and values
// na pinasa from the provider.


import React from "react"

// So ito, inimport natin yung dalawang function na ginawa
// natin sa provider, kung natatandaan niyo gumawa tayo ng
// link dun diba, yung dalawang createContext and useContext.
// Ibig sabihin, magka-konekta na silang dalawa and kung ano
// yung value or state ng variable na ito dito, ay ganun rin
// sa provider.
import { useTheme, useThemeUpdate } from "./ThemeContext"


// Kung maaalala niyo, ito yung component na nasa Demo5.jsx diba
// ito yung component na ilalagay dun and yung return nito, ay
// ipapasa doon.
export default function FunctionContext() {

    // Ito na, naaalala niyo yung mga function na ginawa
    // natin kanina diba, isa dun yung useTheme which is
    // naka-link to doon and yung value na ilalagay natin
    // dito is mapapasa sa darkTheme na variable or useState doon
    // through useTheme() which is ayan yung nagsisilbing link.
    const darkTheme = useTheme()


    // Ganun rin dito, may toggleTheme rin tayo dun na variable
    // and useState, so since magka-link sila, every time na
    // babaguhin natin yung value or state ng variable na
    // to dito, eh mababago rin doon. 
    const toggleTheme = useThemeUpdate()


    // Ito yung CSS para makita natin yung changes,
    // if darkTheme is true, then background color will be
    // #333, else #CCC. Kung naaalala niyo doon sa provider
    // yung useState doon ay may initial na (true), which
    // means ang initial state ng program ay naka-dark mode.
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
    }

        // Ito na yung return, ito yung ipapasa ng buong
        // FunctionContext() function as component.
        return (
            <>
            {/* If you remember, gumawa tayo ng function
            sa provider diba for toggleTheme, na kapag tinawag
            yung function eh iiinvert niya yung value. */}
            <button onClick={toggleTheme}>Toggle Theme</button>


            {/* Ito naman is for styling lang, icacall niya
            lang yung variable na naglalaman ng mga CSS. */}
            <div style={themeStyles}>Function Theme</div>
            </>
        )
}

// So ayun na yung buong process ng useContext, isa to sa pinaka-
// ginagamit sa React for streamlining components, passing values,
// nesting, and para rin organize yung architecture ng program.