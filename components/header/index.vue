<template>
  <div>
    <header>
      <div class="mobile-fix-option"></div>
      <WidgetsTopbar />
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="main-menu">
              <div class="menu-left">
                <div class="brand-logo">
                  <nuxt-link :to="{ path: '/' }">
                    <img src="/images/evacode/evacode.png" class="img-fluid" alt />
                  </nuxt-link>
                </div>
              </div>
              <div class="menu-right pull-right">
                <WidgetsNavbar />
                <WidgetsHeaderWidgets />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
</script>

<style scoped>
  .brand-logo img {
    width: 160px;
  }
</style>
