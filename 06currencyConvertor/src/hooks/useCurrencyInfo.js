import { useState,useEffect } from "react";

function useCurrencyInfo(currency){
    let [data,setData] = useState({})

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((rep)=>rep.json())
        .then((res)=>setData(res[currency]))
        console.log(data);
    },[currency])
    console.log(data);
    return data;
}

export default useCurrencyInfo;