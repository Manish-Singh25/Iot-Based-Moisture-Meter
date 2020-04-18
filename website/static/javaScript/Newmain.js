var config = {
  apiKey: "AIzaSyAcZnLXatmTotGNkRkEjY1HeuUv0XkP0CA",
  authDomain: "mays-a01c6.firebaseapp.com",
  databaseURL: "https://mays-a01c6.firebaseio.com",
  projectId: "mays-a01c6",
  storageBucket: "mays-a01c6.appspot.com",
  messagingSenderId: "374113765309"
  };
  firebase.initializeApp(config);
// Reference messages collection

var path_retrive="";

var pointer_btn=10;
function next_btn(){
  pointer_btn= pointer_btn + 10;
  console.log(pointer_btn);
  ui(path_retrive);

}
function prev_btn(){
  pointer_btn= pointer_btn - 10;
  console.log(pointer_btn);
  if(pointer_btn < 10){pointer_btn = 10}
  ui(path_retrive);
}
var bt=0;

function submit_btn(){
var v =document.getElementById("myr").value;
path_retrive='/'+v; 
ui(path_retrive)
}

function path(){
var d = new Date();
var n = d.getMonth();
var z = d.getFullYear();
var Year= z - 1;
var Month= n + 1;
path_retrive='/'+Year+'/'+Month; 
ui(path_retrive)
}



function ui(path_retrive){
var messagesRef = firebase.database().ref(path_retrive).limitToLast(pointer_btn);
messagesRef.on('value',gotData,errData);
}
function gotData(data){
console.log(data.val());
var msg =data.val();
console.log(msg);
if (!msg)
{
  alert("Invalid Year/month");
  console.log(tab1);
}
else
{
var keys=Object.keys(msg);
if(pointer_btn > keys.length){pointer_btn = keys.length;}

var tab1='<table><thead><tr class="table100-head"><th class="column1">Humidity</th><th class="column2">Temperature</th><th class="column3">Moisture</th><th class="column4">Location</th><th class="column5">Season</th><th class="column6">Date and Time</th></tr></thead><tbody>';
for (var i = 0; i < 10; i++) {
  var k =keys[i];
    var now = msg[k].DateAndTime;
    var humidity = msg[k].humidity;
    var temp = msg[k].temp;
    var s1 = msg[k].moisture;
    var s2 = msg[k].location;
    var s3 = msg[k].season;

    
    tab1+='<tr><td class="column1">'+humidity+"</td>"+'<td class="column2">'+temp+"</td>"+'<td class="column3">'+s1+"</td>"+'<td class="column4">'+s2+"</td>"+'<td class="column5">'+s3+"</td>"+'<td class="column6">'+now+"</td>"+"</tr>";   //+"<td>"+now+"</td>"
}
tab1+='</tbody></table>';
document.getElementById("demo").innerHTML=tab1;
}

    
}
function errData(data){
console.log('Error');
console.log(err); 
}
