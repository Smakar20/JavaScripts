//Creating deep clone of a given object.
function cloneObj(obj)
{
	var newObj = {};
	
	if(obj === null)
	{
		return null;
	}
	
	for(var i in obj)
	{
		if(typeof(obj[i]) === "object")
		{
			newObj[i] = cloneObj(obj[i]);
		}
		else
		{
			newObj[i] = obj[i];
		}
	}
	return newObj;
}

////// result //////
obj1 = {
    name: "Sohini",
    addr: {street: "Xyz Street",
           zip: 94010},
    comp: { name: "Abc",
            city: "SFO"}       
}


obj2 = cloneObj(obj1);
obj1.addr.zip = 12345;
console.log(obj2);