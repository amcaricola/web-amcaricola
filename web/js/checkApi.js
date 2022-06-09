
export const checkApi = (api,external = false) => {
    return new Promise(function(resolve, reject) {

        let request  = new XMLHttpRequest();
        request.open('GET', api)
        request.onreadystatechange = () => {
            if (request.readyState === 4 ){
                if (request.status === 200){
                    if (external){
                        resolve (JSON.parse(request.responseText))
                        return
                    }
                    resolve (request.responseText)
                    return 
                    
                }
                reject (console.error(`Error ${request.status} Favor verificar...`))
            }
        }
        request.send()
    })
 }