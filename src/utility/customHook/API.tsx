import { useState, useEffect } from 'react';


type getAPIData= (URL:string,setFun:any,type?:string)=> void
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



export interface FetchData<T> {
    data: T;
    loading: boolean;
    success: boolean;
}
const useFetch = <T,>(url: string,default_value:any,method:string="GET"): FetchData<T> => {

  const [data,       setData] = useState<T>(default_value);
  const [loading, setLoading] = useState<boolean>(true);
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if(method==="POST"){

        }else{
            const response = await fetch(url);
            const result = await response.json();
            setData(result);
            setLoading(false);
            setSuccess(true);
        }
        
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
        setSuccess(false);

      }
    };

    fetchData();

    return () => {};
  }, [url,method]);

  return { data, loading, success};
}

export default useFetch;