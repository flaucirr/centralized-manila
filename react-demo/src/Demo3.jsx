// NOTE:
// THIS IS A useMemo HOOK DEMO.
// yung useMemo na hook is para maconserve and maoptimize yung
// space and performance ng system, ginagamit to para hindi
// mag paulit-ulit ng run yung isang function kahit wala namang
// changes. Irurun niya lang yung function if may changes na mangyari,
// and kung wala naman, retain lang kung ano yung previous state.


import React, {useState, useMemo} from 'react';

function Demo3() {

// Pag-set to ng number na nakalagay sa 'OUTPUT: ' starting siya as 0
const [number, setNumber] = useState(0)



// Pag-set to ng number ng 'COUNTER: ', starting siya as 0
const [counter, setCounter] = useState(0);



// Ito na yung useMemo, Magrurun lang uli to kapag nagchange yung
// [number] na parameter, para ma-optimize yung performance and
// hindi maging paulit ulit nagrurun kahit wala namang changes
const squaredNum = useMemo(()=> {
	return squareNum(number);
}, [number])




// Ito yung magsstore ng value na in-input mo sa input box,
// kada may ieenter ka na number, isstore niya sa variable
// na setNumber, which is ginawan natin ng useState sa taas,
// na yung setNumber ang magrereplace sa number na variable
const onChangeHandler = (e) => {
	setNumber(e.target.value); // target is pointer ng element (kung saang element nakalagay yung onChangeHandler)
}




// Pag pinindot mo yung 'Counter ++' na button, magdadagdag
// lang siya ng 1 sa 'Counter: ', may useState rin to
const counterHander = () => {
	setCounter(counter + 1);
}




// Ito yung function para mag square ng number, like 5 squared is 25
// then nakadepende yung icacalculate niya na number sa pinasa na
// parameter which is yung 'squareNum(number)'
// 
function squareNum(number){
	console.log("Squaring will be done!");
	return Math.pow(number, 2);
}




// Ito yung html na makikita mo sa browser,
return (
	<div>
		<hr />
		<h2>This is a useMemo hook demo</h2>

 {/* may input box, which is ang value niya is nakadepende
 sa useState na ginawa natin sa taas which is 0.
 and then onChange naman is tatawagin niya yang function
 every time na may changes na nangyayari sa loob ng input box. */}
	<input type="number" placeholder="Enter a number"
		value={number} onChange={onChangeHandler}>
	</input>


{/* ito naman yung pagdisplay ng squared na number na ininput, 
nakadepende yung value na nakadisplay jan sa value ng 'squaredNum'
na variable/irereturn ng function.
then may onClick rin para tawagin yung function na yan which is ginawa
natin kanina para mag add lang ng 1 sa 'Counter: ' */}
	<div>OUTPUT: {squaredNum}</div>
	<button onClick= {counterHander}>Counter ++</button>
	<div>Counter : {counter}</div>
	</div>
);
}


export default Demo3;
