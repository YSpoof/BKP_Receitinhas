const scriptURL="https://script.google.com/macros/s/AKfycbzp0FtKDcQQmaVpESLZAMGBJeWfQy-j7tMXBusO6MRKZZJmFSQR5zV3MF-Q9lOE5Dpf/exec",form=document.forms.contato_receitinhas;form.addEventListener("submit",t=>{t.preventDefault(),fetch(scriptURL,{method:"POST",body:new FormData(form)}).then(()=>window.location.replace("/contact-success/"))["catch"](()=>alert("OOps, n\xe3o foi poss\xedvel enviar a sua mensagem."))});