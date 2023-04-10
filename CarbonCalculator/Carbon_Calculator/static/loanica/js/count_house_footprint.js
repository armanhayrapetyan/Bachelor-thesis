
const form_footprint = document.querySelector('#form_footprint');
const count_footprint = document.querySelector('#button789');
const reset_button = document.querySelector('#reset_button');


count_footprint.addEventListener('click', (e)=>{
    e.preventDefault();

    let elec = document.getElementById('elec');
    let gas = document.getElementById('gas');
    let coal = document.getElementById('coal');
    let lpg = document.getElementById('lpg');
    let propan = document.getElementById('propan');
    let wood = document.getElementById('wood');

    let number_elec = Number(elec.value);
    let number_gas = Number(gas.value);
    let number_coal = Number(coal.value);
    let number_lpg = Number(lpg.value);
    let number_propan = Number(propan.value);
    let number_wood = Number(wood.value);


    function getGenNum( input_number, const_number ){
        res = (input_number * const_number ) / 1000000;
        return parseFloat(res.toFixed(3));
    };

    async function getConstantValue(){
        
        let response = await fetch("http://127.0.0.1:8000/constant_values/")
        let data = await response.json();
        console.log(data);  
        let res_elec = getGenNum( number_elec , data[0]["electricity"] );
        console.log(res_elec)
        let res_gas = getGenNum( number_gas , data[0]["natural_gas"] );
        let res_coal = getGenNum( number_coal , data[0]["coal"] );
        let res_lpg = getGenNum( number_lpg , data[0]["liquid_gas"] );
        let res_propan = getGenNum( number_propan , data[0]["propane"] );
        let res_wood = getGenNum( number_wood , data[0]["wood"] );

        // Result using math algorithms

        let electricity_res = `${res_elec} մետր տոննա : ${number_elec} կվտ/ժ էլեկտրականությունից`;
        let gas_res = `${res_gas} մետր տոննա : ${number_gas} մ³ գազից`;
        let coal_res = `${res_coal} մետր տոննա : ${number_coal} տոննա ածխից`;
        let lpg_res = `${res_lpg} մետր տոննա : ${number_lpg} լիտր հեղուկ գազից`;
        let propan_res = `${res_propan} մետր տոննա : ${number_propan} լիտր պրոպանից`;
        let wood_res = `${res_wood} մետր տոննա : ${number_wood} մետր տոննա փայտից`;

        let final_result = res_elec + res_gas + res_coal + res_lpg + res_propan  + res_wood;
        let roudedRes = parseFloat(final_result.toFixed(3))
        console.log(roudedRes)

        var gen_res = `Տան ընդհանուր հետքը = ${roudedRes} մետր տոննա CO₂e`

        const myElement1 = document.getElementById('h1');
        const myElement2 = document.getElementById('h2');
        const myElement3 = document.getElementById('h3');
        const myElement4 = document.getElementById('h4');
        const myElement5 = document.getElementById('h5');
        const myElement6 = document.getElementById('h6');
        const myElement7 = document.getElementById('general_result');

        myElement1.innerHTML = electricity_res;
        myElement2.innerHTML = gas_res;
        myElement3.innerHTML = coal_res;
        myElement4.innerHTML = lpg_res;
        myElement5.innerHTML = propan_res;
        myElement6.innerHTML = wood_res;
        myElement7.innerHTML = gen_res;
    }    

    getConstantValue();
    
});


reset_button.addEventListener('click', (e) => {
    e.preventDefault();
  
    elec.value = '';
    gas.value = '';
    coal.value = '';
    lpg.value = '';
    propan.value = '';
    wood.value = '';
  
    const myElement1 = document.getElementById('h1');
    const myElement2 = document.getElementById('h2');
    const myElement3 = document.getElementById('h3');
    const myElement4 = document.getElementById('h4');
    const myElement5 = document.getElementById('h5');
    const myElement6 = document.getElementById('h6');
    const myElement7 = document.getElementById('general_result');
  
    myElement1.innerHTML = '';
    myElement2.innerHTML = '';
    myElement3.innerHTML = '';
    myElement4.innerHTML = '';
    myElement5.innerHTML = '';
    myElement6.innerHTML = '';
    myElement7.innerHTML = 'Տան ընդհանուր հետքը = 0 մետր տոննա CO₂e';
  });
  

const openModalButton = document.getElementById("open_modal");
const modalWindowOverlay = document.getElementById("modal-overlay");

const showModalWindow = () => {
    modalWindowOverlay.style.display = 'flex';
}

openModalButton.addEventListener("click", showModalWindow);


const closeModalButton = document.getElementById("close-modal");

const hideModalWindow = () => {
    modalWindowOverlay.style.display = 'none';
}

closeModalButton.addEventListener("click", hideModalWindow);


const hideModalWindowOnBlur = (e) => {

    if(e.target === e.currentTarget) {
        hideModalWindow();
    }
}

modalWindowOverlay.addEventListener("click", hideModalWindowOnBlur)

const PVCheckbox = document.getElementById("vehicle1");
const HeatherCheckbox = document.getElementById("vehicle2");
const HouseInsulationCheckbox = document.getElementById("vehicle3");
const SaveModalButton= document.getElementById("save-modal");


