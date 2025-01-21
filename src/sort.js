"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = merge;
function mainSort(arr, left, mid, right) {
    var num1 = mid - left + 1;
    var num2 = right - mid;
    var setLeft = new Array(num1);
    var setRight = new Array(num2);
    for (var i_1 = 0; i_1 < num1; i_1++)
        setLeft[i_1] = arr[left + i_1];
    for (var j_1 = 0; j_1 < num2; j_1++)
        setRight[j_1] = arr[mid + 1 + j_1];
    var i = 0, j = 0;
    var k = left;
    while (i < num1 && j < num2) {
        if (setLeft[i] <= setRight[j]) {
            arr[k] = setLeft[i];
            i++;
        }
        else {
            arr[k] = setRight[j];
            j++;
        }
        k++;
    }
    while (i < num1) {
        arr[k] = setLeft[i];
        i++;
        k++;
    }
    while (j < num2) {
        arr[k] = setRight[j];
        j++;
        k++;
    }
}
function merge(collection_1, collection_2, collection_3) {
    var result = __spreadArray(__spreadArray(__spreadArray([], collection_1, true), collection_2, true), collection_3, true);
    var round = result.length;
    for (var size = 1; size < round; size = 2 * size) {
        for (var left = 0; left < round - 1; left += 2 * size) {
            var mid = Math.min(left + size - 1, round - 1);
            var right = Math.min(left + 2 * size - 1, round - 1);
            mainSort(result, left, mid, right);
        }
    }
    return result;
}
console.log(merge([1, 2, 3], [4, 5, 6], [9, 8, 7]));
