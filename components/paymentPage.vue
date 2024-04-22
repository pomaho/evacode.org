<template>
  <section class="section-b-space">
    <div class="container">
      <div class="checkout-page">
        <div class="checkout-form">
          <form>
            <div class="row">
              <div class="col-lg-6 col-sm-12">
                <div class="checkout-title">
                  <h3>Ваши данные</h3>
                </div>
                <div class="row check-out">
                  <div class="form-group col-md-6 col-sm-6">
                    <div class="field-label">Имя</div>
                    <input type="text" v-model="user.firstName.value" name="First name"/>
                    <span class="validate-error" v-if="user.firstName.value.length === 0">{{
                        user.firstName.errormsg
                      }}</span>
                  </div>
                  <div class="form-group col-md-6 col-sm-6">
                    <div class="field-label">Телефон</div>
                    <input type="tel" v-model="user.phone.value" name="Phone"/>
                    <span class="validate-error" v-if="user.phone.value.length === 0">{{ user.phone.errormsg }}</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-sm-12">
                <div class="checkout-details">
                  <div class="order-box">
                    <div class="title-box">
                      <div>
                        Продукт
                        <span>Всего</span>
                      </div>
                    </div>
                    <ul class="qty" v-if="cart.length">
                      <li v-for="(item, index) in cart" :key="index">
                        {{ item.title }} X {{ item.quantity }}
                        <span>{{ curr.symbol }}{{ (item.retail_price * curr.curr) * item.quantity }}</span>
                      </li>
                    </ul>
                    <ul class="sub-total">
                      <li>
                        Общая стоимость
                        <span class="count">{{ curr.symbol }}{{ cartTotal * curr.curr }}</span>
                      </li>
                    </ul>
                  </div>
                  <div class="payment-box">
                    <div class="text-end">
                      <button class="btn btn-primary" @click.prevent="onSubmit">Отправить заказ</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import {useCartStore} from '~~/store/cart'
import {useProductStore} from '~~/store/products'

export default {
  computed: {
    cart() {
      return useCartStore().cartItems
    },
    cartTotal() {
      return useCartStore().cartTotalAmount;
    },
    curr() {
      return useProductStore().changeCurrency
    },
  },
  data() {
    return {
      items: [{
        stripePriceId: '1',
        quantity: 5
      }],
      selectedPayment: 'paypal',
      errors: [],
      user: {
        firstName: {value: '', errormsg: ''},
        phone: {value: '', errormsg: ''},
      },
      isLogin: false,
      paypal: {
        sandbox: 'Your_Sendbox_Key'
      },
      payment: false,
      environment: 'sandbox',
      button_style: {
        label: 'checkout',
        size: 'medium', // small | medium | large | responsive
        shape: 'pill', // pill | rect
        color: 'blue' // gold | blue | silver | black
      },
      amtchar: ''
    }
  },

  watch: {
    cart: {
      handler(value) {
        if (value.length == 0) {
          useNuxtApp().$showToast({msg: 'Cart is Empty.', type: 'error'})
          this.$router.replace('/page/account/cart')
        }

      }, deep: true
    }
  },


  methods: {
    validateFields() {
      let isValidForm = true;
      const empty_error_msg = 'Обязательное поле'
      if (this.user.firstName.value.length <= 1 || this.user.firstName.value.length > 10) {
        this.user.firstName.errormsg = empty_error_msg;
        isValidForm = false;
      } else {
        this.user.firstName.errormsg = ''
      }

      if (!this.user.phone.value) {
        this.user.phone.errormsg = empty_error_msg;
        isValidForm = false;
      } else {
        this.user.phone.errormsg = ''
      }

      return isValidForm;
    },
    async onSubmit() {
      if (this.validateFields()) {
        useProductStore().createOrder({
          product: this.cart,
          userDetail: this.user,
          amt: this.cartTotal
        });

        const userForCheckout = {};
        Object.keys(this.user).forEach((key) => {
          userForCheckout[key] = this.user[key].value;
        })
        await $fetch(`${useRuntimeConfig().public.apiBase}/market/checkout/`, {
          method: 'POST',
          body: {
            cart: this.cart,
            user: userForCheckout,
            consult: false,
          }
        })

        this.$router.push('/page/order-success')
      }
    },
  },

  mounted() {
    this.isLogin = true;

    if (this.isLogin && this.cart.length == 0) {
      useNuxtApp().$showToast({msg: 'Cart is Empty.', type: 'error'})
      this.$router.replace('/page/account/cart')
    }

  },
}
</script>
