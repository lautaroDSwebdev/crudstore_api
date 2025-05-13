// import { useMutationClientes } from '../../intercecptors';
// import { UnCliente } from '../../types/TypesTiendaBackend';
// import { SubmitHandler, useForm } from 'react-hook-form';

// export const FormClient = () => {

//      const { GetClients , mutationPostClientes , mutationPutCliente} = useMutationClientes();
//     console.log("data de clientes")
//     console.log(GetClients.data)
//         const { register, handleSubmit } = useForm<UnCliente>();

//         const onSubmit: SubmitHandler<UnCliente> = (dataClient) => {
//             if (dataClient.id_cliente) {
//                 mutationPutCliente.mutate(dataClient)
//                 console.log(dataClient.id_cliente)
//                 console.log("data editada")
//             } else {
//                 mutationPostClientes.mutate(dataClient)
//                 console.log("data creada")
//                 console.log(dataClient)
    
//             }
//         }
//   return (
//     <div>
//         <h2 className="">Formulario de Cliente</h2>
//             <div className="form-container">
//                 <div className="div_form">
//                     <form onSubmit={handleSubmit(onSubmit)}>
//                         <section>
//                             <h2>Cliente</h2>

//                             <div className="form-group">
//                                 <input type="text" placeholder='nombre' {...register("nombre_cliente")} />
//                             </div>
//                             <div className="form-group">
//                                 <input type="text" placeholder='apellido' {...register("apellido")} />
//                             </div>
//                             <div className="form-group">
//                                 <input type="number" placeholder='dni'  {...register("dni")} />
//                             </div>
//                             <div className="form-group">
//                                 <input type="number" placeholder="edad" {...register("edad")} />
//                             </div>
//                         </section>
//                         <section>
//                             <input type='submit'></input>
//                         </section>
//                     </form>
//                 </div>
//             </div>
//     </div>
//   )
// }
