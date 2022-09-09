<template>
  <div class="wrapper">
    <transition appear @enter="ImgEnter">
      <div class="sm:w-1/2 h-full">
        <img
          class="h-full"
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          alt=""
        />
      </div>
    </transition>
    <div class="sm:w-1/2 h-full pt-3 sm:pt-24">
      <form
      autocomplete="off"
        @submit.prevent="storeLogreg.iniciarSesion"
        class="px-4 h-full space-y-7"
      >
        <transition appear @enter ="MailInput">
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
              @input="storeValidaciones.valMailFormat()"
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
              <span class="validation" v-if="storeValidaciones.mailFormat">
                Formato de Email incorrecto
              </span>
            </transition>
          </div>
        </transition>
        <transition appear @enter ="PassInput">
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
          </div>
        </transition>
        <transition appear @enter="Span"><span v-if="storeLogreg.credentials" class="validation mx-auto w-full">Credenciales invalidas</span></transition>
        <transition appear @enter ="BtnInput">
          <div class="w-full flex justify-center">
            <button
              type="submit"
              class="btn-blue-600">
              Iniciar Sesión
            </button>
          </div>
        </transition>
        <transition appear @enter ="TxtInput">
          <div class="flex justify-center gap-2">
            <span class="space-x-2">¿Aun no tienes una cuenta?</span
            ><router-link
              class="text-blue-600 focus:outline-none focus:border-blue-800"
              :to="{ name: 'Registro' }"
              >¡Registrate aqui!</router-link
            >
          </div>
        </transition>
      </form>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap'
import { LogReg } from "@/stores/LogReg";
const storeLogreg = LogReg();
import { Validaciones } from "@/stores/Validaciones";
const storeValidaciones = Validaciones();

//------------------------------------------ANIMATIONS----------------------------------------------//
const Span = (el) => {
  gsap.from(el, { scale: 0, duration: .75 });
};

const ImgEnter = (el) => {
  gsap.from(el, {opacity:0, scale:0, duration:3, delay: .1} )
 }

const MailInput = (el) => {
  gsap.from(el, {opacity:0, duration: 2, x:-200, delay: 1} )
}

const PassInput = (el) => {
  gsap.from(el, {opacity:0, duration: 2, x:-200, delay: 1.5} )
}

const BtnInput = (el) => {
  gsap.from(el, {opacity:0, duration: 2, scale:0, delay: 2} )
}

const TxtInput = (el) => {
  gsap.from(el, {opacity:0, duration: 2, scale:0, delay: 2.5} )
}
 //------------------------------------------ANIMATIONS----------------------------------------------//
</script>



