import React from 'react';
import "./Categories.css";

export default function Categories() {
    return (
        <>
            <div className='Categories-background'>
                <div className="container">
                    <p className='text-center cat-p '>Catégories <span style={{ color: "#89c600" }}>populaires</span></p>

                    <div className="row text-white">
                        <div className="col-12 col-lg-4">
                            <div className='d-flex flex-column justify-content-center'>
                                <img src="../assets/Cat1.png" alt="" className='w-100 h-100' />


                                <h1 className='text-center'>PC Gamer</h1>
                                <div className='d-flex justify-content-center'>
                                    <button className='cat-btn'>Plus</button>
                                </div>
                            </div>
                        </div>


                        <div className="col-12 col-lg-4">
                            <div className='d-flex flex-column justify-content-center'>
                                <img src="../assets/Cat2.png" alt="" className='w-100 h-100' />

                                <h1 className='text-center'>Configurateur PC</h1>
                                <div className='d-flex justify-content-center'>
                                    <button className='cat-btn'>Plus</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className='d-flex flex-column justify-content-center'>
                                <img src="../assets/Cat3.png" alt="" className='w-100 h-100' />

                                <h1 className='text-center'>Reductions</h1>
                                <div className='d-flex justify-content-center'>
                                    <button className='cat-btn mb-cat'>Plus</button>
                                </div>
                            </div>
                        </div>

                        {/* <div className="col-4">
                            <div className='d-flex flex-column justify-content-center'>
                                <h1 className='text-center'>PC Gamer</h1>
                                <div className='d-flex justify-content-center'>
                                    <button className='cat-btn'>Plus</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className='d-flex flex-column justify-content-center'>
                                <h1 className='text-center'>PC Gamer</h1>
                                <div className='d-flex justify-content-center'>
                                    <button className='cat-btn'>Plus</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className='d-flex flex-column justify-content-center'>
                                <h1 className='text-center'>PC Gamer</h1>
                                <div className='d-flex justify-content-center'>
                                    <button className='cat-btn'>Plus</button>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}
