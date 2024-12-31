import React from 'react'
import {Formik,Form,ErrorMessage,Field} from 'formik'
import * as Yup from 'yup'


const LoginForm = () => {  

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Required"),
  });

  const initialValues = {
    FullName:"",
    email: "" ,
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Form values:", values);
    setSubmitting(false);
  };

  return (
    <div>
      <Formik>
      initialValues={initialValues}
      onSubmit = {handleSubmit}
      validationSchema = {validationSchema}
        {({isSubmitting})=>(
          <Form>
            <Field
              type="text"
              name='FullName'
              placeholder="Enter Name"
            />
            <ErrorMessage name="FullName" component='div'/>

            <Field
              type="email"
              name="email"
              placeholder="Your Gmail"
            />
            <ErrorMessage name="email" component='div'/>

            <button type="submit" disabled={isSubmitting}>
               Submit
             </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default LoginForm