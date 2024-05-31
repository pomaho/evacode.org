<template>
  <div class="header-contact">
    <ul>
      <li v-if="contacts">
        <i class="fa fa-phone" aria-hidden="true"></i>
        <phone-link :phone="contacts.phone"/>
      </li>
    </ul>
  </div>

</template>

<script setup>
import {useContactsStore} from '~~/store/contacts'
const contacts = await useContactsStore().contacts;
</script>
