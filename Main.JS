
    function names(){
var object1 =[
{name:'Matt Johnson'},
{name:'Bart Paden'},
{name:'Ryan Doss'},
{name:'Michael Spangler'}
];

var object2 =[
{name:'Matt Johnson'},
{name:'Bart Paden'},
{name:'Jordan Heigle'},
{name:'Tyler Viles'}
];


for(var i =0; i< object2.length; i+=1){
 var change = 1;
 var a=0;
 while(change!=0 && a < object2.length){
  if(object1[a].name == object2[i].name){
   change=0;
  }else {
    a+=1;
  }
 }
  if(change==1){
    object1.push(object2[i])
  }

   
 

  
}
 var output="<ul>";
        for (var i =0; i< object1.length; i+=1){
          output+= "<li>"+object1[i].name+"</li>";
        }
     output+="</ul>";
  document.getElementById("listLocation").innerHTML = output;
    }
