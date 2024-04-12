<script setup lang="ts">

</script>

<template>
  <div class="light-layout">
    <div class="container">
      <section class="small-section border-section border-top-0">
        <div class="row">
          <div class="col-lg-6">
            <div class="subscribe">
              <div>
                <span class="request-tg-consult"><h4>Запросите консультацию в Telegram!</h4><a href="#"><i class="fa fa-telegram"></i></a></span>

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
                <input type="text" class="form-control" name="telegram-nickname" id="mce-telegram" placeholder="Введите свой ник в Telegram"
                       required="required">
              </div>
              <button type="submit" class="btn btn-solid" id="mc-submit">Получить</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.request-tg-consult {
  display: flex;
}
</style>
