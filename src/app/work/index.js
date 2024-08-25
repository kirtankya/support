import React from 'react'
import './work.scss';
import vector from '../../assets/images/0_M_cfSrLvgDCIxthV.jpg';

export default function Work() {
    return (
        <div className='work_main'>
            <div className="container">
                <div className="work_Aligment">
                    <div className="work_text">
                        <h2>SOFTWARE DEVELOPMENT COMPNAY</h2>
                        <p>we bring reality into your ideas similar words</p>
                        <div className="button">
                            <button>Let's Converse</button>
                        </div>
                    </div>
                    <div className="work_banner">
                        <img src={vector} alt="vector" />
                    </div>
                </div>
            </div>
        </div>
    )
}
