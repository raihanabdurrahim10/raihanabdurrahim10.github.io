 const scriptURL = 'https://script.google.com/macros/s/AKfycbzkC2agikR7lERTv3VmvVDdg3K4-Vn33vIx-knmzam98jFJv13o45Je0Rcm6gaHPF34VA/exec'
  const form = document.forms['raihan-contact-form']
  const btnKirim= document.querySelector('.button-about')
  const btnLoading=document.querySelector('.button-loading')
  form.addEventListener('submit', e => {
    e.preventDefault()
    btnKirim.classList.toggle('hilang');
    btnLoading.classList.toggle('hilang');
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        btnKirim.classList.toggle('hilang');
        btnLoading.classList.toggle('hilang');            
        form.reset();
        console.log('Success!', response);})
      .catch(error => console.error('Error!', error.message))
  })