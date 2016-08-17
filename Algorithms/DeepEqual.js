//Deep equal of two objects.
isEqual = true;
function Equal(obj1, obj2)
{
    if(obj1 === null || obj2 === null)
    {
        return false;
    }

    if(obj1 === obj2)
    {
        return true;
    }

    if(Object.keys(obj1).length !== Object.keys(obj2).length)
    {
        return false;
    }
    Object.keys(obj1).forEach(function(key){
 
        if(typeof(obj1[key]) == "object")
        {           
            isEqual = Equal(obj1[key], obj2[key]);
        }
        else if(obj1[key] !== obj2[key])
        {
            isEqual = false;
        }
    });
    return isEqual;
}

////------ test -------/////
obj1 = {
    name: "Sohini",
    addr: {street: "Xyz Ave",
           zip: 12345},
    comp: { name: "Abc",
            city: "SFO"}       
}

obj2 = {
    name: "Sohini",
    comp: { name: "Abc",
            city: "SFO"},
    addr: {street: "Xyz Ave",
           zip: 12345}               
}


console.log(Equal(obj1,obj2));