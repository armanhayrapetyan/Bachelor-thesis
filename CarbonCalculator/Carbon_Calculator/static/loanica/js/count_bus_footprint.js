
const count_footprint = document.querySelector('#button777')
const reset_button = document.querySelector('#resButton')


count_footprint.addEventListener('click', (e)=>{
    e.preventDefault();

    let bus = document.getElementById('bus');
    let metro = document.getElementById('metro');
    let subway = document.getElementById('subway');
    let rail_diesel = document.getElementById('rail_diesel');
    let rail_elect = document.getElementById('rail_elect');
    let rail_loko = document.getElementById('rail_loko');
    let taxi_petrol = document.getElementById('taxi_petrol');
    let taxi_gas = document.getElementById('taxi_gas');

    let number_bus = Number(bus.value)
    let number_metro = Number(metro.value)
    let number_subway = Number(subway.value)
    let number_rail_diesel = Number(rail_diesel.value)
    let number_rail_elect = Number(rail_elect.value)
    let number_rail_loko = Number(rail_loko.value)
    let number_taxi_petrol = Number(taxi_petrol.value)
    let number_taxi_gas  = Number(taxi_gas.value)


    function getGenNum( input_number, const_number ){
        res = (input_number * const_number ) / 1000
        return parseFloat(res.toFixed(3))
    }

    async function getConstantValue(){
        
        let response = await fetch("http://127.0.0.1:8000/public_transport_values/");
        let data = await response.json();
        console.log(data);
        let res_bus = getGenNum (number_bus ,data[0]["bus"] );
        let res_metro = getGenNum ( number_metro , data[0]["subway"] ) ;
        let res_subway = getGenNum ( number_subway , data[0]["trolleybus"] )
        let res_rail_diesel = getGenNum (  number_rail_diesel , data[0]["diesel_train"] );
        let res_rail_elect = getGenNum (  number_rail_elect , data[0]["electro_train"] );
        let res_rail_loco = getGenNum ( number_rail_loko , data[0]["coal_train_lokomotiv"] )
        let res_taxi_petrol = getGenNum (  number_taxi_petrol , data[0]["petrol_taxi"] );
        let res_taxi_gas = getGenNum (  number_taxi_gas , data[0]["gas_taxi"] );

        // Result using math algorithms

        let bus_res = `${res_bus} մետր տոննա : ${number_bus} կմ օգտվելով ավտոբուսից  `;
        let metro_res = `${res_metro} մետր տոննա : ${number_metro} կմ օգտվելով մետրոյից  `;
        let subway_res = `${res_subway} մետր տոննա : ${number_subway} կմ օգտվելով տրամվայից `;
        let rail_diesl_res = `${res_rail_diesel} մետր տոննա : ${number_rail_diesel} կմ օգտվելով գնացքից(դիզելային) `;
        let rail_elect_res = `${res_rail_elect} մետր տոննա : ${number_rail_elect} կմ օգտվելով էլեկտրոգնացքից  `; 
        let rail_loco_res = `${res_rail_loco} մետր տոննա : ${number_rail_loko} կմ  օգտվելով գնացքից(ածուխով) `;
        let petrol_taxi_res = `${res_taxi_petrol} մետր տոննա : ${number_taxi_petrol} կմ օգտվելով տաքսիից(բենզինով) `;
        let gas_taxi_res = `${res_taxi_gas} մետր տոննա : ${number_taxi_gas} կմ օգտվելով տաքսիից(գազով) `;

        let final_result = (res_bus + res_metro + res_subway + res_rail_diesel + 
                        res_rail_elect  + res_rail_loco + res_taxi_petrol+ res_taxi_gas);
        
        let roudedRes = parseFloat(final_result.toFixed(3))

        console.log(roudedRes)

        gen_res = `Հասարակական տրանսպորտի  հետքը = ${roudedRes} մետր տոննա CO₂e`

        const myElement1 = document.getElementById('ha');
        const myElement2 = document.getElementById('hb');
        const myElement3 = document.getElementById('hc');
        const myElement4 = document.getElementById('hd');
        const myElement5 = document.getElementById('he');
        const myElement6 = document.getElementById('hf');
        const myElement7 = document.getElementById('hg');
        const myElement8 = document.getElementById('hi');
        const myElement9 = document.getElementById('gen_res');

        myElement1.innerHTML = bus_res;
        myElement2.innerHTML = metro_res;
        myElement3.innerHTML = subway_res;
        myElement4.innerHTML = rail_diesl_res;
        myElement5.innerHTML = rail_elect_res;
        myElement6.innerHTML = rail_loco_res;
        myElement7.innerHTML = petrol_taxi_res;
        myElement8.innerHTML = gas_taxi_res;
        myElement9.innerHTML = gen_res;
    }    

    getConstantValue()
    
});


reset_button.addEventListener('click', (e) => {
    e.preventDefault();
  
    bus.value = '';
    metro.value = '';
    subway.value = '';
    rail_diesel.value = '';
    rail_elect.value = '';
    rail_loko.value = '';
    taxi_petrol.value = '';
    taxi_gas.value = '';
  
    const myElement1 = document.getElementById('ha');
    const myElement2 = document.getElementById('hb');
    const myElement3 = document.getElementById('hc');
    const myElement4 = document.getElementById('hd');
    const myElement5 = document.getElementById('he');
    const myElement6 = document.getElementById('hf');
    const myElement7 = document.getElementById('hg');
    const myElement8 = document.getElementById('hi');
    const myElement9 = document.getElementById('gen_res');
  
    myElement1.innerHTML = '';
    myElement2.innerHTML = '';
    myElement3.innerHTML = '';
    myElement4.innerHTML = '';
    myElement5.innerHTML = '';
    myElement6.innerHTML = '';
    myElement7.innerHTML = '';
    myElement8.innerHTML = '';
    myElement9.innerHTML = 'Հասարակական տրանսպորտի  հետքը = 0 տոննա CO₂e';

  });
  
