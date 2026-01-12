import { useEffect, useState } from "react";

const API="https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr";

export const useBitcoin=()=>{
    const[price, setPrice]=useState(null);
    const[loading, setLoading]=useState(true);
    const[error, setError]=useState(null);

    useEffect(()=>{
        const fetchPrice=async()=>{
            try{
                const res=await fetch(API);
                const data=await res.json();
                setPrice(data.bitcoin.inr);
            } catch(e){
                console.error("BTC fetch failed", e);
            } finally{
                setLoading(false);
            }
        };

        fetchPrice();
        const interval=setInterval(fetchPrice, 60000); //call fetchPrice every 60 sec
        return()=>clearInterval(interval);
    },[]);

    return { price, loading };
}