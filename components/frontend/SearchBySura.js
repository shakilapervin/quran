import React from 'react';
import styles from './SearchBySura.module.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {toArabic} from 'arabic-digits';
import $ from 'jquery';

export default function SearchBySura() {
    const [suras, setSuras] = useState();
    const [chapters, setChapters] = useState();

    async function getSuras() {
        try {
            const res = await axios.get(
                `${process.env.API_URL}/sura?allData=true`
            );
            if (res.data.status === true) {
                setSuras(res.data.suras);
                getChapters(1);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getSuras();
    }, [setSuras]);

    async function getChapters(sura) {
        try {
            const res = await axios.get(
                `${process.env.API_URL}/${sura}/chapter?allData=true`
            );
            if (res.data.status === true) {
                setChapters(res.data.chapters);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const handleSuraChange = () => {
        const sura = $('.sura').val();
        getChapters(sura);
    }
    return (
        <>
            <div className={styles.searchBoxTitle}>কুরআন</div>
            <div className={styles.searchFieldWrapper}>
                <form action={`/sura`} method={`get`}>
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="row align-items-center mb-3">
                                <label className="col-md-2 col-form-label">
                                    সূরা:
                                </label>
                                <div className="col-md-10">
                                    <select name="sura" className={`form-control ${styles.dropdown} sura`}
                                            onChange={handleSuraChange}>
                                        {
                                            suras && (
                                                suras.map((el) => (
                                                    <option value={el.id} key={el.id}>
                                                        {toArabic(el.serial_no)}. {el.arabic_name}
                                                    </option>
                                                ))
                                            )
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="row align-items-center mb-3">
                                <label className="col-md-2 col-form-label">
                                    আয়াত:
                                </label>
                                <div className="col-md-10">
                                    <select name="chapter" className={`form-control ${styles.dropdown}`}>
                                        {
                                            chapters && (
                                                chapters.map((el) => (
                                                    <option value={el.serial} key={el.id}>
                                                        {toArabic(el.serial)}
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
                                    <button className={`btn btn-dark`} type={`submit`}>অনুসন্ধান</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
