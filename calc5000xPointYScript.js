	var entry = ""; sgn = "";
	var option = true;
	function clickStore() {
	option = true;
	document.getElementById("store").style.background='green';
	document.getElementById("recall").style.background='#777';
	}
	function clickRecall() {
	option = false;
	document.getElementById("recall").style.background='green';
	document.getElementById("store").style.background='#777';
	}
	function showVls() {
	var f = document.getElementById('display2');
		f.innerHTML = "";
		for(i in g){
		f.innerHTML += i + ": " + g[i].toPrecision(10) + "<br>";
		}
	}
	function storeOrRecall(i) {
	if(option){
	g[i] = s.X;
	showVls();
	}
	else
	s.X = g[i];
	showStack();
	}
	function showEntry(){
		var e = document.getElementById('entry');
        e.innerHTML = sgn + entry + "_";
	}
	function showStack() {
	var d = document.getElementById('display');
		d.innerHTML = "";
		for(i in s){
		d.innerHTML += i + ": " + s[i].toPrecision(10) + "<br>";
		}
	}
	// https://www.infoworld.com/article/2077176/using-javascript-and-forms.html
	function saveData(form) {
		for(i in s){
		form.savenums.value += i + ": "+ s[i] + ", ";
		}
		form.savenums.value = form.savenums.value.slice(0, -2) + "#";
		for(i in g){
		form.savenums.value += i + ": "+ g[i] + ", ";
		}
		form.savenums.value = form.savenums.value.slice(0, -2);
	}
	// https://stackoverflow.com/questions/3781142/jquery-or-javascript-how-determine-if-shift-key-being-pressed-while-clicking-an
	function listenForShiftKey(e){
    var evt = e || window.event;
		if (evt.shiftKey) {
			val = event.key;
		  if(val == "7"){
		  divi();
		  }
		} 
	}
	function KeyP() {
		var key = event.key;
		listenForShiftKey(key);
		if("0" <= key && key <= "9") {
			clickEntry(key);
		}
		else if(key == "."){
			clickEntry(".");
		}
		else if(key == "+"){
			plus();
		}
		else if(key == "-"){
			minus();
		}
		else if(key == "*" || key == "'"){
			mult();
		}
		else if(key == "/"){
			divi();
		}
		else if(key == "Enter"){
			enter();
		}
		else if(key == "Backspace"){
			ce();
		}
		else if(key == "Tab"){
			cs();
		}
		else if(key == "<"){
			chs();
		}
		else if(key == 'a'){
			  storeOrRecall('A');
		}
	    else if(key == 'b'){
			  storeOrRecall('B');
		}
		else if(key == 'c'){
			  storeOrRecall('C');
		}
		else if(key == 'd'){
			  storeOrRecall('D');
		}
		else if(key == 'e'){
			  storeOrRecall('E');
		}
		else if(key == 'f'){
			  storeOrRecall('F');
		}
		else if(key == 'g'){
			  storeOrRecall('G');
		}
		else if(key == 'h'){
			  storeOrRecall('H');
		}
	}
	function ce(){
	entry = "";
	sgn = "";
	showEntry();
	}
	function cs(){
	s.X = 0;
	s.T = 0;
	s.Y = 0;
	s.Z = 0;
	showStack();
	}
	function plus(){
		s.X = s.Y+s.X; s.Y = s.Z; s.Z = s.T;
      	  showStack();
	}
	function minus(){
		s.X = s.Y-s.X; s.Y = s.Z; s.Z = s.T;
      	  showStack();
	}
	function mult(){
		s.X = s.Y*s.X; s.Y = s.Z; s.Z = s.T;
      	  showStack();
	}
	function divi(){
		s.X = s.Y/s.X; s.Y = s.Z; s.Z = s.T;
      	  showStack();
	}
	function sin(){
		s.X = Math.sin(s.X);
      	  showStack();
	}
	function cos(){
		s.X = Math.cos(s.X);
      	  showStack();
	}
	function tan(){
		s.X = Math.tan(s.X);
      	  showStack();
	}
	function asin(){
		s.X = Math.asin(s.X);
      	  showStack();
	}
	function acos(){
		s.X = Math.acos(s.X);
      	  showStack();
	}
	function atan(){
		s.X = Math.atan(s.X);
      	  showStack();
	}
	function hyp(){
		s.X = Math.sqrt((Math.pow(s.X,2)+(Math.pow(s.Y,2))));
      	  showStack();
	}
	function sqrt(){
		s.X = Math.sqrt(s.X);
      	  showStack();
	}
	function logten(){
		s.X = Math.log10(s.X);
      	  showStack();
	}
	function logtw(){
		s.X = Math.log2(s.X);
      	  showStack();
	}
	function loge(){
		s.X = Math.log(s.X);
      	  showStack();
	}
	function etime(){
		s.X = Math.exp(s.X);
      	  showStack();
	}
	function powpow(){
		s.X = Math.pow(s.X, s.Y);
      	  showStack();
	}
	function tenupx(){
		s.X = Math.pow(10, s.X);
      	  showStack();
	}
	function pi(){
		s.X = Math.PI;
      	  showStack();
	}
	function eE(){
		s.X = Math.E;
      	  showStack();
	}
	function enter() {
		s.T = s.Z;
		s.Z = s.Y;
		s.Y = s.X;
		s.X = (sgn+entry)*1;
		showStack();
		entry = "";
		sgn = "";
		showEntry();
	}
	function clickEntry(ch) {
		entry = entry + ch;
        showEntry();
	}
	function chs(){
	if(sgn == "") {
		sgn = "-";
	}
	else if(sgn == "-") {
		sgn = "+";
	}
	else if(sgn == "+") {
	sgn = "-";
	}
	showEntry();
	}