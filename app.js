

const foodName= document.querySelector('#foodName');
const caloryIntake=document.querySelector('#caloryIntake');
const addButton= document.querySelector('#btn');
const lists=document.querySelector('.list');
const message=document.querySelectorAll('.error');


//Event Listeners
document.addEventListener('DOMContentLoaded', getList);
addButton.addEventListener('click', addEntry);
lists.addEventListener('click', deleteEntry);
foodName.addEventListener('change', function(){
    message[0].style.display="none";
});

caloryIntake.addEventListener('change', function(){
    message[1].style.display="none";
}); 

//Functions
function addEntry(event){
    //to prevent form from submitting
    event.preventDefault();
    //errorMessage
    foodName.addEventListener('invalid', showError(event, foodName.value, 0));
    caloryIntake.addEventListener('invalid', showError(event, caloryIntake.value, 1));
    //to create below html structure
    let addObj={food: foodName.value, calory: caloryIntake.value};
    
    if(foodName.value && caloryIntake.value){
    saveLocalList(addObj);
    createStructure(addObj);
    }
    //clear input box values
    foodName.value="";
    caloryIntake.value="";
}
function showError(event, value, i){
    if(!value)
    message[i].style.display="block";
}

function createStructure(data){
    //to create html structure to post the entries on the page
                //     <div class="row">
                //         <div class="col entry">Pasta</div>
                //         <div class="col entry">240</div>
                //         <div class="deleteButton"><i class="fas fa-trash-alt"></i></div>
                //     </div>
    
    //1. create 'row' div
    const entryRow= document.createElement("div");
    entryRow.classList.add('row');

    //2. create div to render entered food name
    const col1= document.createElement("div");
    col1.classList.add('col', 'entry');
    col1.innerHTML = data.food;

    //3. create div to render entered calory intake
    const col2= document.createElement("div");
    col2.classList.add('col', 'entry');
    col2.innerHTML = data.calory;

    //4. create div to render delete button
    const col3= document.createElement("div");
    col3.innerHTML='<i class="fas fa-trash-alt"></i>';
    col3.classList.add('deleteButton');

    //5. assemble these divs in html structure
    entryRow.appendChild(col1);
    entryRow.appendChild(col2);
    entryRow.appendChild(col3);
    lists.appendChild(entryRow);
    
}



function deleteEntry(e){
 console.log(e.target);
 let item = e.target;
 if(item.classList[0]=='deleteButton'){
     let deleteRow = item.parentElement;
     deleteRow.remove();
     removeLocalEntry(deleteRow);
 }
}


function saveLocalList(entry){
    let entries;
    //Check if we have already in local storage
    if(localStorage.getItem('entries')===null){
        entries=[];
    }
    else{
        entries = JSON.parse(localStorage.getItem('entries'));
    }
    entries.push(entry);
    localStorage.setItem('entries', JSON.stringify(entries));

}

function getList(){
    let entries;
    if(localStorage.getItem('entries')===null){
        entries=[];
    }
    else{
        entries = JSON.parse(localStorage.getItem('entries'));
    }
    entries.forEach(function(entry){
        createStructure(entry);
    })
}

function removeLocalEntry(entry){
    let entries;
    if(localStorage.getItem('entries')===null){
        entries=[];
    }
    else{
        entries = JSON.parse(localStorage.getItem('entries'));
    }
    const listFood= entry.children[0].innerHTML;
    let listIndex;
    for(i=0; i<entries.length; i++){
        if(entries[i].food==listFood)
        listIndex=i;
    }
    entries.splice(listIndex, 1);
    localStorage.setItem('entries', JSON.stringify(entries));

}

