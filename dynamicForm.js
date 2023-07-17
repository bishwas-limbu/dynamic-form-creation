
const inputType = document.querySelector("#inputType");
const labelValue = document.querySelector("#labelValue");
const form = document.querySelector("#form");

console.log(inputType);
console.log(labelValue);
console.log(form);

labelValue.addEventListener("keyup", (e)=>{
    const keyPressed = e.key;
    console.log(keyPressed);

    if(keyPressed === "Enter"){
        const type = inputType.value;
        const label = labelValue.value;

        //console.log(type,label);

        const labelInput = document.createElement("label");
        const div = document.createElement("div");

        let input;

        if(type === 'textarea'){
            input = document.createElement("textarea");
        } else {
            input = document.createElement("input");
        }

        labelInput.innerHTML = label;
        labelInput.classList.add('form-label');

        input.type = type;
        input.classList.add('form-control');

        div.classList.add('mb-3');

        if(type !== 'submit'){
            div.appendChild(labelInput);// appending to const div = document.createElement("div");
        } else if  (type === 'submit'){
             input.classList.add('btn', 'btn-success');
             input.value = label;
             if (input.value === 'cancel' || input.value === 'Cancel'){
                input.classList.add('btn', 'btn-danger');
             }
            
        } 

     // appending to const div = document.createElement("div");
        div.appendChild(input); // appending to const div = document.createElement("div");

        form.appendChild(div); //appending to const form = document.querySelector("#form");

    }
});