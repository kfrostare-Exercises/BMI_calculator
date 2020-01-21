const calculateMetricBMI = (weight, height) => {
    let result
    result = weight / ((height / 100) * (height / 100))
    return result.toFixed(2)
} 

const getBMIClassification = (value) => {
    if (value < 18.5) {
        return "underweight"
    }
    else if (value < 25) {
        return "normal weight"
    }
    else if (value < 30) {
        return "overweight"
    }
    else if (value < 35) {
        return "obesity class 1"
    }
    else if (value < 40.1) {
        return "obesity class 2"
    }
    else {
        return "extreme obesity class 3"
    }
}
