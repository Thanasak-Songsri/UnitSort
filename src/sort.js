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
function mergeSort(arr, left, mid, right) {
    var n1 = mid - left + 1;
    var n2 = right - mid;
    var L = new Array(n1);
    var R = new Array(n2);
    console.log("L " + L.length);
    for (var i_1 = 0; i_1 < n1; i_1++)
        L[i_1] = arr[left + i_1];
    for (var j_1 = 0; j_1 < n2; j_1++)
        R[j_1] = arr[mid + 1 + j_1];
    var i = 0, j = 0;
    var k = left;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}
function mainSort(arr, left, right) {
    if (left >= right)
        return;
    var mid = Math.floor(left + (right - left) / 2);
    mainSort(arr, left, mid);
    mainSort(arr, mid + 1, right);
    mergeSort(arr, left, mid, right);
    return;
}
function merge(collection_1, collection_2, collection_3) {
    var result = __spreadArray(__spreadArray(__spreadArray([], collection_1, true), collection_2, true), collection_3, true);
    mainSort(result, 0, result.length - 1);
    return result;
}
console.log(merge([1, 2, 3], [4, 5, 6], [9, 8, 7]));
