<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'

// import { useUsersStore } from '~/stores/user'

const router = useRouter()
// const usersStore = useUsersStore()
const showPassword = ref<boolean>(false)
function changeShow() {
  showPassword.value === false ? showPassword.value = true : showPassword.value = false
}
async function login() {
  //   await usersStore.login(fields)
  router.push('/admin/dashboard')
}
</script>

<template>
  <div class="grid h-100vh place-items-center bg-primary">
    <div class="mx-4 flex flex-col items-start gap-3 rounded-12px bg-white px-5 py-4">
      <div class="text-4.5">
        Kirish
      </div>
      <FormKit
        id="myForm"
        type="form"
        submit-label=" "
        incomplete-message="Ma'lumotlarni to'g'ri kiriting!"
        @submit="login"
      >
        <FormKit
          id="username"
          validation="required|length:5,20"
          name="username"
          label="Usernameni kiriting"
          validation-visibility="live"
          :validation-messages="{
            required: 'To\'ldirish shart',
            length: '5 dan 20 tagacha belgi kiriting',

          }"
          min="5"
          type="text"
          input-class="w-full border border-gray-300 rounded-bl-6px rounded-tr-6px px-2 pl-2"
          placeholder="Usernameni kiriting"
        />
        <div class="relative flex flex-col items-end gap-1">
          <FormKit
            id="password"
            validation="required|length:4,16"
            min="8"
            name="password"
            validation-visibility="live"
            :validation-messages="{
              required: 'To\'ldirish shart',
              length: '4 dan 16 tagacha belgi kiriting',
            }"
            label="Parolingizni kiriting"
            :type="showPassword ? 'text' : 'password'"
            input-class="w-full border border-gray-300 rounded-bl-6px rounded-tr-6px px-2 pl-2"
            placeholder="Parolni kiriting"
          />
          <span
            class="text-gray-9000 h-27px inline-flex cursor-pointer items-center border border-gray-300 rounded-bl-6px rounded-tr-6px bg-white px-3 text-sm"
            @click="changeShow"
          >
            <Icon
              :icon="!showPassword ? 'ri-eye-line' : 'ri-eye-off-line'"
              class="bg-white"
            />
          </span>
        </div>
        <the-button class="mt-3 w-full" type="submit">
          Kirish
        </the-button>
      </FormKit>
    </div>
  </div>
</template>

<style lang="scss">
.formkit-messages li {
  color: red !important;
}
</style>
