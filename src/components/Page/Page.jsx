import React, { Fragment } from 'react';

import Form from '../Form'
import Error from '../Error'
import Loader from '../Loader'
import Forecast from "../Forecast";
import useForecast from "../../useForecast";

import Header from '../Header';
import styles from './Page.module.css'
const Page = () => {
    const {isError, isLoading, forecast, submitRequest} = useForecast()
    const submitSearch = (value) => {
        submitRequest(value)
    }
    return (
        <Fragment>
            <Header />
            <div className={styles.box}>
                {!isLoading && <Form submitSearch={submitSearch}/> }
                {isError && <Error message={isError} /> }
                {isLoading && <Loader /> }
            </div>
            {forecast && <Forecast /> }
        </Fragment>
    );
};

export default Page;
