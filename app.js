
//selectors
var foodName= document.querySelector('#foodName');
var caloryIntake=document.querySelector('#caloryIntake');
var addButton= document.querySelector('#btn');
var lists=document.querySelector('.list');
var totalCal=document.querySelector('.totalCaloryCal');

//Event Listeners
addButton.addEventListener('click', addEntry);
lists.addEventListener('click', deleteEntry);

//Functions
function addEntry(event){
    //to prevent form from submitting
    event.preventDefault();
    //to create below html structure to post the entries on the page
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
    col1.innerHTML = foodName.value;

    //3. create div to render entered calory intake
    const col2= document.createElement("div");
    col2.classList.add('col', 'entry');
    col2.innerHTML = caloryIntake.value;

    //4. create div to render delete button
    const col3= document.createElement("div");
    col3.innerHTML='<i class="fas fa-trash-alt"></i>';
    col3.classList.add('deleteButton');

    //5. assemble these divs in html structure
    entryRow.appendChild(col1);
    entryRow.appendChild(col2);
    entryRow.appendChild(col3);
    lists.appendChild(entryRow);

    //clear input box values
    foodName.value="";
    caloryIntake.value="";
}

function deleteEntry(e){
 console.log(e.target);
 var item = e.target;
 if(item.classList[0]=='deleteButton'){
     var deleteRow = item.parentElement;
     deleteRow.remove();
 }
}