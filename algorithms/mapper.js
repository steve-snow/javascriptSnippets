// Arra of strings
// Outp

/**
 * An e-commerce site tracks the purchases made each day. The product that is purchased the most one day is the featured product for the following day. If there is a tie for the product purchased most frequently, those product names are ordered alphabetically ascending and the last name in the list is chosen.

Example: products = [‘redShirt’, ‘greenPants’, ‘redShirt’, ‘orangeShoes’, ‘blackPants’, ‘blackPants’]

 * 
 * 
 */


// Time Complexity:
// Space Complexity:
function findMostMap(arr) {
    let largestKey;
    let largestVal = 0;
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        if(map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
        } else {
            map.set(arr[i], 1);
        }
    }
    console.log(map);

    let currentVal;
    for(let keyValue of map) {
        // console.log(keyValue);
        // currentVal = map.get(keyValue).key;

        // console.log("Success");
        // console.log(currentVal);
        currentVal = keyValue[1];

        if(currentVal > largestVal) {
            largestVal = currentVal;
            largestKey = keyValue[0]; 
        } else if (currentVal == largestVal && keyValue[0] < largestKey) { // not fully complete in that it won't work in lower case vs. upper case
            // see ascii table
            largestVal = currentVal;
            largestKey = keyValue[0];
        }

    //     if(currentVal > largestVal) {
    //         largestVal = currentVal;
    //         largestKey = key; 
    //     } else if ((currentVal == largestVal && key < largestKey)) {
    //         largestVal = currentVal;
    //         largestKey = key;
    //     }
    }

    return largestKey;
}

function main() {
    let products = ['redShirt', 'greenPants', 'redShirt', '', '', '', ]
    console.log(findMostMap(["Green Pants", "Black Shirt", "Black Shirt", "Green Pants", "Red Skirt", "Purple Shoes", "Blue Shirt", ]));
}

main();

