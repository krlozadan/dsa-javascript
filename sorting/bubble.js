function bubbleSort(array) {

    let sorted;
    let rightEndIndex = array.length - 1;
    do {
        sorted = true;
        for (let i = 0; i < rightEndIndex; i++) {
            if (array[i] > array[i + 1]) {
                sorted = false;
                const temp = array[i + 1];
                array[i + 1] = array[i];
                array[i] = temp;
            }
        }
        rightEndIndex--;
    } while (!sorted);
}

const numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
bubbleSort(numbers);