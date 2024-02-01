export const getAPIData =async function (URL,setFun) {
    let response = await fetch(`${URL}`)
    response = await response.json()
    setFun(response)
}