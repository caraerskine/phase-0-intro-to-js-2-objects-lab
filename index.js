// Write your solution in this file!
const employee = {
        firstName: "Max",
        lastName: "Johnson",
        streetAddress: "4 Lewis Ct.",
        city: "New Brunswick",
        state: "NJ",
        zipCode: "08816",
};

function updateEmployeeWithKeyAndValue(obj, key, value){
     const newObj= {...obj};
     newObj[key] = value;

     return newObj;

    }    
    
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    console.log(obj, key, value)   
    obj[key] = value;
    console.log(obj)
    return obj;
   
   }

   function deleteFromEmployeeByKey (obj, key){
       console.log(obj, key)
       const newObject = {...obj};
       delete newObject [key]
       return newObject;
    }

    function destructivelyDeleteFromEmployeeByKey (obj, key){
        console.log(obj, key)
        delete obj[key]
        return obj;
    }