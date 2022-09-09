<template>
  <div class="wrapper">
    <transition appear @enter="ModalEnter">
      <div v-if="storeLogreg.created" class="custom-modal">
        <p class="text-blue-600 font-bold self-center">
          USUARIO CREADO CON EXITO
        </p>
        <button
          @click="moveToLogin()"
          type="submit"
          class="btn-blue-600 w-1/2 self-center mt-2"
        >
          Aceptar
        </button>
      </div>
    </transition>
    <transition appear @enter="ImgEnter">
      <div class="sm:w-1/2 h-full">
        <img class="h-full" src="@/assets/register.png" alt="" />
      </div>
    </transition>
    <div class="sm:w-1/2 h-full sm:pt-10">
      <form
        autocomplete="off"
        @submit.prevent="storeLogreg.CrearUsuario()"
        class="px-4 h-full space-y-7"
      >
        <transition appear @enter="MailInput">
          <div class="my-auto mx-auto">
            <label class="flex align-middle gap-4" for="emailInput"
              ><i class="w-4 inline-block text-blue-600"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </i>
              Email</label
            >
            <input
              @input="
                storeValidaciones.valMailFormat(),
                  storeValidaciones.valMailLen()
              "
              v-model="storeLogreg.Email"
              class="
                w-full
                border
                focus:outline-none focus:border-blue-600
                rounded
                py-1
                px-2
              "
              id="emailInput"
              type="email"
            />
            <transition appear @enter="Span">
              <span class="validation" v-if="storeLogreg.mailExist">
                El mail ingresado pertenece a un usuario registrado
              </span>
            </transition>
            <transition appear @enter="Span">
              <span class="validation" v-if="storeValidaciones.mailFormat">
                Formato de Email incorrecto
              </span>
            </transition>
            <transition appear @enter="Span">
              <span class="validation" v-if="storeValidaciones.mailLen">
                El campo Email es requerido
              </span>
            </transition>
          </div>
        </transition>
        <transition appear @enter="NameInput">
          <div class="my-auto mx-auto">
            <label class="flex align-middle gap-4" for="Nom"
              ><i class="w-4 inline-block text-blue-600"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </i>
              Nombre</label
            >
            <input
              @input="storeValidaciones.valNombreLen()"
              v-model="storeLogreg.Nombre"
              class="
                w-full
                border
                focus:outline-none focus:border-blue-600
                rounded
                py-1
                px-2
              "
              id="Nom"
              type="text"
            />
            <transition appear @enter="Span">
              <span class="validation" v-if="storeValidaciones.nombreLen">
                El nombre debe tener un minimo de 4 caracteres
              </span>
            </transition>
          </div>
        </transition>
        <transition appear @enter="UsuNameInput">
          <div class="my-auto mx-auto">
            <label class="flex align-middle gap-4" for="NomUsu"
              ><i class="w-4 inline-block text-blue-600"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </i>
              Nombre de usuario</label
            >
            <input
              @input="storeValidaciones.valUsuLen()"
              v-model="storeLogreg.UserName"
              class="
                w-full
                border
                focus:outline-none focus:border-blue-600
                rounded
                py-1
                px-2
              "
              id="NomUsu"
              type="text"
            />
            <transition appear @enter="Span">
              <span class="validation" v-if="storeValidaciones.usuMin">
                El nombre de usuario debe tener como minimo 4 caracteres
              </span>
            </transition>
              <transition appear @enter="Span">
                <span class="validation" v-if="storeValidaciones.usuMax">
                  El nombre de usuario debe tener como maximo 12 caracteres
                </span>
              </transition>          
          </div>
        </transition >
        <transition appear @enter="ImgInput">
          <div class="my-auto mx-auto">
            <label class="flex align-middle gap-4" for="imgInput">
              <i class="w-4 inline-block text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg> </i
              >Imagen de perfil
            </label>
            <input class="file-input" ref="file" type="file" @change="getImage">
          </div>
        </transition>
        <transition appear @enter="BioInput">
          <div class="my-auto mx-auto">
            <label class="flex align-middle gap-4" for="Bio"
              ><i class="w-4 inline-block text-blue-600"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
              </i>
              Biografía</label
            >
            <textarea
              v-model="storeLogreg.BioUsuario"
              class="
                w-full
                border
                focus:outline-none focus:border-blue-600
                rounded
                py-1
                px-2
              "
              id="Bio"
            />
          </div>
        </transition>
        <transition appear @enter="PassInput">
          <div class="my-auto mx-auto">
            <label class="flex align-middle gap-4" for="passwdInput"
              ><i class="w-4 inline-block text-blue-600"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                  />
                </svg>
              </i>
              Password</label
            >
            <input
              v-if="!storeValidaciones.showPass"
              @input="storeValidaciones.valContra()"
              v-model="storeLogreg.Contraseña"
              class="
                w-full
                border
                focus:outline-none focus:border-blue-600
                rounded
                py-1
                px-2
              "
              id="passwdInput"
              type="password"
            />
            <input
              v-if="storeValidaciones.showPass"
              @input="storeValidaciones.valContra()"
              v-model="storeLogreg.Contraseña"
              class="
                w-full
                border
                focus:outline-none focus:border-blue-600
                rounded
                py-1
                px-2
              "
              id="passwdInput"
              type="text"
            />
            <div class="check">
              <input
                class="mr-1 text-blue-600"
                type="checkbox"
                v-model="storeValidaciones.showPass"
              />
              <span
                ><i
                  class="text-blue-600"
                  :class="mclass"
                  v-if="
                    storeValidaciones.showPass == true
                      ? (mclass = 'bi bi-eye-fill')
                      : (mclass = 'bi bi-eye-slash-fill')
                  "
                ></i
              ></span>
            </div>
            <transition appear @enter="Span">
              <span class="validation" v-if="storeValidaciones.contraLen">
                La contraseña debe tener como minimo 8 caracteres
              </span>
            </transition>
            <transition appear @enter="Span">
              <span class="validation" v-if="storeValidaciones.contraMatch">
                Las contraseñas no coinciden
              </span>
            </transition>
          </div>
        </transition>
        <transition appear @enter="PassConInput">
          <div class="my-auto mx-auto">
            <label class="flex align-middle gap-4" for="conPasswdInput"
              ><i class="w-4 inline-block text-blue-600"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                  />
                </svg>
              </i>
              Confirmar contraseña</label
            >
            <input
              v-if="!storeValidaciones.showPass"
              @input="storeValidaciones.valContra()"
              v-model="storeLogreg.ConfirmarClave"
              class="
                w-full
                border
                focus:outline-none focus:border-blue-600
                rounded
                py-1
                px-2
              "
              id="conPasswdInput"
              type="password"
            />
            <input
              v-if="storeValidaciones.showPass"
              @input="storeValidaciones.valContra()"
              v-model="storeLogreg.ConfirmarClave"
              class="
                w-full
                border
                focus:outline-none focus:border-blue-600
                rounded
                py-1
                px-2
              "
              id="conPasswdInput"
              type="text"
            />
          </div>
        </transition>
        <transition appear @enter="BtnInput">
          <div class="w-full flex justify-center">
            <button type="submit" class="btn-blue-600">Crear Usuario</button>
          </div>
        </transition>
        <transition appear @enter="TxtInput">
          <div class="flex justify-center gap-2 pb-10">
            <span class="space-x-2">¿Ya tienes una cuenta?</span
            ><router-link
              class="text-blue-600 focus:outline-none focus:border-blue-800"
              :to="{ name: 'Login' }"
              >¡Inicia sesión aqui!</router-link
            >
          </div>
        </transition>
      </form>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
