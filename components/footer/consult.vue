<template>
  <div class="light-layout">
    <div class="container">
      <section class="small-section border-section border-top-0">
        <div class="row">
          <div class="col-lg-6">
            <div class="subscribe">
              <div>
                <span class="request-tg-consult"><h4>Запросите консультацию!</h4></span>

                <p>Получите персональный подбор косметического ухода от наших консультантов</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <form
                action="https://pixelstrap.us19.list-manage.com/subscribe/post?u=5a128856334b598b395f1fc9b&amp;id=082f74cbda"
                class="form-inline subscribe-form auth-form needs-validation" method="post"
                id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
              <div class="form-group mx-sm-3">
                <MazPhoneNumberInput
                    v-model="phone_number"
                    v-model:country-code="countryCode1"
                    @update="updateResults"
                    :translations="{
                          countrySelector: {
                            placeholder: 'Код страны',
                            error: 'Выберите страну',
                            searchPlaceholder: 'Искать страну',
                          },
                          phoneInput: {
                            placeholder: 'Номер телефона',
                            example: 'Пример:',
                          },
                        }"
                />
                <span class="validate-error">
                  {{ phoneErrorMessage }}
                </span>
              </div>
              <button type="submit" class="btn btn-solid" id="mc-submit" @click.prevent="onSubmit">Получить</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import {useRouter} from 'vue-router';
const router = useRouter();
const phone_number = ref('');
const phoneErrorMessage = ref('');
const phone_results = ref('');
const countryCode1 = ref('KR');

const updateResults = (event) => {
  phone_results.value = event
};

const onSubmit = async () => {
  if (phone_results.value.isValid) {
    await $fetch(`${useRuntimeConfig().public.apiBase}/market/checkout/`, {
      method: 'POST',
      body: {
        user: {
          phone: phone_number.value,
        },
        consult: true,
      }
    })

    router.push('/page/consult-success')
  } else {
    phoneErrorMessage.value = 'Обязательное поле';
  }
};
</script>

<style scoped>
.request-tg-consult {
  display: flex;
}

.form-group {
  display: flex;
  flex-direction: column;
}
</style>
