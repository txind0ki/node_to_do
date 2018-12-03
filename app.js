const argv = require('./config/yargs').argv;
var colors = require('colors');

//console.log('argv:', argv);
//console.log('argv_desc:', argv.description);


const toDo = require('./to_do/to_do');


let command = argv._[0];

switch(command){

    case 'new':
        let task = toDo.newTask(argv.description);
        console.log(task);
    break;

    case 'list':
        let list = toDo.getList();
        for(let task of list){
            console.log('============TODO==========='.green);
            console.log(task.description);
            console.log('estado: ',task.complete);
            console.log('==========================='.green);
        }

    //console.log('list TO DO...');
    break;

    case 'update':
        
        let updated = toDo.update(argv.description, argv.completed);

        console.log(updated);
    
    
    break;


    case 'delete':
        
        let deleted = toDo.delete_record(argv.description);
        
        console.log(deleted);
    
    break;


    default:
        console.log('invalid command');

}
