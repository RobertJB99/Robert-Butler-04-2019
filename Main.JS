addEvent(
    document.getElementById('list'),
    'click',
    function () {
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

for(var i=0; i< object2.length; i+=1){
  var a = 0;
  var change = 1;
  if(object1[a].name == object2[i].name){
   change=0;
  }else if( a < object1[a].length-1 && change != 0 ){
    a+=1;
  }else{
    if (change = 1){
    object1.push(object2[i].name);
    }
    a=0;
    change=1;
}
 var output="<ul>";
        for (var i =0; i< object1.length; i+=1){
          output+= "<li>"+object1[i]+"</li>";
        }
     return(output+="</ul>");
  }
  
);
