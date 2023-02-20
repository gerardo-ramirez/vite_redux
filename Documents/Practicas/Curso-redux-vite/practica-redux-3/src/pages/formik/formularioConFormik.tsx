import React, { useState} from 'react'
import { Formik } from 'formik'
//Podemos importar Form y Field en vez de usar un input y el form de html nos ahorramos
//llamar a onchange, onBlur , etc
//touched : cuando un input es tocado 
const FormularioConFormik = () => {
const [formSubmit, setFormSubmit] = useState(false);
    const onSubmit=(data:any)=>{
        console.log(data)
    }
  
  return (
    <div>formik
        <Formik
        initialValues={
            {nombre:'juan',
            mail: 'juan@gmail.com'
        }}
        onSubmit={(values, {resetForm})=>{resetForm(); 
            console.log('formulario enviado');
            setFormSubmit(true);
            setTimeout(() => setFormSubmit(false),5000)
        }}
        validate={(values)=>{
            let errores={}
            if(!values.nombre){
                errores.nombre ="ingrese un nombre"
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombre)){
                errores.nombre = "el formato de nombre no es valido"

            }
            if (!values.mail) {
                errores.mail = "ingrese un mail"
            } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.mail)) {
                errores.mail = "el formato de mail no es valido"

            }
            return errores

        }}
        >
              {({ handleSubmit, errors, values, handleChange,handleBlur, touched })=>(
                 //touched.mail para que el error aparezca en el campo que se tocó
                 <form onSubmit={handleSubmit}>
                      <div>

                          <label htmlFor='nombre'>Nombre</label>
                          <input type={'text'} id='nombre' name='nombre' placeholder='john' value={values.nombre} onChange={handleChange} onBlur={handleBlur}/>
                            {touched.nombre && errors.nombre && <div><p>{errors.nombre}</p></div>}
                      </div>
                      <div>

                          <label htmlFor='mail'>mail</label>
                          <input type={'text'} id='mail' name='mail' placeholder='john@j.com' value={values.mail} onChange={handleChange} onBlur={handleBlur} />
                          {touched.mail && errors.mail && <div><p>{errors.mail}</p></div>}
                      </div>
                      <div>
                          <button type='submit'>Enviar</button>
                      </div>
                      {formSubmit &&
                      <div><h2>formulario enviado!!</h2></div>
                      }
                      
                  </form>
            )}
        </Formik>
    </div>
  )
}

export default FormularioConFormik