import { defineStore } from 'pinia'
import { Validaciones } from "./Validaciones"
import { ref } from 'vue'
import axios from "axios";

export const LogReg = defineStore('LogReg', () => {
const storeValidaciones = Validaciones

  const Email = ref('')  
  const Nombre = ref('')
  const UserName = ref('')
  const Contraseña = ref('')
  const ConfirmarClave = ref('')
  const BioUsuario = ref('')
  const mailExist = ref(false)
  const credentials = ref(false)

  const valMailExist = () => {
    mailExist.value = true
  }

  const valCredentials = () => {
    credentials.value = true
  }

  const iniciarSesion = () =>{
    let jsonDatos = {
        Email: Email.value,
        Contraseña: Contraseña.value
    }

    axios.post('https://localhost:7158/api/Usuario/Login', jsonDatos).then(res=>{
        console.log(res)
        if(res.status === 200){
            alert('Todo ok')
            credentials.value = false
        }else{
          valCredentials()
        }
    }).catch(function (error) {          
        console.log(error)          
      })
}

const CrearUsuario = () =>{
  let jsonDatos = {
    Email: Email.value,
    Nombre : Nombre.value,
    UserName: UserName.value,
    Contraseña: Contraseña.value,
    ConfirmarClave: ConfirmarClave.value,
    BioUsuario: BioUsuario.value
  }

  axios.post('https://localhost:7158/api/Usuario/CrearUsuario', jsonDatos).then(res => {
    console.log(res)
    if(res.status === 200){
        alert('Todo ok')
    }else if(res.status === 204){        
        valMailExist()
    }else if(res.status === 400){
      alert('Error inesperado')
    }
}).catch(function (error) {          
    console.log(error) 
  })
}

  return { 
    Email, 
    Contraseña, 
    Nombre, 
    UserName, 
    ConfirmarClave, 
    BioUsuario, 
    iniciarSesion, 
    CrearUsuario, 
    valMailExist, 
    mailExist, 
    credentials, 
    valCredentials }
})
