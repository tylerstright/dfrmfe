// this function takes an array of keys and filters an array of objects, keeping only the provided keys
export function selectKeys(keyArray) {
    return function (obj) {
        const newObj = {};
        keyArray.forEach(key => {
            newObj[key] = obj[key];
        });
        return newObj;
    }
};
