
const checkApi = (api) => {
    return new Promise(function(resolve, reject) {

        let request  = new XMLHttpRequest();
        request.open('GET', api)
        request.onreadystatechange = () => {
            if (request.readyState === 4 ){
                (request.status === 200)
                    ? resolve (JSON.parse(request.responseText))
                    : reject (console.log("error"))

            }
        }
        request.send()
    })
 }



export {checkApi};