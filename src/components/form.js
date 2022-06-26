import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LocationConfig from '../config/location';
import "../assets/css/style.css";
import { faHurricane, faSmileBeam } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { faSistrix } from '@fortawesome/free-brands-svg-icons';

function Form() {
    const [InputFields, setInputFields] = useState({
        name: "",
        email: "",
        category: "",
        comments: ""
    });
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [SubmitButton, setSubmitButton] = useState('SAVE RECORD');
    const [DisableSubmitButton, setDisableSubmitButton] = useState(false);

    const updateInputFields = ((key, val) => {
        let newData = { ...InputFields }
        newData[key] = val
        setInputFields(newData)
    })

    const handleCategoryChange = ((val) => {
        updateInputFields('category', val.target.value)
    })

    const onSubmit = (data) => {
        setSubmitButton('LOADING...');
        setDisableSubmitButton(true);
        axios({
            url: `${LocationConfig.googlesheet}/write`,
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            data: {
                name: data.name,
                email: data.email,
                category: data.category,
                comments: data.comments,
                sheetName: 'RegNo',
                spreadsheetId: '1wYHFHokvZrI67iJ9WpTn8SoRDvcH8LyFJs5z3z56rKw'
            }
        }).then(res => {
            setSubmitButton('SAVE RECORD');
            toast.info('Thank you for your feedback. Our team will look into it');
            reset();
            setDisableSubmitButton(false);
        }).catch((err) => {
            setSubmitButton('SAVE RECORD');
            toast.error('Something went wrong. Please try again later :(');
            setDisableSubmitButton(false);
        })
    };
    return (
        <>
            <section className="mb-4">
                <div className="container">
                    <div class="d-flex invi-txt-head justify-content-center mt-5 mb-3" id="infra">
                        <h1 class="fw-bold">Registration</h1>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="my-4 d-flex flex-row">
                                <div className="pe-3 font-blue"><FontAwesomeIcon icon={faSmileBeam} size="4x" /></div>
                                <div>
                                    <h3 className='invi-txt-head'>We are happy to hear your suggestions</h3>
                                    <p className="invi-txt">It is our honour to receive your valuable feedback and suggestions. We’ll surely adapt if we find them apt.</p>
                                </div>
                            </div>
                            <div className="my-4 d-flex flex-row">
                                <div className="pe-3 font-blue"><FontAwesomeIcon icon={faSistrix} size="5x" /></div>
                                <div>
                                    <h3 className='invi-txt-head'>Any issues? Tell us and we are open to correcting them</h3>
                                    <p className="invi-txt">Your feedback will never go futile, tell us if you faced any issues in our service, we promise to rectify them!</p>
                                </div>
                            </div>
                            <div className="my-4 d-flex flex-row">
                                <div className="pe-3 font-blue"><FontAwesomeIcon icon={faHurricane} size="5x" /></div>
                                <div>
                                    <h3 className='invi-txt-head'>Loved our service?</h3>
                                    <p className="invi-txt">If you honestly loved our service, take out a minute and write to us. We’ll keep striving to maintain the standards.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <form className="p-4 bg-light border" onSubmit={handleSubmit(onSubmit)}>
                                <div className="row g-3">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                        <label htmlFor="inputName" className="form-label">Name <span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" id="inputName" defaultValue={InputFields.name} {...register("name", { required: true, maxLength: 85 })} />
                                        <div className="fs-12rem text-danger">{errors.name?.type === "required" && "Name is Mandatory"}</div>
                                        <div className="fs-12rem text-danger">{errors.name?.type === "maxLength" && "Name cannot be more then 85 characters"}</div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                        <label htmlFor="inputEmail" className="form-label">Email address (optional)</label>
                                        <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" defaultValue={InputFields.email} {...register("email", { required: false, maxLength: 85, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} />
                                        <div id="emailHelp" className="form-text fs-12rem text-danger">{errors.email?.type === "pattern" && "Enter valid email address" || "We'll never share your email with anyone else."}</div>
                                        <div className="fs-12rem text-danger">{errors.email?.type === "maxLength" && "Email cannot be more then 85 characters"}</div>
                                    </div>
                                </div>
                                <div className="row g-3 mt-sm-1">
                                    <div className="col">
                                        <label htmlFor="inputBrand" className="form-label">Please select your feedback category <span className="text-danger">*</span></label>
                                        <select className="form-control" style={{ WebkitAppearance: 'none' }} value={InputFields.category} {...register("category", { required: true })} onChange={handleCategoryChange}>
                                            <option value=""></option>
                                            <option value="suggestion">Suggestion</option>
                                            <option value="something-wrong">Something is not quite right</option>
                                            <option value="compliment">Compliment</option>
                                        </select>
                                        <div className="fs-12rem text-danger">{errors.category?.type === "required" && "Category is Mandatory"}</div>
                                    </div>
                                </div>
                                <div className="row g-3 mt-2">
                                    <div className="col">
                                        <label htmlFor="inputName" className="form-label">Comments <span className="text-danger">*</span></label>
                                        <textarea className="form-control" rows="4" defaultValue={InputFields.comments} {...register("comments", { required: true, minLength: 20, maxLength: 200 })}></textarea>
                                        <div className="fs-12rem text-danger">{errors.comments?.type === "required" && "Comments is Mandatory"}</div>
                                        <div className="fs-12rem text-danger">{errors.comments?.type === "minLength" && "Enter atleast 20 characters"}</div>
                                        <div className="fs-12rem text-danger">{errors.comments?.type === "maxLength" && "Comments cannot be more then 200 characters"}</div>
                                    </div>
                                </div>
                                <button type="submit" disabled={DisableSubmitButton} className="btn-primary btn text-white rwt-bg-primary mt-3">{SubmitButton}</button>
                            </form>
                        </div>
                    </div>
                </div>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </section>
        </>
    )
}

export default Form