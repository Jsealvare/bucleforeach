const letters=["a","b","c","d"];
//con funciones por expresion 
const f=function() {
  console.log("un elemento.");
};
letters.forEach(f);

//con funciones anonimas 
letters.forEach(function(){
  console.log("un elemento");
});

//con funciones feclecha 
letters.forEach(()=>console.log("un elemento"));
