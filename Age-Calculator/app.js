// TASK  = Display : Age (Year, Month, Day, Hours , Seconds)

var age = prompt("Enter your date of birth : " );
var date = new Date(age);
var now = new Date();
var diff = now.getTime() - date.getTime() 
var totalyear = Math.floor(diff/(365*24*60*60*1000))
var totalmonths = Math.floor(diff/(12*24*60*60*1000))
var totaldays = Math.floor(diff/(1000*24*60*60))
var totalHours = Math.floor(diff/(1000*24*60))
var totalSeconds = Math.floor(diff/(1000))
alert(
    "Time passed since your birthday : " + "\n\n" +
    "Total years = " + totalyear + "\n" +
    "Total months = " + totalmonths + "\n" +
    "Total days = " + totaldays +"\n" +
    "Total hours = " + totalHours + "\n" +
    "Total Seconds = " + totalSeconds + "\n" 
)
