const root_Div = document.querySelector('.parent');
console.log(root_Div);
const heading = document.querySelector('.heading')
const listed = document.querySelector('.listed')


const get_input = document.createElement('form')
get_input.classList.add('getvalues')
get_input.innerHTML=`
<input type="text" id="forms" name="getVal" placeholder="Enter an Items">
<button type="submit" class="addButton">ADD</button>`
root_Div.prepend(get_input);
root_Div.prepend(heading)
const addButton = document.querySelector('.addButton');
addButton.addEventListener('click',(add)=>{

    //add
    const getData = document.querySelector('#forms');
    add.preventDefault();
    const box = document.createElement('div');
    box.classList.add("box")
    const storeList = document.createElement('li');
    storeList.classList.add('lists')
    const storeData = getData.value;
    storeList.append(storeData)
    box.append(storeList);
    box.append(storeList);
    listed.append(box);

    //remove
    const removeBtn = document.createElement('button');
    removeBtn.setAttribute('type','submit')
    removeBtn.classList.add('removeButton')
    removeBtn.innerText="X";
    box.append(removeBtn);
    removeBtn.addEventListener('click',(remove)=>{
        storeList.remove()
        removeBtn.remove()
    })
})

