<template>
    <div>
        <footer class="footer-light">
            <FooterConsult/>
            <section class="header-menu-section">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <WidgetsNavbar />
                        </div>
                    </div>
                </div>
            </section>
            <section class="section-b-space">
                <div class="container">
                    <div class="row footer-theme partition-f">
                        <div class="col-lg-4 col-md-6">
                            <div class="footer-contact">
                                <FooterAbout/>
                                <FooterLinks/>
                                <FooterSocials/>
                            </div>
                        </div>

                        <div class="col offset-xl-4">
                            <div class="sub-title">
                                <div class="footer-title">
                                    <h4>Информация о магазине</h4>
                                </div>
                                <div class="footer-contact">
                                    <FooterContact/>
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
                                <p><i class="fa fa-copyright" aria-hidden="true"></i> evacode.org 2024 </p>
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
