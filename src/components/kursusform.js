import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const KursusForm = () => {
  return (
    <Formik
      initialValues={{
        navn: '',
        addresse: '',
        postnummer: '',
        by: '',
        mobil: '',
        email: '',
        sprog: '',
        kundskaber: '',
        emner: '',
      }}
      validationSchema={Yup.object().shape({
        navn: Yup.string().required('Navn er obligatorisk'),
        addresse: Yup.string().required('Addresse er obligatorisk'),
        postnummer: Yup.string().required('Postnummer er obligatorisk'),
        by: Yup.string().required('By er obligatorisk'),
        telefonnummer: Yup.string().required('Mobil er obligatorisk'),
        email: Yup.string()
          .email('Email er ikke korrekt')
          .required('Email er obligatorisk'),
        kundskaber: Yup.string().required('Sprogkundskaber er obligatorisk'),
      })}
      onSubmit={(values, actions) => {
        // fetch('/?no-cache=1', {
        fetch('/?no-cache=1', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({ 'form-name': 'contact', ...values }),
        })
          //          .then(() => {
          //            alert('Success')
          //            actions.resetForm()
          //          })
          .catch(() => {
            alert('Error')
          })
          .finally(() => actions.setSubmitting(false))
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/success"
        >
          <div className="form-row">
            <Field type="hidden" name="form-name" value="contact" />
            <div className="form-group col">
              <label htmlFor="navn">Navn</label>
              <Field
                name="navn"
                type="text"
                className={
                  'form-control' +
                  (errors.navn && touched.navn ? ' is-invalid' : '')
                }
              />
              <ErrorMessage
                name="navn"
                component="div"
                className="invalid-feedback"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col">
              <label htmlFor="navn">Addresse</label>
              <Field
                name="addresse"
                type="text"
                className={
                  'form-control' +
                  (errors.navn && touched.addresse ? ' is-invalid' : '')
                }
              />
              <ErrorMessage
                name="addresse"
                component="div"
                className="invalid-feedback"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-2">
              <label htmlFor="postnummer">Postnummer</label>
              <Field
                name="postnummer"
                type="text"
                className={
                  'form-control' +
                  (errors.postnummer && touched.postnummer ? ' is-invalid' : '')
                }
              />
              <ErrorMessage
                name="postnummer"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group col-10">
              <label htmlFor="by">By</label>
              <Field
                name="by"
                type="text"
                className={
                  'form-control' +
                  (errors.by && touched.by ? ' is-invalid' : '')
                }
              />
              <ErrorMessage
                name="by"
                component="div"
                className="invalid-feedback"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-5">
              <label htmlFor="telefonnummer">Telefonnummer</label>
              <Field
                name="telefonnummer"
                type="text"
                className={
                  'form-control' +
                  (errors.telefonnummer && touched.telefonnummer
                    ? ' is-invalid'
                    : '')
                }
              />
              <ErrorMessage
                name="telefonnummer"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group col-5">
              <label htmlFor="email">Email</label>
              <Field
                name="email"
                type="text"
                className={
                  'form-control' +
                  (errors.email && touched.email ? ' is-invalid' : '')
                }
              />
              <ErrorMessage
                name="email"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group col">
              <label htmlFor="sprog">Sprog</label>
              <Field
                name="sprog"
                as="select"
                className={
                  'form-control' +
                  (errors.sprog && touched.sprog ? ' is-invalid' : '')
                }
              >
                <option value="undefined"> </option>
                <option value="tysk">Tysk</option>
                <option value="fransk">Fransk</option>
              </Field>
              <ErrorMessage
                name="sprog"
                component="div"
                className="invalid-feedback"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col">
              <label htmlFor="kundskaber">Sprogkundskaber</label>
              <Field
                name="kundskaber"
                component="textarea"
                className={
                  'form-control' +
                  (errors.kundskaber && touched.kundskaber ? ' is-invalid' : '')
                }
                placeholder="Beskriv dine sprogkundskaber, og hvorfor du ønsker et sprogkursus?"
              />
              <ErrorMessage
                name="kundskaber"
                component="div"
                className="invalid-feedback"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col">
              <label htmlFor="emner">Emner</label>
              <Field
                name="emner"
                component="textarea"
                className={
                  'form-control' +
                  (errors.emner && touched.emner ? ' is-invalid' : '')
                }
                placeholder="Er der nogle emner som du gerne vil beskæftige dig med?"
              />
              <ErrorMessage
                name="emner"
                component="div"
                className="invalid-feedback"
              />
            </div>
          </div>

          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary mr-2"
              disabled={isSubmitting}
            >
              Tilmeld
            </button>
            {/*
            <button type="reset" className="btn btn-secondary">
              Reset
            </button>
            */}
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default KursusForm
