import { defineStore } from 'pinia'
import { ref } from 'vue'
import { LogReg } from "./LogReg"


export const Validaciones = defineStore('Validaciones', () => {
  const storeLocalLogreg = LogReg()

  let mailFormat = ref(false)
  const valMailFormat = () => {
    var validRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    if (storeLocalLogreg.Email.match(validRegex)) {
      mailFormat.value = false
    }
    else {
      mailFormat.value = true
    }
  }

  let mailLen = ref(false)
  const valMailLen = () => {
    if (storeLocalLogreg.Email.length === 0)
      mailLen.value = true
    else {
      mailLen.value = false
    }
  }

  let nombreLen = ref(false)
  const valNombreLen = () => {
    if (storeLocalLogreg.Nombre.length < 4)
      nombreLen.value = true
    if (storeLocalLogreg.Nombre.length >= 4)
      nombreLen.value = false
  }

  let usuMin = ref(false)
  let usuMax = ref(false)
  const valUsuLen = () => {
    if (storeLocalLogreg.UserName.length < 4) {
      usuMin.value = true
      usuMax.value = false
    } else if (storeLocalLogreg.UserName.length > 12) {
      usuMin.value = false
      usuMax.value = true
    } else if (storeLocalLogreg.UserName.length >= 4 || storeLocalLogreg.UserName.length <= 12) {
      usuMin.value = false
      usuMax.value = false
    }
  }

  let contraLen = ref(false)
  let contraMatch = ref(false)
  const valContra = () => {
    if (storeLocalLogreg.Contraseña.length < 8) {
      contraLen.value = true
    } else if (storeLocalLogreg.Contraseña.length >= 8) {
      contraLen.value = false
    }
    if (storeLocalLogreg.Contraseña === storeLocalLogreg.ConfirmarClave) {
      contraMatch.value = false
    } else {
      contraMatch.value = true
    }
  }

  let showPass = ref(false)

  return {
    mailFormat,
    valMailFormat,
    mailLen,
    valMailLen,
    nombreLen,
    valNombreLen,
    usuMin,
    usuMax,
    valUsuLen,
    contraLen,
    contraMatch,
    valContra,
    showPass    
  }
})