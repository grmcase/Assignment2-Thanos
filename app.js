var number = 0;

function eleMaker (name,val,catchphrase){
    var ele = document.createElement("button");
    // create element in the html
    ele.innerHTML=name;
    ele.style="margin:2px";
    //inside that element - what text do want to display
    //parameter - data needed for the function to run
    ele.addEventListener("click", function (){
        increase(val, catchphrase);
    })
    document.body.querySelector(".main").appendChild(ele);
//    smaller element inside bigger element
}

function increase (val, catchphrase){
    number = number+val;
    document.body.querySelector(".number").innerHTML="Thanos Damage:"+number+" "+catchphrase;
}


document.body.querySelector(".clicker").addEventListener("click",function (){
    //had to give the listener a type 51:00, listen for click
    document.body.querySelector(".main").innerHTML="";
    eleMaker("Captain America", 2, "Pow!");
//name is the parameter
    eleMaker("Superman",3,"Bang!");
    eleMaker("Captain Crunch",5, "Bob Saget!");
    eleMaker("Storm",1, "Smile!");

});

document.body.querySelector(".clicker2").addEventListener("click",function (){
    //had to give the listener a type 51:00, listen for click
    document.body.querySelector(".main").innerHTML="";
    document.body.querySelector(".number").innerHTML="";
    number=0;
});

//how do I get it to erase one set of elements and replace it?