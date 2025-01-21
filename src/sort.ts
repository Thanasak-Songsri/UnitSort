
function mainSort(arr: number[], left: number, mid: number, right: number) {
    let num1 = mid - left + 1;
    let num2 = right - mid;

    let setLeft = new Array(num1);
    let setRight = new Array(num2);

    for (let i = 0; i < num1; i++)
        setLeft[i] = arr[left + i];
    for (let j = 0; j < num2; j++)
        setRight[j] = arr[mid + 1 + j];

    let i = 0, j = 0;
    let k = left;

    while (i < num1 && j < num2) {
        if (setLeft[i] <= setRight[j]) {
            arr[k] = setLeft[i];
            i++;
        } else {
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

export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    let result: number[] = [...collection_1, ...collection_2, ...collection_3]

    let round = result.length;
    

    for (let size = 1; size < round; size = 2 * size) {
        for (let left = 0; left < round - 1; left += 2 * size) {

            let mid = Math.min(left + size - 1, round - 1);
            let right = Math.min(left + 2 * size - 1, round - 1);
            
            mainSort(result, left, mid, right);
        }
    }

    return result;
  }  

  console.log(merge([1,2,3],[4,5,6],[9,8,7]))