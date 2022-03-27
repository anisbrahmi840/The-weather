import {useState} from "react";
import axios from 'axios';

// const BASE_URL  +

const useForecast = () => {
    const [isError, setError] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [forecast, setForcast] = useState(null)


    //call api
    const submitRequest = location => {

    }

    return {
        isError, isLoading, forecast, submitRequest
    }

}

export default useForecast