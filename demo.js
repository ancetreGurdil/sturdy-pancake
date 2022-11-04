/* function getData(route){
    let url = "http://localhost:3000/"+ route;
    return new Promise((resolve,reject) => {
        axios.get(url).then((res) => {
            console.log("get front");
            return resolve(res.data);
        }).catch((err) => {
            console.log("get error front");
            return reject(err)
        });
    });
}
function printData(res){
    try {
     let el = document.getElementById('api-rawRes');
     console.log(res);
     el.innerHTML = JSON.stringify(res);
    } catch(err){
     handleError("The data is unreadable")
    }
 }

 function handleError(err){
    console.error(err);
    printData(err.message);
}

function handleClick(route,request){
    switch (request) {
        case 'PUT':
            putData(route).then((data) => {
                printData(data);
            }).catch((err) =>{
                return handleError(err)
            });
        break;
        case 'GET':
            getData(route).then((data) => {
                console.log("switch");
                printData(data);
            }).catch((err) =>{
                return handleError(err)
            });
        break;
    }
}

const test = () => {
    console.log('test')
}

 */

function handleClick(route) {
    let url = "http://localhost:3000/" + route;
    let el = document.getElementById("res");
    axios.get(url).then((res) => {
        el.innerHTML = JSON.stringify(res.data);
        
    }).catch((err) => {
        console.error(err.message);
        el.innerHTML = err.message; // Print error
    });
}
