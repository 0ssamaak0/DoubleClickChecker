var rcounter = 0;
var lcounter = 0;

var DateRI = new Date();
var DateLI = new Date();

// General elements
const clickBG = document.querySelector(".click-bg");

const reset = document.querySelector("#reset");

// Rigth and left elements
const numberR = document.querySelector(".number-r");
const numberL = document.querySelector(".number-l");

// Dobule click elements
const DDR = document.querySelector(".double-difference-r");
const DDL = document.querySelector(".double-difference-l");

// Double click counters
var DCCR = 0;
var DCCL = 0;

// Double click element counter
const DCCER = document.querySelector(".DCCER");
const DCCEL = document.querySelector(".DCCEL");

// General EventListeners

reset.addEventListener("click", function(){
    rcounter = 0;
    numberL.innerHTML= 0;
    DDL.innerHTML = 0;
    DCCEL.innerHTML = 0;
    DCCR = 0;
    DCCEL.classList.remove("DDCEL-on");
    
    lcounter = 0;
    numberR.innerHTML= 0;
    DDR.innerHTML = 0;
    DCCER.innerHTML = 0;
    DCCL = 0;
    DCCER.classList.remove("DDCER-on");
    

})



// Left Click trigger
clickBG.addEventListener("click", function(event){
    lcounter ++;
    numberL.innerHTML= lcounter;
    var DateLF = new Date();
    var difference = (DateLF - DateLI) / 1000;
    DDL.innerHTML  = difference + "s";
    if (difference < 0.1){
        DCCEL.classList.add("DDCEL-on");
        DCCL ++;
        DCCEL.innerHTML = DCCL;
        DCCEL.classList.toggle("changing2");
        setTimeout(function(){
            DCCEL.classList.toggle("changing2");
            },300);
    }
    // Animation
    numberL.classList.toggle("changing1");
    DDL.classList.toggle("changing2");
    
    setTimeout(function(){
        numberL.classList.toggle("changing1");
        DDL.classList.toggle("changing2");
    },300);

    DateLI = new Date();

})


// Right Click trigger
clickBG.addEventListener("contextmenu", function(event){
    event.preventDefault();
    rcounter ++;
    numberR.innerHTML= rcounter;
    var DateRF = new Date();
    var difference = (DateRF - DateRI) / 1000;
    DDR.innerHTML  = difference + "s";
    if (difference < 0.1){
        DCCER.classList.add("DDCEL-on");
        DCCR ++;
        DCCER.innerHTML = DCCR;
        DCCER.classList.toggle("changing2");
        setTimeout(function(){
            DCCER.classList.toggle("changing2");
            },300);
    }
    // Animation
    numberR.classList.toggle("changing1");
    DDR.classList.toggle("changing2");
    
    setTimeout(function(){
        numberR.classList.toggle("changing1");
        DDR.classList.toggle("changing2");
    },300);

    DateRI = new Date();

})
