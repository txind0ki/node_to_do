const fs = require('fs');


let listToDo = [];


const saveDB = () => {

    let data = JSON.stringify(listToDo);

    fs.writeFile('db/data.json',data,(err) => {

        if (err) throw new Error ('unable to save file') 

    });


}

const openDB = () => {

    try{
        listToDo = require('../db/data.json');
    } catch(error){
        listToDo = [];
    }
    
    //console.log(listToDo);

}

const newTask = (description) => {

    openDB();

    let toDoTask = {//objeto
        description,
        complete: false
    };

    listToDo.push(toDoTask);

    saveDB();

    return toDoTask;//minimal feedback
}

const getList = () => {

    openDB();

    return listToDo;

}

const update = (description, status = true) =>{

    openDB();

    let index =  listToDo.findIndex( task=> task.description === description);

    if(index >= 0) {//index is gonna be pointing to the record (if exist) o show "-1" if not found
        listToDo[index].complete = status;
        saveDB();
        return true;
    }else{
        return false;
    }
}

const delete_record = (description) =>{

    openDB();


    let newList = listToDo.filter( task => task.description !== description);

    if(listToDo.length === newList.length)
        return false;
    else{
        listToDo = newList;
        saveDB();
        return true;
    }
    // let index =  listToDo.findIndex( task=> task.description === description);

    // if(index >= 0) {//index is gonna be pointing to the record (if exist) o show "-1" if not found
        
    //     console.log(delete listToDo[index]);
    //     console.log('listToDo:', listToDo);
    //     saveDB();
    //     return true;
    // }else{
    //     return false;
    // }


}

module.exports = {
    newTask,
    getList,
    update,
    delete_record
}