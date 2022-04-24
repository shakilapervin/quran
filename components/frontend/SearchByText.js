import React from 'react';
import styles from './SearchByText.module.css';
export default function SearchByText() {
    return (
        <>
            <div className={styles.searchBoxTitle}>جستجوی قرآن کريم</div>
            <div className={styles.searchFieldWrapper}>
                <form action={`/search`} method={`get`}>
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <div className="row align-items-center">
                                <label className="col-md-2 col-form-label">
                                    کلمات:
                                </label>
                                <div className="col-md-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder={`شمس`}
                                        name={`keyword`}
                                    />
                                    <input type="hidden" name={`page`} defaultValue={0}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <button className={`btn btn-dark`} type={`submit`}>جستجو</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
