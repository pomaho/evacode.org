<template>
  <div class="top-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="header-contact">
            <ul>
              <li>Добро пожаловать в наш интернет-магазин "Evacode"</li>
              <li>
                <i class="fa fa-phone" aria-hidden="true"></i>Звоните нам: <phone-link :phone="contacts.phone"/> (там WhatsApp)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useContactsStore} from '~~/store/contacts'
const contacts = await useContactsStore().contacts;
</script>
