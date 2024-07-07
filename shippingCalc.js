function calculate(){
    const inputElement = document.querySelector('.totalCal');

    let total = Number(inputElement.value);
    
    if (total < 30){
        document.querySelector('.total').innerHTML = `₹${total += 30}`;
    }else{
        document.querySelector('.total').innerHTML = `₹${total}`;
    }
}

function totalCal(event){
    if (event.key === 'Enter'){
        calculate();
    }
}