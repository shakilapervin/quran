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
                '/api/sura'
            );
            if (res.status === 200) {
                setSuras(res.data);
                getChapters('62124217f548f5257ff1fd41');
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
            const res = await axios.post(
                '/api/chapter', {sura}
            );
            if (res.status === 200) {
                setChapters(res.data);
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
            <div className={styles.searchBoxTitle}> متن قرآن</div>
            <div className={styles.searchFieldWrapper}>
                <form action={`/search`} method={`get`}>
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="row align-items-center mb-3">
                                <label className="col-md-2 col-form-label">
                                    سوره:
                                </label>
                                <div className="col-md-10">
                                    <select name="sura" className={`form-control ${styles.dropdown} sura`} onChange={handleSuraChange}>
                                        {
                                            suras && (
                                                suras.map(el=> (
                                                    <option value={el._id} key={el._id}>
                                                        {toArabic(el.serial)}. {el.arabicName}
                                                    </option>
                                                ))
                                            )
                                        }
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
                                            chapters && (
                                                chapters.map(el=> (
                                                    <option value={el.serial} key={el._id}>
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
