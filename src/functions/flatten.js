export default function flatten(data, response = {}, flatKey = "", onlyLastKey = false) {
    for (const [key, value] of Object.entries(data)) {
      let newFlatKey;
      if (!isNaN(parseInt(key)) && flatKey.includes("[]")) {
        newFlatKey = (flatKey.charAt(flatKey.length - 1) == "." ? flatKey.slice(0, -1) : flatKey) + `[${key}]`;
      } else if (!flatKey.includes(".") && flatKey.length > 0) {
        newFlatKey = `${flatKey}.${key}`;
      } else {
        newFlatKey = `${flatKey}${key}`;
      }
      if (typeof value === "object" && value !== null && Object.keys(value).length > 0) {
        flatten(value, response, `${newFlatKey}.`, onlyLastKey);
      } else {
        if(onlyLastKey){
          newFlatKey = newFlatKey.split(".").pop();
        }
        if (Array.isArray(response)) {
          response.push({
            [newFlatKey.replace("[]", "")]: value
          });
        } else {
          response[newFlatKey.replace("[]", "")] = value;
        }
      }
    }
    return response;
  }
