type getAPIData= (URL:string,setFun:any,type?:string)=> void
export const getAPIData:getAPIData =async (URL,setFun,type="normal") => {
    let response
    if (type==="normal")
        response = await fetch(`http://localhost:8000/${URL}`)
    else
        response = await fetch(URL)

    response = await response.json()
    setFun(response)
}