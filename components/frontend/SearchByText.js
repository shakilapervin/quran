import React from 'react';
import styles from './SearchByText.module.css';

export default function SearchByText() {
    return (
        <>
            <div className={styles.searchBoxTitle}>جستجوی قرآن کريم</div>
            <div className={styles.searchFieldWrapper}>
                <form>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row mb-3 align-items-center">
                                <label className="col-md-2 col-form-label">
                                    کلمات:
                                </label>
                                <div className="col-md-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <label className="col-md-2 col-form-label">
                                    ترجمه:
                                </label>
                                <div className="col-md-10">
                                    <select className="form-control">
                                        <option value="ar">متن عربی</option>
                                        <option value="bn">বাংলা</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
