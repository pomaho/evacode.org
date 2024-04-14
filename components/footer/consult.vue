<template>
  <div class="light-layout">
    <div class="container">
      <section class="small-section border-section border-top-0">
        <div class="row">
          <div class="col-lg-6">
            <div class="subscribe">
              <div>
                <span class="request-tg-consult"><h4>Запросите консультацию в Telegram!</h4><a href="#"><i
                    class="fa fa-telegram"></i></a></span>

                <p>Получите персональный подбор косметического ухода от наших консультантов в Telegram</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <form
                action="https://pixelstrap.us19.list-manage.com/subscribe/post?u=5a128856334b598b395f1fc9b&amp;id=082f74cbda"
                class="form-inline subscribe-form auth-form needs-validation" method="post"
                id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
              <div class="form-group mx-sm-3">
                <input type="text" class="form-control" name="telegram-nickname" id="mce-telegram"
                       placeholder="Введите свой ник в Telegram" v-model="telegram_nickname"
                       required="required">
                <span class="validate-error">
                  {{ telegramNickErrorMessage }}
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
const telegram_nickname = ref('');
const telegramNickErrorMessage = ref('');
const onSubmit = () => {
  if (validateTgNick()) {
    $fetch(`http://127.0.0.1:8000/api/market/checkout/`, {
      method: 'POST',
      body: {
        telegram_nickname: getTgNicknameByRegexp(),
        consult: true,
      }
    })

    router.push('/page/consult-success')
  } else {
    telegramNickErrorMessage.value = 'Некорректное имя пользователя Telegram';
  }
};

const validateTgNick = () => {
  const tgNickFromForm = getTgNicknameByRegexp();
  const hasSpacesInValue = telegram_nickname.value.indexOf(' ') !== -1;
  return tgNickFromForm && !hasSpacesInValue;
};

const getTgNicknameByRegexp = () => {
  let tgNickFromForm = telegram_nickname.value;
  tgNickFromForm = tgNickFromForm.indexOf('@') === -1 ? `@${tgNickFromForm}` : tgNickFromForm;

  const tgNickRegexp = /.*?\B@(\w{5}.*)/g;
  const tgNickRegexpResult = tgNickRegexp.exec(tgNickFromForm);
  return tgNickRegexpResult ? tgNickRegexpResult[1] : null;
};

</script>

<style scoped>
.request-tg-consult {
  display: flex;
}
</style>
