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
            <div class="contact-right">
              <ul>
                <li>
                  <div class="contact-icon">
                    <img :src="phoneimage" alt="Generic placeholder image"/>
                    <h6>Звоните</h6>
                  </div>
                  <div class="media-body">
                    <p><phone-link :phone="phone1" /> (там WhatsApp)</p>
                  </div>
                </li>
                <li>
                  <div class="contact-icon">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <h6>Адрес</h6>
                  </div>
                  <div class="media-body">
                    <p v-html="address"></p>
                  </div>
                </li>
                <li>
                  <div class="contact-icon">
                    <img :src="emailimage" alt="Generic placeholder image"/>
                    <h6>Email</h6>
                  </div>
                  <div class="media-body">
                    <p><mail-link :email="email1"/></p>
                    <p><mail-link :email="email2"/></p>
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
<script>

export default {

  data() {
    return {
      phoneimage: '/images/evacode/icon/phone.png',
      emailimage: '/images/evacode/icon/email.png',
      phone1: '+8210-7652-8595',
      phone2: '',
      address: '안산시 단원구 초지동 742-3, 2 этаж, 210 кабинет <br />' +
          'Gyeonggi-do, Ansan-si, Danwon-gu, Choji-dong, 742-3, 210호',
      email1: 'sales@evacode.org',
      email2: '',
      errors: [],
      fname: null,
      lname: null,
      email: null,
      phone: null,
      message: null
    }
  },
  methods: {
    checkForm: function (e) {
      this.errors = []
      if (!this.fname) {
        this.errors.push('First name required.')
      }
      if (!this.lname) {
        this.errors.push('Фамилия required.')
      }
      if (!this.email) {
        this.errors.push('Email required.')
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Valid email required.')
      }
      if (!this.phone) {
        this.errors.push('Номер телефона required.')
      }
      if (!this.message) {
        this.errors.push('Message required.')
      }
      if (!this.errors.length) return true
      e.preventDefault()
    },
    validEmail: function (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  }
}
</script>

<style scoped>
.map {
  height: 435px;
}
.contact-page label {
  text-transform: none;
}
</style>
