var makePersonList = function(){

    var persons = [], nextId = 1;
    function addTestData(){

        addPerson("Mads");
        addPerson("Jens");


    }

    function addPerson(name){

        persons.push({id: nextId++, name: name})

    }


    return {

        addPerson: function(name){

            addPerson(name);
        },
        getAll: function (){

            persons = [];
        },

        addTestData:function(){

            addTestData()
        }
    };

    module.exports = makePersonList();
    
}