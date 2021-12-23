import throttle from "lodash.throttle";


const STORAGE_KEY = 'feedback-from-state';
const form = document.querySelector('.feedback-form');

const localStorageData = JSON.parse(localStorage.getItem('STORAGE_KEY'));

if (localStorageData) {
  form['email'].value = localStorageData.email;
  form['message'].value = localStorageData.message;
}

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onMessageInput, 500));

function onFormSubmit(e) {
  e.preventDefault();

//   if(form['email'].value == '' && form['message'].value == ''){
//     console.log("There is nothing to submit! Fill up the fields!");
//     return;
//   }
  if (!form['email'].value || !form['message'].value){
    console.log('All fields must be filled')
    return
  }
//   else{ 
      console.log({
    email: `${form['email'].value}`,
    message: `${form['message'].value}`,
  });
// }

 

  localStorage.removeItem('STORAGE_KEY');
  e.currentTarget.reset();
}

function onMessageInput(e) {
  localStorage.setItem(
    'STORAGE_KEY',
    JSON.stringify({
      email: `${form['email'].value}`,
      message: `${form['message'].value}`,
    }),
  );
}

// const refs ={
//     form: document.querySelector('.feedback-form'),
//     email: document.querySelector('.feedback-form input'),
//     textarea: document.querySelector(".feedback-form textarea")
// }

// refs.form.addEventListener('submit', onFormSubmit);

// onFormChange()

// const saveMessage = localStorage.getItem('feedback-form-state');
//     const parsellingMasseg =  JSON.parse(saveMessage)

// function onFormChange(){
    
//     if(parsellingMasseg){
//        refs.email.value =  parsellingMasseg.email;
//        refs.textarea.value =  parsellingMasseg.message; 
       
//     } 
// }
// let formData ={
//     email:'',
//     message:''
 
// }




// refs.form.addEventListener("input", throttle(onInputChanges, 500 ));

// function onInputChanges(e){
//      formData[e.target.name] = e.target.value;
//     localStorage.setItem('feedback-form-state', JSON.stringify(formData))
// };


// function onFormChange(){
//     const saveMessage = localStorage.getItem('feedback-form-state');
//     const parsellingMasseg =  JSON.parse(saveMessage)
//     if(parsellingMasseg){
//        refs.email.value =  parsellingMasseg.email;
//        refs.textarea.value =  parsellingMasseg.message; 
       
//     } 


// }


// function onFormSubmit(e){
//     e.preventDefault();
//     e.currentTarget.reset()
//     localStorage.removeItem('feedback-form-state')
//     // console.clear();
//     if(parsellingMasseg){
//         console.log(parsellingMasseg)
//     } 
//     else
//      {
//         //  if (email = '' || texterea ='') {
//         //      alert('All fields must be filled')
//         //  }
//         // else
//         console.log(formData)}
//             formData ={
//                 email:'',
//                 message:''
            
//          }

     
    
//     }

