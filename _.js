const _= {
    clamp (number,lower,upper) {
        const lowerClampedValue = Math.max(number, lower);
        const clampedValue = Math.min(lowerClampedValue,upper);
        return clampedValue;
    },

    inRange (number, start, end) {
        let nStart = start;
        let nEnd = end;

        if (typeof nEnd === "undefined" ) {
            nStart = 0;
            nEnd = start;
        } else if (start > end) {
            nStart = end;
            nEnd = start;
        }

        if (number >= nStart && number < nEnd) {
            return true;
        } else {
            return false;
        }
    },

    words (string) {
        return string.split(" ");
    },

    pad (string, length) {
        let specLength = length - string.length;
        let addSpacesLeft = "";
        let addSpacesRight = "";
        let newString = ""; 

        if (length <= string.length) {
            newString = string;
        } else {
            if (specLength % 2 !== 0) {
                //is odd
                addSpacesRight += " ";
                for (let i = 0; i < (specLength-1) /2 ; i++ ) {
                addSpacesLeft += " "; 
                addSpacesRight += " ";
                }
            } else {
                // is even
                for (let i = 0; i < specLength / 2; i++ ) {
                addSpacesLeft += " "; 
                addSpacesRight += " ";
                }
            }
            newString = addSpacesLeft + string + addSpacesRight;
        }  
        return newString;
    },

    has (obj, key) {
        if (typeof obj[key] !== "undefined") {
            return true;
        } else {
            return false;
        }
    },

    invert (obj) {
        const newObj = {};
        const valueArray = Object.values(obj);
        const keyArray = Object.keys(obj);

        for (let i = 0; i < valueArray.length; i++) {
            newObj[valueArray[i]] = keyArray[i];
        }
    return newObj;
    },

    findKey (obj, bool) {
        for(key in obj) {
            if (bool(obj[key]) === true) {
                return key;
            } else {
                return undefined;
            }
        }
    },

    drop (array, remove) {
        let newArray = [];

        if (typeof remove === "undefined") {
            for (let i = 1; i < array.length; i++) {
                newArray.push(array[i]);
            }
        } else {
            for (let i = remove; i < array.length; i++) {
                newArray.push(array[i]);
            }
        }
        return newArray;
    },

    dropWhile (array, func) {
        const cb = (element, index) => {
            return !func(element, index, array);
        };

        let dropNumber = array.findIndex(cb);
        let droppedArray = this.drop(array, dropNumber);

        return droppedArray;
    },

    chunk (array, size) {
        let blocks = [];
        let newArray = [];

        for (let i = 0; i < array.length; i++) {
            if (i > 0 && i % size === 0) {
                newArray.push(blocks);
                blocks =[];
            }
            blocks.push(array[i])
        }
        newArray.push(blocks);
        return newArray;
    }
}

