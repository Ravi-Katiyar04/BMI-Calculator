const form = document.querySelector('form')

form.addEventListener("submit", function (e) {
    e.preventDefault()

    let height = document.querySelector("#height").value
    let weight = document.querySelector("#weight").value

    console.log(height);
    // console.log(weight);
    const weight_unit = document.querySelector("#weight_unit").value
    if (weight_unit == "pound") {
        weight = (weight * 0.45).toFixed(2);
    }
    else if (weight_unit== "stone") {
        weight = (weight * 6.35).toFixed(2);
    }
    
    const height_unit= document.querySelector("#height_unit").value
    if(height_unit=="feet"){
        height= (height* 0.3).toFixed(2);
    }
    else if(height_unit=="inche"){
        height= (height* 0.025).toFixed(2);
    }
    else if(height_unit=="centimeter"){
        height= (height* 0.01).toFixed(2);
    }
    
    const result= (weight / (height*height)).toFixed(2);

    document.querySelector('#result_bmi').innerHTML= `BMI is ${result}`;

    if(result <= 18.4){
        document.querySelector('#result_status').innerHTML= 'Underweight'
    }
    else if(result <= 24.9 && result >= 18.5){
        document.querySelector('#result_status').innerHTML= 'Normal';
    }
    else if(result <= 39.9 && result >= 25){
        document.querySelector('#result_status').innerHTML= 'Overweight';
    }
    else{
        document.querySelector('#result_status').innerHTML= 'obese';
    }
})  