import gsap from "gsap";
import { LogReg } from "@/stores/LogReg";
const storeLogreg = LogReg();
import { Validaciones } from "@/stores/Validaciones";
const storeValidaciones = Validaciones();


const moveToLogin = () => {
  router.push("/Login")
  storeLogreg.created = false
  storeLogreg.Email = ""
  storeLogreg.Nombre = ""
  storeLogreg.UserName = ""
  storeLogreg.Contraseña = ""
  storeLogreg.ConfirmarClave = ""
  storeLogreg.BioUsuario = ""
};

const getImage = (event) => {
  console.log(event.target.files[0].name)
  let formData = new FormData();
  formData.append('Archivo', event.target.files[0]);
  storeLogreg.imgPrefil(formData)
}



//------------------------------------------ANIMATIONS----------------------------------------------//
const Span = (el) => {
  gsap.from(el, { scale: 0, duration: .75 });
};

const ImgEnter = (el) => {
  gsap.from(el, { opacity: 0, scale: 0, duration: 3, delay: 0.1 });
};

const MailInput = (el) => {
  gsap.from(el, { opacity: 0, duration: 2, x: -200, delay: 1 });
};

const NameInput = (el) => {
  gsap.from(el, { opacity: 0, duration: 2, x: -200, delay: 1.5 });
};

const UsuNameInput = (el) => {
  gsap.from(el, { opacity: 0, duration: 2, x: -200, delay: 2 });
};

const ImgInput = (el) => {
  gsap.from(el, { opacity: 0, duration: 2, x: -200, delay: 2.5 });
};

const BioInput = (el) => {
  gsap.from(el, { opacity: 0, duration: 2, x: -200, delay: 3 });
};

const PassInput = (el) => {
  gsap.from(el, { opacity: 0, duration: 2, x: -200, delay: 3.5 });
};

const PassConInput = (el) => {
  gsap.from(el, { opacity: 0, duration: 2, x: -200, delay: 4 });
};

const BtnInput = (el) => {
  gsap.from(el, { opacity: 0, duration: 2, scale: 0, delay: 4.5 });
};

const TxtInput = (el) => {
  gsap.from(el, { opacity: 0, duration: 2, scale: 0, delay: 5 });
};

const ModalEnter = (el) => {
  gsap.from(el, { opacity: 0, duration: 1, scale: 0, delay: 0.3 });
};
//------------------------------------------ANIMATIONS----------------------------------------------//
</script>

