function dealOfTheDay()
{
    //set the date we're counting down to
    var countDownDate=new Date("July 22, 2022 00:00:00").getTime();

    //update the count down every 1 second
    var x = setInterval(function()
    {

    //Get todays date and time
    var now=new Date().getTime();  //current time
    
    //Find the distance b/w now and the count down date
    var distance=countDownDate - now;  //msec----876394364797

    //document.write(distance+"<br/>");
    //Time calculations for days, hours, minutes and seconds
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) /1000);


    for (var i=0;i<document.getElementsByClassName("demo").length; i++)
    {
        document.getElementsByClassName("demo")[i].innerHTML=days+"days"+hours+"h"+minutes+"m"+seconds+"s";
       
    }

    //output the result in an element with id="demo"
    document.getElementByclassName("demo").innerHTML=days+"days";

    //if the count down is over ,write some text
    if (distance<0){
        clearInterval(x); //stop setinterval functionality
        document.getElementByclassName("demo").innerHTML="OFFER EXPIRED";
}


},1000);
    

}
















