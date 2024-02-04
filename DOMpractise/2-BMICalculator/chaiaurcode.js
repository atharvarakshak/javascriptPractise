const form = document.querySelector("form")
// this will give you empty value
//  const height= document.querySelector("height")
// const weight = document.querySelector("weight")


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = (document.querySelector("#results"));

    if(height === '' || height<0 || isNaN(height)){
        results.innerHTML = "Please give a valid height";
    }
    
    else if(weight === '' || weight<0 || isNaN(weight)){
        results.innerHTML = "Please give a valid weight";
    }
    else{
        const bmi = [weight/height]*10000
        results.innerText = `${bmi}`;

    }
    


})



result.innerText(ans);