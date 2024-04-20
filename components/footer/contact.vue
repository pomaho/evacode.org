<template>
  <ul v-if="contacts" class="contact-list">
    <li><i class="fa fa-map-marker"></i>{{contacts.address}}
    </li>
    <li><i class="fa fa-phone"></i>Телефон: <phone-link :phone="contacts.phone"/> (там WhatsApp)</li>
    <li><i class="fa fa-envelope"></i>Email Us: <mail-link :email="contacts.email"/></li>
  </ul>
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
ul.contact-list  li {
  text-transform: none;
}
</style>
