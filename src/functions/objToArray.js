
// takes an object of objects and turns into array of objects, assigning the key to the name of object within the array
export default function objToArray(objectOfObjects) {
    // initialize empty array
    let objArray = [];
    // loop through keys
    for (let i = 0; i < Object.keys(objectOfObjects).length; i++) {
        // add object to array
        objArray.push(objectOfObjects[Object.keys(objectOfObjects)[i]]);
        //capture key of object
        objArray[i]['name'] = Object.keys(objectOfObjects)[i];
    }
    
    return objArray;
}