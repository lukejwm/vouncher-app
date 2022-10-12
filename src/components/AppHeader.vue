<template>
  <div class="t3-wrapper">
    <header id="t3-header" class="container t3-header" role="banner">
      <div class="row">
        <!-- Logo section -->
        <div class="col-xs-12 col-sm-6 col-md-6 logo">
          <div class="logo-image">
            <a href="/" title="Brasenose College, Oxford">
              <img
                class="logo-img"
                src="../assets/images/brasenose-college.gif"
                alt="Brasenose College, Oxford"
              />
              <span>Brasenose College, Oxford</span>
            </a>
            <small class="site-slogan"></small>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-1"></div>
        <!-- Search bar section -->
        <div class="col-xs-12 col-sm-6 col-md-5">
          <div class="search" role="search">
            <div class="marquee">
              <div class="mod-search">
                <!-- TODO: Either get rid of the search bar or reconfigure/fix it! -->
                <form action="/" method="post" class="form-inline form-search">
                  <label for="mod-search-searchword" class="element-invisible"
                    >Search this site</label
                  >
                  <input
                    name="searchword"
                    id="mod-search-searchword"
                    maxlength="200"
                    class="form-control"
                    type="text"
                    size="20"
                    placeholder="Search ..."
                  />
                  <button
                    class="button btn btn-primary"
                    onclick="if (!window.__cfRLUnblockHandlers) return false; this.form.searchword.focus();"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <nav id="t3-mainnav" class="wrap navbar navbar-default t3-mainnav">
      <div class="container">
        <div class="t3-navbar" role="navigation">
          <ul class="extnav_horizontal">
            <li class="item-401">
              <router-link to="/">Home</router-link>
            </li>
            <li class="item-338">
              <router-link to="/projects">Projects</router-link>
            </li>
            <li class="item-286">
              <router-link to="/about">About</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
export default {
  name: "AppHeader",
};
</script>

<style>
@import "../assets/css/style.css";
</style>
