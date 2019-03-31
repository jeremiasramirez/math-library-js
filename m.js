class M {

	  sum(a,b){
		a=parseInt(a);
		b=parseInt(b);

		if( ( a !== "" ) && ( b !== "" ) || (a!==undefined) ){
			return a + b;
		}
		else{
			console.error("Require 1 value");
		}

	}
	elev(a,b){
		a=parseInt(a);
		b=parseInt(b);

		if( ( a !== "" ) && ( b !== "" ) || ( a !== undefined ) ){
			return Math.pow(a,b);
		}
		else{
			console.error("Require 1 value");
		}
	} 
	
}
let m = new M();
console.log(m.elev("2","3"));