import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom";



export default function AddJob() {

    const App = () => {


    }

    return (
        <div>


            <Formik initialValues={{
                description: "",
                jobPositionId: "",
                workTimeId: "",
                workPlaceId: "",
                openPositions: "",
                cityId: "",
                minSalary: "",
                maxSalary: "",
                lastDate: "",
            }}
                validationSchema={
                    Yup.object({
                        description: Yup.string().required("Lütfen Tüm Alanları Doldurun"),
                        jobPositionId: Yup.string().required("Lütfen Tüm Alanları Doldurun"),
                        workTimeId: Yup.string().required("Lütfen Tüm Alanları Doldurun").oneOf(["Tam Zamanlı", "Yarı Zamanlı", "Part Time"]),
                        workPlaceId: Yup.string().required("Lütfen Tüm Alanları Doldurun").oneOf(["İş yerinde", "Uzaktan"]),
                        cityId: Yup.string().required("Lütfen Tüm Alanları Doldurun"),
                        maxSalary: Yup.number().min(5000, "5000 den küçük olamaz").required("Lütfen Tüm Alanları Doğru Doldurun"),
                        minSalary: Yup.number().min(2500, "2500 den küçük olamaz").required("Lütfen Tüm Alanları Doğru Doldurun"),
                        lastDate: Yup.string().required("Lütfen Tüm Alanları Doldurun")
                    })
                }
                onSubmit={(values, { resetForm, setSubmitting }) => {
                    setTimeout(() => {
                        resetForm();
                        setSubmitting(false);
                    }, 3000);

                }}
            >
                {({
                    values,
                    errors,
                    handleChange,
                    handleSubmit,
                    handleReset,
                    dirty,
                    touched,
                    isSubmitting }) => (
                    <form onSubmit={handleSubmit}>
                        <h3>
                            İş İlanı Ekle
                        </h3>



                        <label htmlFor="workTimeId" className="topMargin">

                        </label>

                        <select
                            id="workPlaceId"
                            value={values.workPlaceId}
                            onChange={handleChange}
                            style={{
                                marginTop: 10,
                                width: "150px",
                                padding: "10px 15 px",
                                outline: "none"
                            }}
                        >
                            <option value="" label="Çalışma Yeri Seçin" ></option>
                            <option value="İş Yerinde" label="İş Yerinde" ></option>
                            <option value="Uzaktan" label="Uzaktan" ></option>
                        </select>


                        {
                            errors.workTimeId && touched.workTimeId && (
                                <div className="input-feedback">{errors.workTimeId}</div>

                            )}

                        <label htmlFor="workTimeId" className="topMargin">

                        </label>

                        <select
                            id="workTimeId"
                            value={values.workTimeId}
                            onChange={handleChange}
                            style={{
                                marginTop: 10,
                                width: "150px",
                                padding: "10px 15 px",
                                outline: "none"
                            }}
                        >
                            <option value="" label="İş Türünü Seçin" ></option>
                            <option value="Tam Zamanlı" label="Tam Zamanlı" ></option>
                            <option value="Yarı Zamanlı" label="Yarı Zamanlı" ></option>
                            <option value="Staj" label="Staj" ></option>
                        </select>

                        {
                            errors.workTimeId && touched.workTimeId && (
                                <div className="input-feedback">{errors.workTimeId}</div>

                            )}

                        <label htmlFor="jobPositionId"></label>
                        <input
                            id="jobPositionId"
                            type="selection"
                            placeholder="İş Pozisyonu Ekleyin"
                            className="input"
                            value={values.jobPositionId}
                            onChange={handleChange}
                        />

                        {
                            errors.jobPositionId && touched.jobPositionId && (
                                <div className="input-feedback">{errors.jobPositionId}</div>

                            )}

                        <label htmlFor="cityId"></label>
                        <input
                            id="cityId"
                            type="selection"
                            placeholder="Şehir Ekleyin"
                            className="input"
                            value={values.cityId}
                            onChange={handleChange}
                        />


                        {
                            errors.cityId && touched.cityId && (
                                <div className="input-feedback">{errors.cityId}</div>

                            )}




                        <label htmlFor="maxSalary"></label>
                        <input
                            id="maxSalary"
                            type="selection"
                            placeholder="En Yüksek Maaş"
                            className="input"
                            value={values.maxSalary}
                            onChange={handleChange}
                        />

                        {
                            errors.maxSalary && touched.maxSalary && (
                                <div className="input-feedback">{errors.maxSalary}</div>

                            )}


                        <label htmlFor="minSalary"></label>
                        <input
                            id="minSalary"
                            type="selection"
                            placeholder="En Düşük Maaş"
                            className="input"
                            value={values.minSalary}
                            onChange={handleChange}
                        />

                        {
                            errors.minSalary && touched.minSalary && (
                                <div className="input-feedback">{errors.minSalary}</div>

                            )}

                        <form htmlFor="lastDate">
                            <TextField
                                id="lastDate"
                                label="Son Başvuru Tarihi"
                                type="date"
                                defaultValue=""
                                className="input"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />

                            {
                                errors.lastDate && touched.lastDate && (
                                    <div className="input-feedback">{errors.lastDate}</div>

                                )}


                        </form>

                        <button type="submit" disabled={!dirty || isSubmitting} >
                            Ekle
                        </button>

                    </form>
                )
                }

            </Formik>






        </div>



    )



}
