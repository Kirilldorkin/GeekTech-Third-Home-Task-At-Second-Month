const whoBiggest = (number1, number2) => {
    if (number1 > number2)
    {
        alert(`${number1} > ${number2}`)
    }

    else if (number2 > number1)
    {
        alert(`${number1} < ${number2}`)
    }

    else 
    {
        alert(`${number1} = ${number2}`)
    }
}

whoBiggest(3, 4);