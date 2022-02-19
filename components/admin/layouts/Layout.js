import React from 'react';
import Sidebar from './Sidebar';

export default function Layout(props) {
    return (
        <>
            <div className="container-fluid p-0">
                <div className="row g-0">
                    <div className="col-md-2">
                        <Sidebar user={props.user} />
                    </div>
                    <div className="col-md-10">{props.children}</div>
                </div>
            </div>
        </>
    );
}
