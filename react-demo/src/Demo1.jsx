// NOTE:
// THIS IS A useState HOOK DEMO.
// yung useState na hook is ito yung isa sa pinaka-useful na hook
// sa react. Madalas tong ginagamit since ang function nito is para
// mag set ng changes sa DOM or sa mismong html.
// may dalawang parameter to which is yung [original, setter].
// sa react kasi, may tinatawag tayong virtual DOM which is doon muna
// nag-rerender yung changes na ginagawa natin sa html before sa actual
// na html (which is yung sa browser na).
// sa actual DOM (actual html), ang nakikita na natin jan is yung original
// parameter na mismo, while sa react na gumagamit ng virtual DOM, yung setter
// na parameter ang binabago and tsaka palang icocompare sa actual DOM kapag
// same or not. If same naman ang virtual DOM sa actual DOM, walang rendering
// (pag-execute/display ng html sa browser) na nangyayari, but if sa pagcompare ng
// dalawa, ay hindi match, doon na may rendering na mangyayari, and iooverride ng
// virtual DOM yung laman ng actual DOM. Which means kung ano yung nasa virtual DOM
// is ayun yung madidisplay sa actual DOM.

// para saan nga ba to? bakit may virtual and actual DOM pa rito?
// ayan kasi yung pinaka-feature ng react, kung iisipin mo, ang usual kasi
// na nangyayari kapag nagdedevelop ng website, diba kapag may changes tayong
// ginagawa eh nirerefresh natin lagi yung mismong page para makita yung
// actual changes na ginawa natin? imagine ilang daan or libong components ang meron
// sa website mo, lalo pa kung may animations, edi ang mangyayari dun, every time
// na nagsasagawa ka ng changes kahit isang letter pa yan, irerefresh mo buong page, which
// means magloloading and re-render lahat ng elements ng website mo. Very inefficient
// yun, kaya may virtual DOM na feature ang react para HINDI LAHAT ng changes ay
// ire-render sa mismong actual DOM or sa website mo, kundi yung mga changes lang.
// May comparison every time na nangyayari sa actual DOM and virtual DOM, and ang irerender
// lang ng react is yung differences, and retain lang yung mga wala namang changes.
// So that means mas optimized and efficient yung rendering ng web.


import { useState } from 'react'
import './App.css'

function Demo1() {

  // Ito yung pagset ng value na nakalagay sa variable na count,
  // ginagamitan to ng useState hook para sa pag set ng panibagong
  // values, in this case '0' ang value niya
  const [count, setCount] = useState(0)



  // Ito naman yung function para sa pag minus ng value ng count,
  // in this case -1 yung ibabawas.
  // Yung panibagong value na na-minus is magsstore sa setCount na
  // variable which is ginawan natin ng useState para siya
  // ang mag set sa value ng count na variable.
  // Ibig sabihin, every time na tinatawag ang function na to,
  // nagseset ng panibagong value ang count na variable.
  function decCount() {
    setCount(prevCount => prevCount - 1)
  }



  // Same lang to sa decCount, but dito, add 1 naman.
  function incCount() {
    setCount(prevCount => prevCount + 1)
  }



  // Ito yung html na makikita mo sa browser, lahat ng
  // nakapaloob sa return
  return (
    <>
    <hr />
      <h2>This is a useState hook demo</h2>
    
      {/* Ito yung button sa pag-call ng decCount function */}
      <button onClick={decCount}>-</button>


      {/* Ang nakadisplay dito is yung value ng 'count' which is
      sa ginawa nating useState, ang initial value niya ay '0'.
      Ito yung pinaka-variable na pagseset-an ng panibagong values. */}
      <span>{count}</span>


      {/* Ito naman yung button sa pag-call ng incCount function */}
      <button onClick={incCount}>+</button>
    </>
  )
}

export default Demo1
