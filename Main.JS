addEvent(
    document.getElementById('list'),
    'click',
    function () {
const object1 [
{name:'Matt Johnson'},
{name:'Bart Paden'},
{name:'Ryan Doss'},
{name:'Michael Spangler'}
]

const object2 [
{name:'Matt Johnson'},
{name:'Bart Paden'},
{name:'Jordan Heigle'},
{name:'Tyler Viles'}
]

for(var i=0; i< object2.length; i+=1){
  var a = 0;
  var switch = 1;
  if(object1[a].name == object2[i].name){
   switch=0;
  }else if(object1[a].name != object2[i].name || a < object[a].length-1 || switch != 0 ){
    a+=1;
  }else{
    if (swithch = 1){
    object1.push(object2[i+a].name);
    }
    a=0;
    switch=1;
}
 }
);
