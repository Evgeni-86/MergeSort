let arr = [1,9,7,3,4,6,8,2,0,5,1,9,7,3,4,6,8,2,0,5]

function MergeSort(arr) {
        if (arr.length <= 1) {
            return arr
        }
        let arrDown = []
        let arrUp = []
        let pivotIndex = Math.floor(arr.length / 2)
        let pivot = arr[pivotIndex]
        for (let i = 0; i < arr.length; i++) {
            if (i == pivotIndex) {
                continue
            } else {
                if (arr[i] <= pivot) {arrDown.push(arr[i])}
                if (arr[i] > pivot) {arrUp.push(arr[i])}            
            }
        }
        return [...MergeSort(arrDown), pivot, ...MergeSort(arrUp)]
    }


console.log(MergeSort(arr))