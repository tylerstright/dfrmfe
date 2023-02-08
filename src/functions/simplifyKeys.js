// provide the function an object that has a bunch of keys.  then loop over the keys
export function simplifyKeys(obj) {
    let simplifiedObj = {};

    for (let key of Object.keys(obj)) {
        if (key.includes('.')) {
            // if theres a period, rename key
            let newKey = key.substring(key.lastIndexOf('.') + 1);
            simplifiedObj[newKey] = obj[key];
            continue;
        }
        // otherwise keep the same key
        simplifiedObj[key] = obj[key];
    }
    return simplifiedObj;
}