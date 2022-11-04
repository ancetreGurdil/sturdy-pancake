    const nav = document.querySelector('#navbar')
    fetch('/templates/base.html')
    .then(res=>res.text())
    .then(data=>{
        nav.innerHTML = data
    })

    const body = document.querySelector('.container')
    fetch('/templates/information.html')
    .then(res=>res.text())
    .then(data=>{
        body.innerHTML = data
    })