import React, {useState, useEffect} from "react";
import axios from "axios";



function ApiExample() {
    const [loading, setLoading] = useState(null);
    const [items, setItems] = useState(null);
    const [error, setError] = useState(false);
    const SERVICE_KEY = 's4sQT%2F2CNziwuHItpzeGE7tJ4gyBZ876iXoUvxDE4AQ4En96j9ISealB7QFnkf4GceyA3p2EPi0I6z3K7zqliQ%3D%3D'

    console.log(process.env.REACT_APP_SERVICE_KEY);

    const LoadData = async() => {
        try {
            const response = await axios.get(
                `https://api.odcloud.kr/api/15083256/v1/uddi:44980de3-b41a-488e-baf4-e08be5c7c76c?serviceKey=${SERVICE_KEY}&page=1&perPage=100&returnType=JSON`
            )
            const responedata = response.data;
            console.log(responedata);
        }
        catch(e) {
            setError(e);
        }
        setLoading(false);
    }

    useEffect(()=>{
        LoadData()
    }, [])

    return (
        <>
            <h1>API</h1>
        </>
    )
}

export default ApiExample;