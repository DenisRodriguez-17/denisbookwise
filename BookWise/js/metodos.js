let i;
let c = 1;
let cp = 0;
let residuo = 0;
i = prompt("Seleccione algún número");

do{
	residuo = i % c;

	if(residuo == 0)
		cp++;
	c++;

}while(c <= i);
if(cp == 2)
	document.write("<b>Es primo </b>"+i);
else
	document.write("<b>No es primo </b>" + i);
const Arreglo(imagen){
	let Arra=[];
for(let j = 0; j < 1; j++)
	Arra[i]=imagen;
for(let j = 0; j < 1; j++)
	document.write(Arra[i]);

}
Arreglo(7);