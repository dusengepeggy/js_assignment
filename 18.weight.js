function weighting(w,h ){
    var bmi=w/(h^2);
    if (bmi<18.5){
        console.log("Underweight");
    }
    else if(bmi>=18.5 && bmi<25){
        console.log("Healthy Weight");
    }
    else if(bmi>=25 && bmi<30){
        console.log("Overweight");
    }
    else{
        console.log("Obesity");
    }


}