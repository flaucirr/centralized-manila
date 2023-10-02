// NOTE:
// THIS IS A useRef HOOK DEMO.
// So itong useRef hook is commonly ginagamit to in three ways.
// Ginagamit siya for storing values in a variable and caching.
// kaibahan kasi niya sa useState, yung useState every time na may changes
// na nangyayari ay nagrere-render, which means, automatically kapag
// iniba mo yung value ng isang state, eh magrerender agad yun sa actual
// DOM para ma-apply yung changes. While sa useRef naman, hindi siya
// nagca-cause ng re-render kahit pa may changes na nangyari.
// pwede mo tong i-compare as a memory, commonly ayun naman yung pinag-
// gagamitan niya. To store the previous value or state.
// Next naman na common function nito ay for referencing the elements in
// a DOM. Makikita natin kung paano to by this demonstration ng focus
// button.


import React, { useState, useEffect, useRef } from "react"

export default function Demo4() {

    // of course we need useState kasi magsasagawa
    // tayo ng changes
    const [name, setName] = useState('') 


    // Ito yung unang example ng useRef which is gagamitin
    // natin siya to store the previous value or state.
    // Like memory or caching ganun.
    const prevName = useRef('')


    // Ito naman yung second example where in gagamitin natin
    // siya para sa pag reference ng element sa DOM.
    const inputFocus = useRef()


    // Ito yung para makita natin yung actual workings ng useRef
    // sa pagstore ng previous value or state.
    // Remember na ang useEffect ay nageexecute AFTER re-render,
    // which means, in this case, since may useState tayo, mauuna lagi yun
    // and ayun ang nagcacause ng re-render. So for example, may initial value
    // na 'ABCD' tapos binago mo using useState and ginawa mong 'ABC' nalang,
    // nung nagbura ka ng isang letter, nagkaroon ng re-rendering sa DOM,
    // and dahil nagkaroon ng re-rendering, susunod na jan ang useEffect.
    // (Though, remember na hindi everytime may re-rendering ay everytime rin
    // nagrurun ang useEffect, jan papasok yung parameters ng useEffect, which in
    // this case, yung [name], so magrurun lang siya kapag may re-rendering jan.)
    // So dahil nga nagkaroon ng re-rendering, kinukuha ng useRef yung previous
    // state before re-rendering. So kinuha niya yung value na 'ABCD' dahil ayan
    // yung previous state before re-rendering.
    useEffect(() => {
        prevName.current = name
    }, [name])



    // Ito yung cina-call ng button every time i-click siya.
    // Makikita na inputFocus ang variable, which is nakareference
    // yan sa loob ng input box. May .focus() jan which is ayan
    // yung pagfo-focus sa isang element. 
    // Also, dapat may .current lagi kapag ginagamit ang useRef,
    // syntax niya yan to access the current value stored.
    function focus() {
        inputFocus.current.focus()
    }

    

    return (
        <>
        <br />
        <br />
        <hr />
            <h2>This is a useRef hook demo</h2>


            {/* Makikita na may ref tag sa loob ng input box, bali ito
            pagbabasehan ng useRef.
            Meron ring onChange which is nadiscuss na natin last time sa useState */}
            <input ref={inputFocus} value={name} onChange={e => setName(e.target.value)} />

            {/* Dito magdidisplay yung value ng {name} */}
            <div>My name is {name}</div>

            {/* Dito naman magdidisplay yung value ng {prevName}
            which is makikita natin yung demo ng useRef dito */}
            <div>and it used to be {prevName.current}</div>

            {/* Ito yung kapag pinindot, eh ica-call yung focus function
            and then sa loob nga nun ay ifofocus raw yung inputFocus na reference */}
            <button onClick={focus}>Focus</button>
        </>
    )


}