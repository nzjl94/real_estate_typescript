export const getAPIData =async function (URL,setFun) {
    let response = await fetch(`http://localhost:8000/${URL}`)
    response = await response.json()
    setFun(response)
}