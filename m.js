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
	

	

}
let m = new M();
console.log(m.sum("3","3"));