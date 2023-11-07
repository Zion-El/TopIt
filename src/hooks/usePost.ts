//to use this custom hook, do the following in the component to use it

//1. import useStringArrayFetch from ''

//const {data, loading, error} =  useStringArrayFetch (url, postData)
//postData is whatever data you want to post

//the data is an array, you can map through it
//loading and error are both booleans, they return true or false

//do your magic


//NB: THIS COMPONENT CAN BE MODIFIED GOING ON TO SUIT REQUIREMENTS
//but they will definitely do the same thing, you're safe


import { useEffect, useState   } from "react";
import axios from 'axios'


function usePost (postData : any, url :string){

    const dataType : string [] = []

    const [myData, setMydata] = useState(dataType);
    const [isPending, setIsPending] = useState(true)
    const [isError, setIsError] = useState(null)

    useEffect(() => {
        const post = async () => {
          try {
            const res = await axios.post(url, JSON.stringify(postData), {
              headers: {
                'Content-Type': 'application/json'
              }
            });
            if (res) {
              console.log(res); 
              const dataArray = res.data.data;
              setMydata(dataArray);
              setIsPending(false)
              setIsError(null)
      
            }
          } catch (err: any ) {
            console.log(err.message);
            setIsPending(false)
            setIsError(err.message)
          }
        }
      
        post();
    }, [url]);

    return {
        myData,
        isError,
        isPending
    }
}

export default usePost