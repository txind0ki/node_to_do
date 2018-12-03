
const description={
    demand: true,
    alias: 'd',
    desc: 'description of to do task'

};

const completed={
        default: true,
        alias: 'c',
        desc: 'flag it as pending or done'
};

const opts_new = {
    description
};


const opts_update = {
    description,
    completed
};

const opts_delete = {
    description
};

//same effect....
// const argv = require('yargs')
//     .command('new', 'create new TO DO task',opts_new)
//     .command('update', 'update status of TO DO task',opts_update)
//     .command('delete', 'delete todo task', opts_delete)
//     .help()
// .argv;


const argv = require('yargs')
    .command('new', 'create new TO DO task',{
        description
    })
    .command('update', 'update status of TO DO task',{
        description,
        completed
    })
    .command('delete', 'delete todo task', {
        description
    })
    .help()
.argv;

module.exports = {//we need to export it
    argv
}   
