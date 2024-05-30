<template>
  <div class="top-header">
    <div class="container">
      <div class="row">
        <div class="col-xl-3 col-lg-4 col-sm-4 top-header-left-column">
          <div class="top-header-left top-header-v-centered">
            <div class="currency">
              <img src="/images/new_evacode/rus_flag.png" alt="currency">
            </div>
            <div class="header-contact">
              <ul>
                <li v-if="contacts">
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  <phone-link :phone="contacts.phone"/>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-4 col-sm-4 col-8 top-header-center-column">
          <div class="top-header-center top-header-v-centered">
            <div class="brand-logo">
              <nuxt-link :to="{ path: '/' }">
                <img src="/images/new_evacode/evacode_header_logo.svg" class="img-fluid" alt/>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-sm-4 col-4 top-header-right-column">
          <div class="top-header-right top-header-v-centered">
            <div class="main-menu">
              <div class="menu-right pull-right">
                <WidgetsNavbar />
                <WidgetsHeaderWidgets/>
              </div>
            </div>
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
