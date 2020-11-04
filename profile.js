var totalCal=document.querySelector('.totalCaloryCal');
var reqCal=document.querySelector('.reqCal');
var userName=document.querySelector('.userName');
var name;
var age = 0;

document.addEventListener('DOMContentLoaded', calTotal);
document.addEventListener('DOMContentLoaded', postNameReqCal);

function postNameReqCal(){
    getNameAgeLocal();
    reqCal.innerHTML=getReqCal(age);
    userName.innerHTML=name;
}

function getReqCal(age){
    if(age<4)
    return 1000;
    if(age>=4 && age<9)
    return 1400;
    if(age>=9 && age<13)
    return 1800;
    if(age>=13 && age<19)
    return 2400;
    if(age>=19 && age<30)
    return 2600;
    if(age>=31 && age<51)
    return 2400;
    if(age>=51)
    return 2200;
}


function calTotal(){
    var total=0;
    let entries;
    if(localStorage.getItem('total')===null){
        total=0;
    }
    if(localStorage.getItem('entries')===null){
        entries=[];
    }
    else{
        entries = JSON.parse(localStorage.getItem('entries'));
    }
    for(i=0; i<entries.length; i++){
        total= parseFloat(total)+ parseFloat(entries[i].calory);
    }
    localStorage.setItem('total', JSON.stringify(total));
    totalCal.innerHTML = JSON.parse(localStorage.getItem('total'));
}

function getNameAgeLocal(){
    let nameAge= JSON.parse(localStorage.getItem('nameAge'));
    if(nameAge){
    name=nameAge[0];
    age=nameAge[1];
    console.log(name+""+age);
}
}

