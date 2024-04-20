<template>
  <div v-if="contacts" class="footer-social">
    <ul>
      <li><a target="_blank" :href="contacts.facebook"><i class="fa fa-facebook-f"></i></a></li>
      <li><a target="_blank" :href="contacts.instagram"><i class="fa fa-instagram"></i></a></li>
      <li><a target="_blank" :href="contacts.telegram"><i class="fa fa-telegram"></i></a></li>
    </ul>
  </div>
</template>

<script setup>
// import {useContactsStore} from '~~/store/contacts'
// const contacts = await useContactsStore().contacts;
const {data: contactsResponse} = await useAsyncData(
    'contactsResponse',
    () => $fetch(`${useRuntimeConfig().public.apiBase}/core/contacts`),
    {
      server: false,
    }
);

const contacts = computed(() => contactsResponse.value?.results[0]);

</script>

<style scoped>

</style>
