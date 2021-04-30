let types = ["a", 1, 3, true, "b" ];

let type_array = [];
function sortTypes(types) {
    for (let i=0; i < types.length; i++) {
        type_array[i] =  typeof(types[i])
    }
    let type_array_sort = [...new Set(type_array)];
    let type_object = {} ;

    for (let i = 0; i < type_array_sort.length; ++i) {
        type_object[type_array_sort[i]]= [];
    }

        for (let i = 0 ; i< types.length; i++) {
            for (let q = 0; q < Object.keys(type_object).length; q++) {
                if (`${Object.keys(type_object)[q]}` === typeof(types[i])) {
                    type_object[Object.keys(type_object)[q]].push(types[i]); 
                }
            }
        }
    console.log(type_object)
}

sortTypes(types)
