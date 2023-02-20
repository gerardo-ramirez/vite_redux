import React from 'react'
import { useForm } from 'react-hook-form';
//formulario usando useForm de react-hook-form
const Form = () => {
    const { register,formState:{errors}, handleSubmit, watch }= useForm({
        defaultValues:{
            nombre:'Pedro'
        }
    }); 
    const onSubmit=(data:any)=>{
        console.log(data)
    }
    const validarEdad =value =>{
        return value > 18
    }
    const incluirTel = watch('incluirTelefono');
  return (
    <div>form
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <h2>Nombre: {watch('nombre')}</h2>
                <label>Nombre</label>
                <input type={'text'} {...register('nombre',{
                    required:true
                })}/>
                {errors.nombre?.type === 'required' && <p> el campo es requerido</p>}
            </div>
              <div>
                  <label>Direccion</label>
                  <input type={'text'} {...register('direccion', {
                      required: true
                  })} />
              </div>
              <div>
                  <label>Edad</label>
                  <input type={'text'} {...register('edad', {
                      required: true,
                      validate: validarEdad
                  })} />
                  {errors.edad && <p>la edad de ser mas de 18</p>}
              </div>
              <div>
                  <label>Pais</label>
                  <select {...register('pais', {
                      required: true
                  })}>
                   
                    <option value="es">españa</option>
                    <option value="it">italia</option>
                    <option value="fr">francia</option>
                  </select>
              </div>
              <div>
                  <label>Mailn</label>
                  <input type={'text'} {...register('mail', {
                      pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/
                  })} />
                  {errors.mail?.type === 'pattern' && <p> el mail no es valido</p>}
              </div>
              <div>
                  <label>enviar telefono?</label>
               <input type={'checkbox'} {...register('incluirTelefono')} />
              </div>
              {incluirTel &&
                  <div>
                      <label>enviar telefono?</label>
                      <input type={'text'} {...register('telefono')} />
                  </div>
            }
             
            <input type={"submit"} value="enviar"/>
        </form>
    </div>
  )
}

export default Form