function getChecketCheckboxes(){

    // if(PVCheckbox.checked){
    
        let elec = document.getElementById('elec');
        let gas = document.getElementById('gas');
        let coal = document.getElementById('coal');
        let lpg = document.getElementById('lpg');
        let propan = document.getElementById('propan');
        let wood = document.getElementById('wood');

        let number_elec = Number(elec.value);
        let number_gas = Number(gas.value);
        let number_coal = Number(coal.value);
        let number_lpg = Number(lpg.value);
        let number_propan = Number(propan.value);
        let number_wood = Number(wood.value);


        function getGenNum( input_number, const_number ){
            res = (input_number * const_number ) / 1000000;
            return parseFloat(res.toFixed(3));
        };

        async function getConstantValue(){
            
            let response = await fetch("http://127.0.0.1:8000/constant_values/")
            let data = await response.json();
            console.log(data);  
            let res_elec = getGenNum( number_elec , data[0]["electricity"] );
            console.log(`first result of elec ${res_elec}`);
            let res_gas = getGenNum( number_gas , data[0]["natural_gas"] );
            console.log(`first result of natural  gas ${res_gas}`);
            let res_coal = getGenNum( number_coal , data[0]["coal"] );
            let res_lpg = getGenNum( number_lpg , data[0]["liquid_gas"] );
            let res_propan = getGenNum( number_propan , data[0]["propane"] );
            let res_wood = getGenNum( number_wood , data[0]["wood"] );

            // Installing pv electricity
            let res_pv = PVCheckbox.checked ? res_elec / 1.786 : res_elec;
            console.log(`Install pv electricity ${parseFloat(res_pv.toFixed(3))}`);

            //Installing heather electricity
            let heather_pv = HeatherCheckbox.checked? res_pv / 1.21 : res_pv;
            console.log(`Install heather pv electricity ${parseFloat(heather_pv.toFixed(3))}`);
            let heather_natural_gas = HeatherCheckbox.checked? res_gas / 1.73: res_gas;
            console.log(`Install heather gas electricity ${parseFloat(heather_natural_gas.toFixed(3))}`);

            // Perform insulation jobs
            let insulation_pv = HouseInsulationCheckbox.checked? heather_pv / 1.01: heather_pv;
            console.log(` Perform insulation electricity result ${parseFloat(insulation_pv.toFixed(3))}`);
            let insulation_gas = HouseInsulationCheckbox.checked? heather_natural_gas / 2.03: res_gas;
            console.log(`Perform insulation gas result ${parseFloat(insulation_gas.toFixed(3))}`); 
            let insulation_coal = HouseInsulationCheckbox.checked? res_coal / 2.56: res_coal;
            console.log(`Perform insulation coal result ${parseFloat(insulation_coal.toFixed(3))}`); 
            let insulation_wood = HouseInsulationCheckbox.checked? res_wood / 3.20: res_wood;
            console.log(`Perform insulation wood result ${parseFloat(insulation_wood.toFixed(3))}`);

            let final_result = insulation_pv + insulation_gas + insulation_coal + res_lpg + res_propan  + insulation_wood;
            let roudedRes = parseFloat(final_result.toFixed(3));
            console.log(roudedRes)
            // Result using math algorithms

            let electricity_res = `${parseFloat(insulation_pv.toFixed(3))} մետր տոննա : ${number_elec} կվտ/ժ էլեկտրականությունից`;
            let gas_res = `${parseFloat(insulation_gas.toFixed(3))} մետր տոննա : ${number_gas} մ³ գազից`;
            let coal_res = `${parseFloat(insulation_coal.toFixed(3))} մետր տոննա : ${number_coal} տոննա ածխից`;
            let lpg_res = `${res_lpg} մետր տոննա : ${number_lpg} լիտր հեղուկ գազից`;
            let propan_res = `${res_propan} մետր տոննա : ${number_propan} լիտր պրոպանից`;
            let wood_res = `${parseFloat(insulation_wood.toFixed(3))} մետր տոննա : ${number_wood} մետր տոննա փայտից`;

            let gen_res = `Տան ընդհանուր հետքը = ${roudedRes} մետր տոննա CO₂e`

            const myElement1 = document.getElementById('h1');
            const myElement2 = document.getElementById('h2');
            const myElement3 = document.getElementById('h3');
            const myElement4 = document.getElementById('h4');
            const myElement5 = document.getElementById('h5');
            const myElement6 = document.getElementById('h6');
            const myElement7 = document.getElementById('general_result');

            myElement1.innerHTML = electricity_res;
            myElement2.innerHTML = gas_res;
            myElement3.innerHTML = coal_res;
            myElement4.innerHTML = lpg_res;
            myElement5.innerHTML = propan_res;
            myElement6.innerHTML = wood_res;
            myElement7.innerHTML = gen_res;
        }    

        getConstantValue();
        
    }
    // if(HeatherCheckbox.checked){
    //     getConstantValue().then(()=>{console.log(objChangetValues)})
    // }
    // if(HouseInsulationCheckbox.checked){
    //     console.log("True")
    // }

SaveModalButton.addEventListener("click", (e)=>{
    e.preventDefault();
    getChecketCheckboxes();
    hideModalWindow();
})
