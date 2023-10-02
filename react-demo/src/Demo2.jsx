// NOTE:
// THIS IS A useEffect HOOK DEMO.
// yung useEffect na hook is pupwede natin tong maintindihan as just
// a side effect. Every time na may changes, ANY CHANGES, ginagamit to
// para mag execute ng another action. For example gusto natin na kapag 
// pinindot natin yung isang button, or may binabago tayo sa web, 
// eh may passive action na nangyayari.


import { useState, useEffect } from 'react'
import './App.css'

function Demo2() {

  // Nadiscuss na natin yung useState, 
  // useState which is yung pag-set ng values, and
  // initial value ng resType variable is 'posts'
  const [resType, setResType] = useState('Posts')
  


  // Ito naman yung useEffect hook wherein magdidisplay
  // ng 'render' sa console log, every time na may changes
  // na nangyayari sa value ng parameter which is 'resType'
  useEffect(() => {
    console.log('render')
  }, [resType])



  // Ito naman yung pangalawang example ng paggamit ng
  // useEffect. As usual, need natin ng useState for setting changes
  // initial value ng windowWidth is yung mismong width ng window
  const [windowWidth, setwindowWidth] = useState(window.innerWidth)


  // Then ito na yung useEffect wherein may event listener ang window,
  // which is in this case ang event listener niya ay 'resize',
  // meaning minomonitor niya kapag may event changes na nangyayari
  // sa sizing ng window. If meron ngang changes, automatically icacall
  // niya yung handleResize na function
  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, [])



  // Then sa handleResize naman na function, iseset niya yung value
  // ng setwindowWidth na variable based on sa current width value ng window
  const handleResize = () => {
    setwindowWidth(window.innerWidth)
  }


  // Ito yung html na makikita mo sa browser
  return (
    <>
    <br /> 
    <br />
    <br />
    <hr />
      <h2>This is a useEffect hook demo</h2>

      {/* Ito yung mga buttons na magseset ng 'resType' value kapag
      pinindot  */}
      <button onClick={() => setResType('Posts')}>Posts</button>
      <button onClick={() => setResType('Users')}>Users</button>
      <button onClick={() => setResType('Comments')}>Comments</button>

      {/* Ito yung resType variable wherein dinidisplay niya sa h3 tag
      yung value niya, sa useState na ginawa natin, ang initial value
      niya ay 'Posts' */}
      <h3>{resType}</h3> 

      <br />

      {/* Ito naman yung another example where in naka-display dito yung
      value na ginawa natin sa useState na ang initial value is yung
      mismong current width size ng window*/}
      <div>{windowWidth}</div>
      <h4>screen width size</h4>
      <br />
    </>
  )
  
}

export default Demo2
