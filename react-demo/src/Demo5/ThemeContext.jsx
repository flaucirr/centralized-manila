// Okay, so dito sa ThemeContext, makikita natin na
// ang dami niyang function which is tatlo, tapos sa
// pinaka-ibabang function pa ay may provider na component.
// So start na nating intindihin isa-isa.


import React, { useState, useContext } from 'react'


// Itong dalawang ginamitan ng context, ibig sabihin
// niyan, ay ayan yung magiging link ng iba pang component
// sa ibang file. Mas maiintindihan natin to as a whole,
// just remember for now na ayan yung magaact as link.
const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()


// So dahil nag create tayo ng context (LINK) sa taas,
// gagawan natin siya ng function para magamit natin.
// ito na ang useContext, in other words (use LINK). 
export function useTheme() {
    return useContext(ThemeContext)
}

export function useThemeUpdate() {
    return useContext(ThemeUpdateContext)
}



// Ito na yung pinaka-function wherein dito gagamitin
// yung mga context or link.
// Makikita natin na may 'children' parameter sa loob ng
// function. Ibig sabihin niyan, is lahat ng nasa loob
// ng function na to ay ipapasa sa children (or yung consumer
// since ito yung magiging provider).
export function ThemeProvider({ children }) {

    // As we can see, may darkTheme na variable for useState,
    // tandaan natin tong variable for now, kasi ayan yung
    // ipapasa sa children (consumer).
    const [darkTheme, setDarkTheme] = useState(true)
    

    // Same rito sa function na to, ito rin yung magiging
    // function para sa program na gagawin sa consumer,
    // which means pwede siyang tawagin kahit wala
    // sila sa iisang file, dahil nga gumamit tayo ng
    // context or link.
    // yung !prevDarkTheme ibig sabihin lang niyan ay
    // iinvert yung current state, ex. True magiging False.
    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }


    // Ito na yung irereturn papunta sa Demo5 kanina,
    // diba may ThemeContext na component dun. Mapapansin
    // niyo walang .Provider na nakalagay dun pero dito
    // meron, hindi naman na kasi necessary since naglagay
    // na tayo dito and naka-link naman sila and ito rin
    // yung irereturn nun, dahil ito yung nakapaloob sa
    // return ng mismong function (which is ThemeProvider).
    return (

        // Dito makikita natin na yung value na nakalagay is darkTheme,
        // since provider nga to, mapapasa yang value sa consumer/children.
        // Let's just remember it for now.
        <ThemeContext.Provider value={darkTheme}>

            {/* Same rin dito na ipapasa niya yung value, which is
            yung mismong function. Yes pwede ipasa ang function as value
            sa React. */}
            <ThemeUpdateContext.Provider value={toggleTheme}>

                {/* Itong children nakita natin to kanina diba,
                ito yung parameter sa loob ng ThemeProvider na function,
                which means, dito ipapasa or connected lahat ng function and
                values na meron sa loob ng function na to. */}
                {children}

            </ThemeUpdateContext.Provider>

        </ThemeContext.Provider>

        // Lets's go na sa next, which is yung children/consumer (FunctionContext.jsx).
    )
}