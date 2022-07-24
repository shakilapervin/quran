import React from 'react';
import styles from './SearchBySura.module.css';
import {useEffect, useState} from "react";
import axios from "axios";
import $ from 'jquery';

export default function SearchByDua() {
    const [duas, setDuas] = useState();

    async function getDefaultDuas() {
        try {
            const res = await axios.get(
                `${process.env.API_URL}/dua?allData=true`
            );
            if (res.data.status === true) {
                setDuas(res.data.duas);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getDefaultDuas();
    }, [setDuas]);

    async function getDuas(dua) {
        try {
            const res = await axios.get(
                `${process.env.API_URL}/dua?type=${dua}`
            );
            if (res.data.status === true) {
                console.log(res.data.duas);
                setDuas(res.data.duas);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const handleDuaChange = () => {
        const dua = $('.dua').val();
        getDuas(dua);
    }
    return (
        <>
            <div className={styles.searchBoxTitle}>دعا</div>
            <div className={styles.searchFieldWrapper}>
                <form action={`/sura`} method={`get`}>
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="row align-items-center mb-3">
                                <label className="col-md-2 col-form-label">
                                    سوره:
                                </label>
                                <div className="col-md-10">
                                    <select name="dua" className={`form-control ${styles.dropdown} dua`}
                                            onChange={handleDuaChange}>
                                        <option value="1">প্রতিদিনের দোয়া</option>
                                        <option value="2">সপ্তাহের দোয়া</option>
                                        <option value="3">বিশেষ দোয়া</option>
                                        <option value="4">প্রসিদ্ধ দোয়া</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row align-items-center mb-3">
                                <label className="col-md-2 col-form-label">
                                    آيه:
                                </label>
                                <div className="col-md-10">
                                    <select name="chapter" className={`form-control ${styles.dropdown}`}>
                                        {
                                            duas && (
                                                duas.map((el) => (
                                                    <option value={el.id} key={el.id}>
                                                        {el.arabicName}
                                                    </option>
                                                ))
                                            )
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-md-2"/>
                                <div className="col-md-10">
                                    <button className={`btn btn-dark`} type={`submit`}>جستجو</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
