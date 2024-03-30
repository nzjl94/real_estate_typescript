type getAPIData= (URL:string,setFun:any,type?:string)=> void
export const getAPIData:getAPIData =async (URL,setFun,type="normal") => {
    let response = await fetch(`${URL}`)
    response = await response.json()
    setFun(response)
}

type postAPIData= (URL:string,data:any)=> void
export const postAPIData:getAPIData =async (URL,data={}) => {

    fetch(URL, {
        method: "POST",
        headers: {
            // 'Content-Type': 'application/json'
           // "content-type": "multipart/form-data"
        }, 
        body: data
    }).then(res => {
        console.log("Request complete! response:", res);
    });
}

