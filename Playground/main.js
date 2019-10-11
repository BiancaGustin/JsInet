console.log("Starting Javascript");
var myname="Bianca";
console.log(myname);
var age=22;
console.log(age);
var ignasiAge=32;
console.log(ignasiAge);
var agediff=age-ignasiAge;
console.log(agediff);

if(age > 21)
{
    console.log("you are older than 21");
}
else
{
    console.log("you are not older than 21");
}
if(agediff==0)
{
    console.log("you have the same age as Ignasi");
}
else if(agediff<0)
{
    console.log("Ignasi is older than you");
}
else if(agediff>0)
{
    console.log("Ignasi is younger than you");
}