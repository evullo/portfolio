<script setup lang="ts">
import emailjs from '@emailjs/browser'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const { t } = useI18n()

const form = ref<HTMLFormElement | null>(null)
const name = ref<string>('')
const email = ref<string>('')
const message = ref<string>('')
const success = ref<boolean>(false)
const error = ref<string | null>(null)

const nameError = ref<string | null>(null)
const emailError = ref<string | null>(null)
const messageError = ref<string | null>(null)

const sendEmail = (e: Event) => {
  e.preventDefault()
  
  if (!form.value || nameError.value || emailError.value || messageError.value) return

  emailjs.sendForm('service_agf9mh5', 'template_1w459ln', form.value, {
    publicKey: 'kEGjdxoKYWt7Dq79n',
  })
  .then(() => {
      success.value = true
      setTimeout(() => {success.value = false}, 5000)
    },
    (err) => {
      error.value = err.text
      setTimeout(() => {error.value = null}, 5000)
    },
  )
}

const checkName = () => {
  if (name.value.length < 3) {
    nameError.value = t('contact.nameError')
  } else {
    nameError.value = null
  }
}

const validEmail = () => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (!re.test(email.value)) {
    emailError.value = t('contact.emailError')
  } else {
    emailError.value = null
  }
}

const checkMessage = () => {
  if (message.value.length < 1) {
    messageError.value = t('contact.messageError')
  } else {
    messageError.value = null
  }
}
</script>

<template>
  <form ref="form" @submit="sendEmail" class="flex flex-col w-full md:w-2/3">
    <label>{{ $t('contact.name') }}</label>
    <input type="text" @input="checkName" v-model="name" name="from_name" class="px-2 py-1 rounded-md text-purple-dark">
    <span v-show="nameError" class="text-red-500">{{ nameError }}</span>
    
    <label class="mt-4">{{ $t('contact.email') }}</label>
    <input type="email" @input="validEmail" v-model="email" name="reply_to" class="px-2 py-1 rounded-md text-purple-dark">
    <span v-show="emailError" class="text-red-500">{{ emailError }}</span>
    
    <label class="mt-4">{{ $t('contact.message') }}</label>
    <textarea @input="checkMessage" v-model="message" name="message" class="px-2 py-1 rounded-md text-purple-dark"></textarea>
    <span v-show="messageError" class="text-red-500">{{ emailError }}</span>
    
    <input type="submit" :value="$t('contact.send')" class="bg-purple rounded-md py-1 mt-4 cursor-pointer transition-all ease-in-out duration-500 focus:bg-purple-dark md:hover:bg-purple-dark">
    
    <span v-show="success" class="text-green-500 text-center">{{ $t('contact.success') }}</span>
    <span v-show="error" class="text-red-500 text center">{{ $t('contact.error') }}</span>
  </form>
</template>
