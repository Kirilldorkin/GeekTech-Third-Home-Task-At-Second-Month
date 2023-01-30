const twoMass = (array1, array2) => {

    array1 = array1.length;
    array2 = array2.length;

    if (array1 > array2)
    {
        alert(`array1 > array2`)
    }

    else if (array2 > array1)
    {
        alert(`array1 < array2`)
    }

    else 
    {
        alert(`array1 = array2`)
    }
}

const massOne = [1, 2, 3, 4];
const massTwo = [1, 2, 3, 4, 5, 6, 7];

twoMass(massOne, massTwo);