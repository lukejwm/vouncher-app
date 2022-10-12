<template>
  <div class="t3-wrapper">
    <footer id="t3-footer" class="wrap t3-footer">
      <section class="t3-copyright">
        <div class="container">
          <div class="row">
            <div class="col-md-12 copyright">
              <div class="module container leftcol">
                <ul class="nav nav-pills nav-stacked menu">
                  <li class="item-314">
                    <router-link to="/">Home</router-link>
                  </li>
                  <li class="item-284">
                    <router-link to="/projects">Projects</router-link>
                  </li>
                  <li class="item-281">
                    <router-link to="/about">About Us</router-link>
                  </li>
                  <li class="item-285">
                    <router-link to="/voucher">Voucher Terms</router-link>
                  </li>
                  <li class="item-478">
                    <a
                      href="https://www.bnc.ox.ac.uk/cookie-policy"
                      target="_blank"
                      rel="noopen"
                    >
                      Cookie Policy</a
                    >
                  </li>
                  <li class="item-653">
                    <a
                      href="https://www.bnc.ox.ac.uk/"
                      target="_blank"
                      rel="noopen"
                      >Brasenose College Home</a
                    >
                  </li>
                </ul>
              </div>
              <div class="module container rightcol">
                <div class="custom textblock">
                  <p>Registered Charity Number: 1143447</p>
                </div>
                <!-- <div class="module container">
                    <div id="ca_banner" style="bottom: 0px; display: block">
                    <h2 style="">Attention</h2>
                    <p style="">
                        ">By continuing to use this website you are accepting the
                        use of cookies as outlined in our Website Privacy Notice
                        &amp; Cookie Policy.
                        <span class="infoplus" style="" href="/cookie-policy">
                        </span>
                    </p>
                    <div class="accept" style="">I understand</div>
                    </div>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  </div>
</template>

<script lang="ts">
export default {
  name: "AppFooter",
};
</script>

<style>
@import "../assets/css/style.css";
</style>
