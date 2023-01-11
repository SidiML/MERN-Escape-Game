function isObjectOrIsArrayOfObjects(data){
    if(data === undefined){
        return "data Rejected because undefined"
    }else if(isObject(data)){
        return "isObject"
    }else if(isArrayOfObjects(data) === "ArrayOfObject" || isArrayOfObjects(data) === "ArrayOfObject(s)" ){
        return "isArrayOfObjects"
    }
}; const isObject = (data)=>{
        if(data.constructor.name === "Object"){
            return true
        }else{
            return false
        }
    }
//    const isTableau = (data)=>{
    //     if(data.constructor.name === "Array"){
    //         return true
    //     }else{
    //         return false
    //     }
    // }
   const isArrayOfObjects = (data)=>{
        if(data.length < 0 || data.length == 0){
            return false
        }else if(data.constructor.name === "Array" && data.every(i => i.constructor.name === "Object")){
            if(data.length == 1){
                return "ArrayOfObject"
            }else{
                return "ArrayOfObject(s)"
            }

        }else{
            return false
        }
   }

module.exports = {isObjectOrIsArrayOfObjects, isObject, isArrayOfObjects}