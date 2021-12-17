import throttle from "lodash.throttle";

const refs ={
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    textarea: document.querySelector(".feedback-form textarea")
}


refs.form.addEventListener('submit', onFormSubmit);
const formData ={}

onFormChange()

function onFormSubmit(e){
    e.preventDefault();
    e.currentTarget.reset()
    localStorage.removeItem('feedback-form-state')
    console.log(formData);
}


refs.form.addEventListener("input", throttle(onInputChanges, 500 ));

function onInputChanges(e){
    formData[e.target.name] = e.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData))
};

function onFormChange(){
    const saveMessage = localStorage.getItem('feedback-form-state');
    const parsellingMasseg =  JSON.parse(saveMessage)
    if(saveMessage){
        refs.email.value =  parsellingMasseg.email;
        refs.textarea.value = parsellingMasseg.message;
    }
}

