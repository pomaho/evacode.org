<template>
  <Header/>
  <div>
    <WidgetsBreadcrumbs title="Контакты"/>
    <section class="contact-page section-b-space">
      <div class="container">
        <div class="row section-b-space">
          <div class="col-lg-7 map">
            <iframe
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=ru&amp;q=Gyeonggi-do,%20Ansan-si,%20Danwon-gu,%20Choji-dong,%20742-3,%20210%ED%98%B8+(Evacode)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                allowfullscreen></iframe>
          </div>
          <div class="col-lg-5">
            <div v-if="contacts" class="contact-right">
              <ul>
                <li>
                  <div class="contact-icon">
                    <img :src="phoneimage" alt="Generic placeholder image"/>
                    <h6>Звоните</h6>
                  </div>
                  <div class="media-body">
                    <p><phone-link :phone="contacts.phone" /> (там WhatsApp)</p>
                  </div>
                </li>
                <li>
                  <div class="contact-icon">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <h6>Адрес</h6>
                  </div>
                  <div class="media-body">
                    <p v-html="contacts.address"></p>
                  </div>
                </li>
                <li>
                  <div class="contact-icon">
                    <img :src="emailimage" alt="Generic placeholder image"/>
                    <h6>Email</h6>
                  </div>
                  <div class="media-body">
                    <p><mail-link :email="contacts.email"/></p>
                    <p></p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <Footer/>
</template>
<script setup>
  import {useContactsStore} from '~~/store/contacts'
  const contacts = await useContactsStore().contacts;

  const phoneimage = '/images/evacode/icon/phone.png';
  const emailimage = '/images/evacode/icon/email.png';
</script>

<style scoped>
.map {
  height: 435px;
}
.contact-page label {
  text-transform: none;
}
</style>
