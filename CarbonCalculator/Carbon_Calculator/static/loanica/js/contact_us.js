
const form = document.querySelector('#form')

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
            break;
        };
    };
};
    return cookieValue;
};

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const formData = new FormData(form);
    const res = Object.fromEntries(formData);
    const payload = JSON.stringify(res);

    fetch("http://127.0.0.1:8000/contact_us/", {
        method: "POST",
        headers:{
            'Content-Type':'application/json',
            'X-CSRFToken': getCookie('csrftoken')
        },
        body: payload
            })  
        //     .then(function(response) {
        //         console.log("Server response:", response);
        // })
    //         .catch(function(error) {
    //             console.error("Error sending POST request:", error);
    // });

    form.reset();

});