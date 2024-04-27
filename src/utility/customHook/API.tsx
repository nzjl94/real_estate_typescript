import { useState, useEffect } from 'react';


// type getAPIData= (URL:string,setFun:any,type?:string)=> void


export interface FetchData<T> {
    data: T;
    loading: boolean;
    success: boolean;
    error: string|null;
}
const useFetch = <T,>(url: string,default_value:any): FetchData<T> => {

  const [data,        setData] = useState<T>(default_value);
  const [error,      setError] = useState<string|any>(null);
  const [loading,  setLoading] = useState<boolean>(true);
  const [success,  setSuccess] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    setError(null); 

    try {     
      const get_response = await fetch(url);
      const result = await get_response.json();
      setData(result);
      setSuccess(true);
    } catch (error:any) {
      console.error('Error fetching data:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
    return () => {};
  }, [url]);
  return { data, error,loading, success};
}

export default useFetch;


// type PostRequestType = any[] | Record<string, any> 
interface ApiResponse {
  success: boolean;
  data?: any;
  error?: string;
}
export const usePostAPI =() => {
  const [response, setResponse] = useState<ApiResponse | null>(null);
  const [loading,  setLoading]  = useState<boolean>(true);
  const [success,  setSuccess]  = useState<boolean>(false);
  const [error,      setError]  = useState<string>('');


  // use useCallback here
  const postData = async (url:string,body:any) => {
    setLoading(true);
    setSuccess(false);
    try {
      const preData = new FormData();
      for (const key in body){
        if(key.startsWith("file")){
          preData.append(key, body[key][0]);
        }else if(key.startsWith("date")){
          // if date and time is needed
          //preData.append(key, new Date(formData[key as keyof FORM_TYPE]).toLocaleString("en-CA",{hour12: false}).replace(",",""));
          preData.append(key, new Date(body[key]).toLocaleDateString("en-CA"));
        }else{
          preData.append(key, body[key]);
        }
      }

      const requestOptions: RequestInit = {
        method: "POST",
        headers: {
            // 'Content-Type': 'application/json',"content-type": "multipart/form-data"
        }, 
        body: preData
      };
      const res = await fetch(url, requestOptions);
      const {data:post_response,status} = await res.json();

      if (status===200) {
        setResponse({ success: true, data:post_response });
        setSuccess(true);
      } else {
        throw new Error(post_response.error || 'Failed to fetch');
      }
    } catch (err:any) {
      setError(err.message || 'Something went wrong');
      setResponse({ success: false, error: err.message });
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, success,response, postData};
}