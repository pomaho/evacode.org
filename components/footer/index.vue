<template>
  <div>
    <footer class="footer-light">
      <FooterSubscribe/>
      <section class="section-b-space light-layout">
        <div class="container">
          <div class="row footer-theme partition-f">
            <div class="col-lg-4 col-md-6">
              <div class="footer-title footer-mobile-title">
                <h4>О нас</h4>
              </div>
              <div class="footer-contant">
                <FooterAbout/>
                <FooterSocials/>
              </div>
            </div>

            <div class="col offset-xl-4">
              <div class="sub-title">
                <div class="footer-title">
                  <h4>Информация о магазине</h4>
                </div>
                <div class="footer-contant">
                  <FooterContact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="sub-footer">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-md-6 col-sm-12">
              <div class="footer-end">
                <p><i class="fa fa-copyright" aria-hidden="true"></i> 2024 created by
                  Sonic Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script setup lang="ts">
</script>
