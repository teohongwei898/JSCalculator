	//setting values in text box functions//

  function run1() {
	document.calcform.result.value += "1"; }
	function run2() {
	document.calcform.result.value += "2"; }
	function run3() {
	document.calcform.result.value += "3"; }
	function runplus() {
	document.calcform.result.value += "+"; }
	function run4() {
	document.calcform.result.value += "4"; }
	function run5() {
	document.calcform.result.value += "5"; }
  function run6() {
	document.calcform.result.value += "6"; }
	function runsubtract() {
	document.calcform.result.value += "-"; }
	function run7() {
	document.calcform.result.value += "7"; }
	function run8() {
	document.calcform.result.value += "8"; }
  function run9() {
	document.calcform.result.value += "9"; }
	function runmult() {
	document.calcform.result.value += "*"; }
	function rundivide() {
	document.calcform.result.value += "/"; }
	function rundec() {
	document.calcform.result.value += ".";}



//clear screen function//
	function runclr() {
	document.calcform.result.value = null;}

//calculate function//
function getit()
	{
		var ans = document.calcform.result.value;
		
		document.calcform.result.value = ( new Function( 'return ' + ans ) )(); 
;
	}