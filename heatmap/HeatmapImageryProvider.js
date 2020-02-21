





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://github.githubassets.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-Wr5yTs8gD42bv1Ll5KLXr7cXzuVcbKOcuHmifgt/6YlZuluDTyAJnfnYhNYKpgVK1F51ks8Y2QA+XENQoMp/PA==" rel="stylesheet" href="https://github.githubassets.com/assets/frameworks-5abe724ecf200f8d9bbf52e5e4a2d7af.css" />
  
    <link crossorigin="anonymous" media="all" integrity="sha512-xRfL0sykVG3yMqc5O5RpH7KWire1Bs4tOMAIHJ6dYl+UmbmuW4d6+gAWFR3IAIPmkrOMsVXWCVSjwv/GNJaiQw==" rel="stylesheet" href="https://github.githubassets.com/assets/github-c517cbd2cca4546df232a7393b94691f.css" />
    
    
    
    


  <meta name="viewport" content="width=device-width">
  
  <title>CesiumHeatmap/HeatmapImageryProvider.js at master · danwild/CesiumHeatmap</title>
    <meta name="description" content="A library to add heatmaps (using heatmap.js) to the Cesium framework. - danwild/CesiumHeatmap">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    <meta name="twitter:image:src" content="https://avatars0.githubusercontent.com/u/3774647?s=400&amp;v=4" /><meta name="twitter:site" content="@github" /><meta name="twitter:card" content="summary" /><meta name="twitter:title" content="danwild/CesiumHeatmap" /><meta name="twitter:description" content="A library to add heatmaps (using heatmap.js) to the Cesium framework. - danwild/CesiumHeatmap" />
    <meta property="og:image" content="https://avatars0.githubusercontent.com/u/3774647?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="danwild/CesiumHeatmap" /><meta property="og:url" content="https://github.com/danwild/CesiumHeatmap" /><meta property="og:description" content="A library to add heatmaps (using heatmap.js) to the Cesium framework. - danwild/CesiumHeatmap" />

  <link rel="assets" href="https://github.githubassets.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6NDk4MzkzNjUwOjYxOGQyMGZkMjdkNDRiMjNiYjBhMGRjYzdjM2UxOGFmOWRkNGFmMmY1OGUxNGNmZDhlNWQzMGEwNDBhYjg4ZTU=--1fdd5fd61d4500459d8aca1d3782501c62d472ed">
  <link rel="sudo-modal" href="/sessions/sudo_modal">

  <meta name="request-id" content="1702:2CE7:119C57:21D106:5E4501B7" data-pjax-transient="true" /><meta name="html-safe-nonce" content="7123c57e74d4e85491e3bae4016151cce39ec642" data-pjax-transient="true" /><meta name="visitor-payload" content="eyJyZWZlcnJlciI6Imh0dHBzOi8vZ2l0aHViLmNvbS9kYW53aWxkL0Nlc2l1bUhlYXRtYXAiLCJyZXF1ZXN0X2lkIjoiMTcwMjoyQ0U3OjExOUM1NzoyMUQxMDY6NUU0NTAxQjciLCJ2aXNpdG9yX2lkIjoiMTUzMzk1MjA0MjM2NDYxMDY0OSIsInJlZ2lvbl9lZGdlIjoiaWFkIiwicmVnaW9uX3JlbmRlciI6ImlhZCJ9" data-pjax-transient="true" /><meta name="visitor-hmac" content="5b7238456d7db05a95fa6703102e9bc8b08063b84fb8a6059559fc75bff0f410" data-pjax-transient="true" />



  <meta name="github-keyboard-shortcuts" content="repository,source-code" data-pjax-transient="true" />

  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

      <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

  <meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-ga_id" content="" class="js-octo-ga-id" /><meta name="octolytics-actor-id" content="20395044" /><meta name="octolytics-actor-login" content="kuyewb" /><meta name="octolytics-actor-hash" content="3c658bf3746aac2bb481a9fd206cec95a13d0bcd5e31450b548f7b2797b50e26" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />



    <meta name="google-analytics" content="UA-3769691-2">

  <meta class="js-ga-set" name="userId" content="d4d8ea63b1687452d0a1b0229992236f">

<meta class="js-ga-set" name="dimension1" content="Logged In">



  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="kuyewb">

      <meta name="expected-hostname" content="github.com">

      <meta name="js-proxy-site-detection-payload" content="NWZlZDYzZGYxYzUxYWEzYmI0YzAxZmYxM2Y0MTk2OTUzMmNlZWE2NGY3NmY5ODk4Y2ViZmM1YzFiOTNlZTZjZXx7InJlbW90ZV9hZGRyZXNzIjoiMTEzLjI0Ni4xODYuMjMxIiwicmVxdWVzdF9pZCI6IjE3MDI6MkNFNzoxMTlDNTc6MjFEMTA2OjVFNDUwMUI3IiwidGltZXN0YW1wIjoxNTgxNTgwNzQwLCJob3N0IjoiZ2l0aHViLmNvbSJ9">

    <meta name="enabled-features" content="MARKETPLACE_FEATURED_BLOG_POSTS,MARKETPLACE_INVOICED_BILLING,MARKETPLACE_SOCIAL_PROOF_CUSTOMERS,MARKETPLACE_TRENDING_SOCIAL_PROOF,MARKETPLACE_RECOMMENDATIONS,MARKETPLACE_PENDING_INSTALLATIONS,RELATED_ISSUES,GHE_CLOUD_TRIAL">

  <meta http-equiv="x-pjax-version" content="a0f83e3110b13e637bd080f842234cf6">
  

      <link href="https://github.com/danwild/CesiumHeatmap/commits/master.atom" rel="alternate" title="Recent Commits to CesiumHeatmap:master" type="application/atom+xml">

  <meta name="go-import" content="github.com/danwild/CesiumHeatmap git https://github.com/danwild/CesiumHeatmap.git">

  <meta name="octolytics-dimension-user_id" content="3774647" /><meta name="octolytics-dimension-user_login" content="danwild" /><meta name="octolytics-dimension-repository_id" content="86660421" /><meta name="octolytics-dimension-repository_nwo" content="danwild/CesiumHeatmap" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="true" /><meta name="octolytics-dimension-repository_parent_id" content="36727276" /><meta name="octolytics-dimension-repository_parent_nwo" content="manuelnas/CesiumHeatmap" /><meta name="octolytics-dimension-repository_network_root_id" content="36727276" /><meta name="octolytics-dimension-repository_network_root_nwo" content="manuelnas/CesiumHeatmap" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/danwild/CesiumHeatmap/blob/master/HeatmapImageryProvider.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://github.githubassets.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://github.githubassets.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-in env-production page-responsive page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="p-3 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
    <span class="Progress progress-pjax-loader position-fixed width-full js-pjax-loader-bar">
      <span class="progress-pjax-loader-bar top-0 left-0" style="width: 0%;"></span>
    </span>

    
    



          <header class="Header js-details-container Details flex-wrap flex-lg-nowrap p-responsive" role="banner">

    <div class="Header-item d-none d-lg-flex">
      <a class="Header-link" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
</a>

    </div>

    <div class="Header-item d-lg-none">
      <button class="Header-link btn-link js-details-target" type="button" aria-label="Toggle navigation" aria-expanded="false">
        <svg height="24" class="octicon octicon-three-bars" viewBox="0 0 12 16" version="1.1" width="18" aria-hidden="true"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/></svg>
      </button>
    </div>

    <div class="Header-item Header-item--full flex-column flex-lg-row width-full flex-order-2 flex-lg-order-none mr-0 mr-lg-3 mt-3 mt-lg-0 Details-content--hidden">
        <div class="header-search flex-self-stretch flex-lg-self-auto mr-0 mr-lg-3 mb-3 mb-lg-0 scoped-search site-scoped-search js-site-search position-relative js-jump-to"
  role="combobox"
  aria-owns="jump-to-results"
  aria-label="Search or jump to"
  aria-haspopup="listbox"
  aria-expanded="false"
>
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" role="search" aria-label="Site" data-scope-type="Repository" data-scope-id="86660421" data-scoped-search-url="/danwild/CesiumHeatmap/search" data-unscoped-search-url="/search" action="/danwild/CesiumHeatmap/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <label class="form-control input-sm header-search-wrapper p-0 header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text"
          class="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
          data-hotkey="s,/"
          name="q"
          value=""
          placeholder="Search or jump to…"
          data-unscoped-placeholder="Search or jump to…"
          data-scoped-placeholder="Search or jump to…"
          autocapitalize="off"
          aria-autocomplete="list"
          aria-controls="jump-to-results"
          aria-label="Search or jump to…"
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations"
          spellcheck="false"
          autocomplete="off"
          >
          <input type="hidden" value="3npe0p2MVnqy3KqtAPpnAATqBidA9sVxfS33hyN9kXcnb+EnqqfzW08u7m/CUowZxHK4RWNsliuUPTfcMX6gaA==" data-csrf="true" class="js-data-jump-to-suggestions-path-csrf" />
          <input type="hidden" class="js-site-search-type-field" name="type" >
            <img src="https://github.githubassets.com/images/search-key-slash.svg" alt="" class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              
<ul class="d-none js-jump-to-suggestions-template-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-suggestion" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

</ul>

<ul class="d-none js-jump-to-no-results-template-container">
  <li class="d-flex flex-justify-center flex-items-center f5 d-none js-jump-to-suggestion p-2">
    <span class="text-gray">No suggested jump to results</span>
  </li>
</ul>

<ul id="jump-to-results" role="listbox" class="p-0 m-0 js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-scoped-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-global-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>


    <li class="d-flex flex-justify-center flex-items-center p-0 f5 js-jump-to-suggestion">
      <img src="https://github.githubassets.com/images/spinners/octocat-spinner-128.gif" alt="Octocat Spinner Icon" class="m-2" width="28">
    </li>
</ul>

            </div>
      </label>
</form>  </div>
</div>


      <nav class="d-flex flex-column flex-lg-row flex-self-stretch flex-lg-self-auto" aria-label="Global">
    <a class="Header-link d-block d-lg-none py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" data-ga-click="Header, click, Nav menu - item:dashboard:user" aria-label="Dashboard" href="/dashboard">
      Dashboard
</a>

  <a class="js-selected-navigation-item Header-link  mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" data-hotkey="g p" data-ga-click="Header, click, Nav menu - item:pulls context:user" aria-label="Pull requests you created" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls" href="/pulls">
    Pull requests
</a>
  <a class="js-selected-navigation-item Header-link  mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" data-hotkey="g i" data-ga-click="Header, click, Nav menu - item:issues context:user" aria-label="Issues you created" data-selected-links="/issues /issues/assigned /issues/mentioned /issues" href="/issues">
    Issues
</a>
    <div class="mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15">
      <a class="js-selected-navigation-item Header-link" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-octo-click="marketplace_click" data-octo-dimensions="location:nav_bar" data-selected-links=" /marketplace" href="/marketplace">
        Marketplace
</a>      

    </div>

  <a class="js-selected-navigation-item Header-link  mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore" href="/explore">
    Explore
</a>


    <a class="Header-link d-block d-lg-none mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" href="https://github.com/kuyewb">
      <img class="avatar" height="20" width="20" alt="@kuyewb" src="https://avatars3.githubusercontent.com/u/20395044?s=60&amp;v=4" />
      kuyewb
</a>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="YkZwqkK2XvFWWuz+ZgWlvu6AevQSEUMFhrZ/Vu6mBhjV4Jt0MoJHW+1kvdU+O9+GNACks09WDETTge+oC0NhBA==" />
      <button type="submit" class="Header-link mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15 d-lg-none btn-link d-block width-full text-left" data-ga-click="Header, sign out, icon:logout" style="padding-left: 2px;">
        <svg class="octicon octicon-sign-out v-align-middle" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 9V7H8V5h4V3l4 3-4 3zm-2 3H6V3L2 1h8v3h1V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v11.38c0 .39.22.73.55.91L6 16.01V13h4c.55 0 1-.45 1-1V8h-1v4z"/></svg>
        Sign out
      </button>
</form></nav>

    </div>

    <div class="Header-item Header-item--full flex-justify-center d-lg-none position-relative">
      <div class="css-truncate css-truncate-target width-fit position-absolute left-0 right-0 text-center">
              <svg class="octicon octicon-repo-forked" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
    <a class="Header-link" href="/danwild">danwild</a>
    /
    <a class="Header-link" href="/danwild/CesiumHeatmap">CesiumHeatmap</a>

</div>
    </div>

    <div class="Header-item mr-0 mr-lg-3 flex-order-1 flex-lg-order-none">
      

    <a aria-label="You have no unread notifications" class="Header-link notification-indicator position-relative tooltipped tooltipped-sw js-socket-channel js-notification-indicator" data-hotkey="g n" data-ga-click="Header, go to notifications, icon:read" data-channel="notification-changed:20395044" href="/notifications">
        <span class="js-indicator-modifier mail-status "></span>
        <svg class="octicon octicon-bell" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"/></svg>
</a>
    </div>


    <div class="Header-item position-relative d-none d-lg-flex">
      <details class="details-overlay details-reset">
  <summary class="Header-link"
      aria-label="Create new…"
      data-ga-click="Header, create new, icon:add">
    <svg class="octicon octicon-plus" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"/></svg> <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="dropdown-menu dropdown-menu-sw">
    
<a role="menuitem" class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a role="menuitem" class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a role="menuitem" class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a role="menuitem" class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <a role="menuitem" class="dropdown-item" href="/new/project" data-ga-click="Header, create new project">
    New project
  </a>

  </details-menu>
</details>

    </div>

    <div class="Header-item position-relative mr-0 d-none d-lg-flex">
      
  <details class="details-overlay details-reset js-feature-preview-indicator-container" data-feature-preview-indicator-src="/users/kuyewb/feature_preview/indicator_check.json">

  <summary class="Header-link"
    aria-label="View profile and more"
    data-ga-click="Header, show menu, icon:avatar">
    <img alt="@kuyewb" class="avatar" src="https://avatars0.githubusercontent.com/u/20395044?s=40&amp;v=4" height="20" width="20">
      <span class="feature-preview-indicator js-feature-preview-indicator" hidden></span>
    <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="dropdown-menu dropdown-menu-sw mt-2" style="width: 180px">
    <div class="header-nav-current-user css-truncate"><a role="menuitem" class="no-underline user-profile-link px-3 pt-2 pb-2 mb-n2 mt-n1 d-block" href="/kuyewb" data-ga-click="Header, go to profile, text:Signed in as">Signed in as <strong class="css-truncate-target">kuyewb</strong></a></div>
    <div role="none" class="dropdown-divider"></div>

      <div class="pl-3 pr-3 f6 user-status-container js-user-status-context pb-1" data-url="/users/status?compact=1&amp;link_mentions=0&amp;truncate=1">
        
<div class="js-user-status-container
    user-status-compact rounded-1 px-2 py-1 mt-2
    border
  " data-team-hovercards-enabled>
  <details class="js-user-status-details details-reset details-overlay details-overlay-dark">
    <summary class="btn-link btn-block link-gray no-underline js-toggle-user-status-edit toggle-user-status-edit "
      role="menuitem" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:3774647,&quot;target&quot;:&quot;EDIT_USER_STATUS&quot;,&quot;user_id&quot;:20395044,&quot;originating_url&quot;:&quot;https://github.com/danwild/CesiumHeatmap/blob/master/HeatmapImageryProvider.js&quot;}}" data-hydro-click-hmac="f652c75d5bff86bee2dbc29071b9f1c4c0cb2892eef3fbd5f817fe938d2bcaa3">
      <div class="d-flex">
        <div class="f6 lh-condensed user-status-header
          d-inline-block v-align-middle
            user-status-emoji-only-header circle
            pr-2
"
            style="max-width: 29px"
          >
          <div class="user-status-emoji-container flex-shrink-0 mr-1 mt-1 lh-condensed-ultra v-align-bottom" style="">
            <svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 01-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 01-1.45-2.17A6.59 6.59 0 011.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 018 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z"/></svg>
          </div>
        </div>
        <div class="
          d-inline-block v-align-middle
          
          
           css-truncate css-truncate-target 
           user-status-message-wrapper f6"
           style="line-height: 20px;" >
          <div class="d-inline-block text-gray-dark v-align-text-top text-left">
              <span class="text-gray ml-2">Set status</span>
          </div>
        </div>
      </div>
    </summary>
    <details-dialog class="details-dialog rounded-1 anim-fade-in fast Box Box--overlay" role="dialog" tabindex="-1">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="position-relative flex-auto js-user-status-form" action="/users/status?compact=1&amp;link_mentions=0&amp;truncate=1" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="Q9R/GDtTVWW2KEJBWOfnBOI7UwLPyLiVlUSoJnXZKyinJoyc1mvBFmfslaasHFHSg3AwhG5IaVxsnMKvdEc6pw==" />
        <div class="Box-header bg-gray border-bottom p-3">
          <button class="Box-btn-octicon js-toggle-user-status-edit btn-octicon float-right" type="reset" aria-label="Close dialog" data-close-dialog>
            <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
          </button>
          <h3 class="Box-title f5 text-bold text-gray-dark">Edit status</h3>
        </div>
        <input type="hidden" name="emoji" class="js-user-status-emoji-field" value="">
        <input type="hidden" name="organization_id" class="js-user-status-org-id-field" value="">
        <div class="px-3 py-2 text-gray-dark">
          <div class="js-characters-remaining-container position-relative mt-2">
            <div class="input-group d-table form-group my-0 js-user-status-form-group">
              <span class="input-group-button d-table-cell v-align-middle" style="width: 1%">
                <button type="button" aria-label="Choose an emoji" class="btn-outline btn js-toggle-user-status-emoji-picker btn-open-emoji-picker p-0">
                  <span class="js-user-status-original-emoji" hidden></span>
                  <span class="js-user-status-custom-emoji"></span>
                  <span class="js-user-status-no-emoji-icon" >
                    <svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 01-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 01-1.45-2.17A6.59 6.59 0 011.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 018 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z"/></svg>
                  </span>
                </button>
              </span>
              <text-expander keys=": @" data-mention-url="/autocomplete/user-suggestions" data-emoji-url="/autocomplete/emoji">
                <input
                  type="text"
                  autocomplete="off"
                  data-no-org-url="/autocomplete/user-suggestions"
                  data-org-url="/suggestions?mention_suggester=1"
                  data-maxlength="80"
                  class="d-table-cell width-full form-control js-user-status-message-field js-characters-remaining-field"
                  placeholder="What's happening?"
                  name="message"
                  value=""
                  aria-label="What is your current status?">
              </text-expander>
              <div class="error">Could not update your status, please try again.</div>
            </div>
            <div style="margin-left: 53px" class="my-1 text-small label-characters-remaining js-characters-remaining" data-suffix="remaining" hidden>
              80 remaining
            </div>
          </div>
          <include-fragment class="js-user-status-emoji-picker" data-url="/users/status/emoji"></include-fragment>
          <div class="overflow-auto ml-n3 mr-n3 px-3 border-bottom" style="max-height: 33vh">
            <div class="user-status-suggestions js-user-status-suggestions collapsed overflow-hidden">
              <h4 class="f6 text-normal my-3">Suggestions:</h4>
              <div class="mx-3 mt-2 clearfix">
                  <div class="float-left col-6">
                      <button type="button" value=":palm_tree:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="palm_tree" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f334.png">🌴</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          On vacation
                        </div>
                      </button>
                      <button type="button" value=":face_with_thermometer:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="face_with_thermometer" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f912.png">🤒</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Out sick
                        </div>
                      </button>
                  </div>
                  <div class="float-left col-6">
                      <button type="button" value=":house:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="house" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3e0.png">🏠</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Working from home
                        </div>
                      </button>
                      <button type="button" value=":dart:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="dart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png">🎯</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Focusing
                        </div>
                      </button>
                  </div>
              </div>
            </div>
            <div class="user-status-limited-availability-container">
              <div class="form-checkbox my-0">
                <input type="checkbox" name="limited_availability" value="1" class="js-user-status-limited-availability-checkbox" data-default-message="I may be slow to respond." aria-describedby="limited-availability-help-text-truncate-true-compact-true" id="limited-availability-truncate-true-compact-true">
                <label class="d-block f5 text-gray-dark mb-1" for="limited-availability-truncate-true-compact-true">
                  Busy
                </label>
                <p class="note" id="limited-availability-help-text-truncate-true-compact-true">
                  When others mention you, assign you, or request your review,
                  GitHub will let them know that you have limited availability.
                </p>
              </div>
            </div>
          </div>
          <div class="d-inline-block f5 mr-2 pt-3 pb-2" >
  <div class="d-inline-block mr-1">
    Clear status
  </div>

  <details class="js-user-status-expire-drop-down f6 dropdown details-reset details-overlay d-inline-block mr-2">
    <summary class="f5 btn-link link-gray-dark border px-2 py-1 rounded-1" aria-haspopup="true">
      <div class="js-user-status-expiration-interval-selected d-inline-block v-align-baseline">
        Never
      </div>
      <div class="dropdown-caret"></div>
    </summary>

    <ul class="dropdown-menu dropdown-menu-se pl-0 overflow-auto" style="width: 220px; max-height: 15.5em">
      <li>
        <button type="button" class="btn-link dropdown-item js-user-status-expire-button ws-normal" title="Never">
          <span class="d-inline-block text-bold mb-1">Never</span>
          <div class="f6 lh-condensed">Keep this status until you clear your status or edit your status.</div>
        </button>
      </li>
      <li class="dropdown-divider" role="none"></li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 30 minutes" value="2020-02-13T16:29:00+08:00">
            in 30 minutes
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 1 hour" value="2020-02-13T16:59:00+08:00">
            in 1 hour
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 4 hours" value="2020-02-13T19:59:00+08:00">
            in 4 hours
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="today" value="2020-02-13T23:59:59+08:00">
            today
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="this week" value="2020-02-16T23:59:59+08:00">
            this week
          </button>
        </li>
    </ul>
  </details>
  <input class="js-user-status-expiration-date-input" type="hidden" name="expires_at" value="">
</div>

          <include-fragment class="js-user-status-org-picker" data-url="/users/status/organizations"></include-fragment>
        </div>
        <div class="d-flex flex-items-center flex-justify-between p-3 border-top">
          <button type="submit" disabled class="width-full btn btn-primary mr-2 js-user-status-submit">
            Set status
          </button>
          <button type="button" disabled class="width-full js-clear-user-status-button btn ml-2 ">
            Clear status
          </button>
        </div>
</form>    </details-dialog>
  </details>
</div>

      </div>
      <div role="none" class="dropdown-divider"></div>


    <a role="menuitem" class="dropdown-item" href="/kuyewb" data-ga-click="Header, go to profile, text:your profile">Your profile</a>

    <a role="menuitem" class="dropdown-item" href="/kuyewb?tab=repositories" data-ga-click="Header, go to repositories, text:your repositories">Your repositories</a>

    <a role="menuitem" class="dropdown-item" href="/kuyewb?tab=projects" data-ga-click="Header, go to projects, text:your projects">Your projects</a>

    <a role="menuitem" class="dropdown-item" href="/kuyewb?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">Your stars</a>
      <a role="menuitem" class="dropdown-item" href="https://gist.github.com/mine" data-ga-click="Header, your gists, text:your gists">Your gists</a>





    <div role="none" class="dropdown-divider"></div>
      
<div id="feature-enrollment-toggle" class="hide-sm hide-md feature-preview-details position-relative">
  <button
    type="button"
    class="dropdown-item btn-link"
    role="menuitem"
    data-feature-preview-trigger-url="/users/kuyewb/feature_previews"
    data-feature-preview-close-details="{&quot;event_type&quot;:&quot;feature_preview.clicks.close_modal&quot;,&quot;payload&quot;:{&quot;originating_url&quot;:&quot;https://github.com/danwild/CesiumHeatmap/blob/master/HeatmapImageryProvider.js&quot;,&quot;user_id&quot;:20395044}}"
    data-feature-preview-close-hmac="9de81367bc90c99280797f52b9909e1453ec83e7e6def865eb599402234594ef"
    data-hydro-click="{&quot;event_type&quot;:&quot;feature_preview.clicks.open_modal&quot;,&quot;payload&quot;:{&quot;link_location&quot;:&quot;user_dropdown&quot;,&quot;originating_url&quot;:&quot;https://github.com/danwild/CesiumHeatmap/blob/master/HeatmapImageryProvider.js&quot;,&quot;user_id&quot;:20395044}}"
    data-hydro-click-hmac="66dadff7621678bc8e0d8edbb0f048d326c54136eae2b8ec455ab36e1ae8ed44"
  >
    Feature preview
  </button>
    <span class="feature-preview-indicator js-feature-preview-indicator" hidden></span>
</div>

    <a role="menuitem" class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
    <a role="menuitem" class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">Settings</a>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="logout-form" action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="RBhO1F91NfhzfNu3H3t9wweuvG9qBZj8SKtYFLGrEEPzvqUKL0EsUshCipxHRQf73S5iKDdC170dnMjqVE53Xw==" />
      
      <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout" role="menuitem">
        Sign out
      </button>
      <input type="text" name="required_field_2e60" hidden="hidden" class="form-control" /><input type="hidden" name="timestamp" value="1581580740313" class="form-control" /><input type="hidden" name="timestamp_secret" value="a15ffabd88f839bd9b61045f2893b87f8327ebdbaafc913f0c31ab29caa0b636" class="form-control" />
</form>  </details-menu>
</details>

    </div>

  </header>

      

  </div>

  <div id="start-of-content" class="show-on-focus"></div>


    <div id="js-flash-container">

</div>


  
  <div class="js-notification-shelf-not-found-error" hidden></div>



  <div class="application-main " data-commit-hovercards-enabled>
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <main  >
      

  

      <div class="border-bottom shelf intro-shelf js-notice mb-0 pb-4">
  <div class="width-full container">
    <div class="width-full mx-auto shelf-content">
      <h2 class="shelf-title">Learn Git and GitHub without any code!</h2>
      <p class="shelf-lead">
          Using the Hello World guide, you’ll start a branch, write comments, and open a pull request.
      </p>
      <a class="btn btn-primary shelf-cta" target="_blank" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;READ_GUIDE&quot;,&quot;repository_id&quot;:86660421,&quot;originating_url&quot;:&quot;https://github.com/danwild/CesiumHeatmap/blob/master/HeatmapImageryProvider.js&quot;,&quot;user_id&quot;:20395044}}" data-hydro-click-hmac="aaac82d027543c927e0b01654a9dcddfb64579497e7412f75bf30287d7591ef6" href="https://guides.github.com/activities/hello-world/">Read the guide</a>
    </div>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="shelf-dismiss js-notice-dismiss" action="/dashboard/dismiss_bootcamp" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="delete" /><input type="hidden" name="authenticity_token" value="pk/PEPwlxMzrzE+Cu/AD4RI9lJISV8V0Q5gV9tllNCPm6LjSJ32MvbF6Bi7i41qjk+rv9xulCrwttaEXVlAAGg==" />
      <button name="button" type="submit" class="mr-1 close-button tooltipped tooltipped-w" aria-label="Hide this notice forever" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;DISMISS_BANNER&quot;,&quot;repository_id&quot;:86660421,&quot;originating_url&quot;:&quot;https://github.com/danwild/CesiumHeatmap/blob/master/HeatmapImageryProvider.js&quot;,&quot;user_id&quot;:20395044}}" data-hydro-click-hmac="e53e32184651073573aa1d82d0469417d7e317332439a81f56492142a43e1f92">
        <svg aria-label="Hide this notice forever" class="octicon octicon-x v-align-text-top" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
</button></form>  </div>
</div>










  <div class="pagehead repohead readability-menu bg-gray-light pb-0 pt-0 pt-lg-3  pb-0">

    <div class="container-lg mb-4 p-responsive d-none d-lg-flex">

      <div class="flex-auto min-width-0 width-fit mr-3">
        <h1 class="public  d-flex flex-wrap flex-items-center break-word float-none ">
    <svg class="octicon octicon-repo-forked" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
  <span class="author ml-1 flex-self-stretch" itemprop="author">
    <a class="url fn" rel="author" data-hovercard-type="user" data-hovercard-url="/users/danwild/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/danwild">danwild</a>
  </span>
  <span class="path-divider flex-self-stretch">/</span>
  <strong itemprop="name" class="mr-2 flex-self-stretch">
    <a data-pjax="#js-repo-pjax-container" href="/danwild/CesiumHeatmap">CesiumHeatmap</a>
  </strong>
  
</h1>

  <span class="fork-flag mt-1" data-repository-hovercards-enabled>
    <span class="text">forked from <a data-hovercard-type="repository" data-hovercard-url="/manuelnas/CesiumHeatmap/hovercard" href="/manuelnas/CesiumHeatmap">manuelnas/CesiumHeatmap</a></span>
  </span>

      </div>

      <ul class="pagehead-actions flex-shrink-0"  >




  <li>
    
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form data-remote="true" class="clearfix js-social-form js-social-container" action="/notifications/subscribe" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="nla6jjlrGO0KaXyaj3GhVuCyH5v103BD/BssXnI9rKjbB++jt5BW9G+QWkjW58b6u8LnVngzH/ppgs/ko29nxQ==" />      <input type="hidden" name="repository_id" value="86660421">

      <details class="details-reset details-overlay select-menu float-left">
        <summary class="select-menu-button float-left btn btn-sm btn-with-count" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;WATCH_BUTTON&quot;,&quot;repository_id&quot;:86660421,&quot;originating_url&quot;:&quot;https://github.com/danwild/CesiumHeatmap/blob/master/HeatmapImageryProvider.js&quot;,&quot;user_id&quot;:20395044}}" data-hydro-click-hmac="9f744695444b97f2a612c0b7827c0807fcfb784a1a4c84580dcfdcb48984f835" data-ga-click="Repository, click Watch settings, action:blob#show">          <span data-menu-button>
              <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
              Watch
          </span>
</summary>        <details-menu
          class="select-menu-modal position-absolute mt-5"
          style="z-index: 99;">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
          </div>
          <div class="select-menu-list">
            <button type="submit" name="do" value="included" class="select-menu-item width-full" aria-checked="true" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Not watching</span>
                <span class="description">Be notified only when participating or @mentioned.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                  Watch
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="release_only" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Releases only</span>
                <span class="description">Be notified of new releases, and when participating or @mentioned.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                  Unwatch releases
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="subscribed" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Watching</span>
                <span class="description">Be notified of all conversations.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                  Unwatch
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="ignore" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Ignoring</span>
                <span class="description">Never be notified.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-mute v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                  Stop ignoring
                </span>
              </div>
            </button>
          </div>
        </details-menu>
      </details>
        <a class="social-count js-social-count"
          href="/danwild/CesiumHeatmap/watchers"
          aria-label="6 users are watching this repository">
          6
        </a>
</form>
  </li>

  <li>
      <div class="js-toggler-container js-social-container starring-container ">
    <form class="starred js-social-form" action="/danwild/CesiumHeatmap/unstar" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="VkkF8Xqft2NbteTF4ggaBr6WhEqEIX3M0Qe/mKDWw2sWbsGkjLMgKbM9LPdu43k78UfMeyXfUukgd/wNy37I9Q==" />
      <input type="hidden" name="context" value="repository"></input>
      <button type="submit" class="btn btn-sm btn-with-count js-toggler-target" aria-label="Unstar this repository" title="Unstar danwild/CesiumHeatmap" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;UNSTAR_BUTTON&quot;,&quot;repository_id&quot;:86660421,&quot;originating_url&quot;:&quot;https://github.com/danwild/CesiumHeatmap/blob/master/HeatmapImageryProvider.js&quot;,&quot;user_id&quot;:20395044}}" data-hydro-click-hmac="1ed8aaa378282933c20b64daf699279e8ef14e22768821c35dca3df728d1decb" data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">        <svg aria-label="star" height="16" class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" role="img"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>

        Unstar
</button>        <a class="social-count js-social-count" href="/danwild/CesiumHeatmap/stargazers"
           aria-label="25 users starred this repository">
           25
        </a>
</form>
    <form class="unstarred js-social-form" action="/danwild/CesiumHeatmap/star" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="NeUjihY1URpnE+uNTkqMzwYY9+DRAr5tZXHPrpwoCHFihR79OwxNxuxaTXcxn44deeRKEBENo016GrMdf5akjQ==" />
      <input type="hidden" name="context" value="repository"></input>
      <button type="submit" class="btn btn-sm btn-with-count js-toggler-target" aria-label="Unstar this repository" title="Star danwild/CesiumHeatmap" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;STAR_BUTTON&quot;,&quot;repository_id&quot;:86660421,&quot;originating_url&quot;:&quot;https://github.com/danwild/CesiumHeatmap/blob/master/HeatmapImageryProvider.js&quot;,&quot;user_id&quot;:20395044}}" data-hydro-click-hmac="64f42cb80a2a0cc06ad0e5fe881b3c53e8ed817b3bbe9f3e1707ae6609135bba" data-ga-click="Repository, click star button, action:blob#show; text:Star">        <svg aria-label="star" height="16" class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" role="img"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>

        Star
</button>        <a class="social-count js-social-count" href="/danwild/CesiumHeatmap/stargazers"
           aria-label="25 users starred this repository">
          25
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="btn-with-count" action="/danwild/CesiumHeatmap/fork" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="6dEjIwydauwZbpi3hJRDv7QMgJOTo/ThVpQTZQrYfiAUbNlIAkLvxoJWdJE0tv+IYIgl58Rr7REReXazT7ru5Q==" />
            <button class="btn btn-sm btn-with-count" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;FORK_BUTTON&quot;,&quot;repository_id&quot;:86660421,&quot;originating_url&quot;:&quot;https://github.com/danwild/CesiumHeatmap/blob/master/HeatmapImageryProvider.js&quot;,&quot;user_id&quot;:20395044}}" data-hydro-click-hmac="737a50267bf5e15bf1209cc81b4a54bdaecae6af01b51ee7a5f7c8f4bb9ea5a4" data-ga-click="Repository, show fork modal, action:blob#show; text:Fork" type="submit" title="Fork your own copy of danwild/CesiumHeatmap to your account" aria-label="Fork your own copy of danwild/CesiumHeatmap to your account">              <svg class="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
</button></form>
    <a href="/danwild/CesiumHeatmap/network/members" class="social-count"
       aria-label="58 users forked this repository">
      58
    </a>
  </li>
</ul>

    </div>
      
<nav class="hx_reponav reponav js-repo-nav js-sidenav-container-pjax clearfix container-lg p-responsive d-none d-lg-block"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
    aria-label="Repository"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /danwild/CesiumHeatmap" href="/danwild/CesiumHeatmap">
      <div class="d-inline"><svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg></div>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>



  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a data-hotkey="g p" data-skip-pjax="true" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /danwild/CesiumHeatmap/pulls" href="/danwild/CesiumHeatmap/pulls">
      <div class="d-inline"><svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0010 15a1.993 1.993 0 001-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 00-1 3.72v6.56A1.993 1.993 0 002 15a1.993 1.993 0 001-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg></div>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">0</span>
      <meta itemprop="position" content="4">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement" class="position-relative float-left">
      <a data-hotkey="g w" data-skip-pjax="true" class="js-selected-navigation-item reponav-item" data-selected-links="repo_actions /danwild/CesiumHeatmap/actions" href="/danwild/CesiumHeatmap/actions">
        <div class="d-inline"><svg class="octicon octicon-play" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 8A7 7 0 110 8a7 7 0 0114 0zm-8.223 3.482l4.599-3.066a.5.5 0 000-.832L5.777 4.518A.5.5 0 005 4.934v6.132a.5.5 0 00.777.416z"/></svg></div>
        Actions
</a>
    </span>

    <a data-hotkey="g b" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /danwild/CesiumHeatmap/projects" href="/danwild/CesiumHeatmap/projects">
      <div class="d-inline"><svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg></div>
      Projects
      <span class="Counter" >0</span>
</a>

    <a data-skip-pjax="true" class="js-selected-navigation-item reponav-item" data-selected-links="security alerts policy token_scanning code_scanning /danwild/CesiumHeatmap/security/advisories" href="/danwild/CesiumHeatmap/security/advisories">
      <div class="d-inline"><svg class="octicon octicon-shield" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 2l7-2 7 2v6.02C14 12.69 8.69 16 7 16c-1.69 0-7-3.31-7-7.98V2zm1 .75L7 1l6 1.75v5.268C13 12.104 8.449 15 7 15c-1.449 0-6-2.896-6-6.982V2.75zm1 .75L7 2v12c-1.207 0-5-2.482-5-5.985V3.5z"/></svg></div>
      Security
</a>
    <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse people /danwild/CesiumHeatmap/pulse" href="/danwild/CesiumHeatmap/pulse">
      <div class="d-inline"><svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg></div>
      Insights
</a>

</nav>

  <div class="reponav-wrapper reponav-small d-lg-none">
  <nav class="reponav js-reponav text-center no-wrap"
       itemscope
       itemtype="http://schema.org/BreadcrumbList">

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a class="js-selected-navigation-item selected reponav-item" itemprop="url" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /danwild/CesiumHeatmap" href="/danwild/CesiumHeatmap">
        <span itemprop="name">Code</span>
        <meta itemprop="position" content="1">
</a>    </span>



    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /danwild/CesiumHeatmap/pulls" href="/danwild/CesiumHeatmap/pulls">
        <span itemprop="name">Pull requests</span>
        <span class="Counter">0</span>
        <meta itemprop="position" content="4">
</a>    </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /danwild/CesiumHeatmap/projects" href="/danwild/CesiumHeatmap/projects">
          <span itemprop="name">Projects</span>
          <span class="Counter">0</span>
          <meta itemprop="position" content="5">
</a>      </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_actions /danwild/CesiumHeatmap/actions" href="/danwild/CesiumHeatmap/actions">
          <span itemprop="name">Actions</span>
          <meta itemprop="position" content="6">
</a>      </span>


      <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="security alerts policy token_scanning code_scanning /danwild/CesiumHeatmap/security/advisories" href="/danwild/CesiumHeatmap/security/advisories">
        <span itemprop="name">Security</span>
        <meta itemprop="position" content="8">
</a>
      <a class="js-selected-navigation-item reponav-item" data-selected-links="pulse /danwild/CesiumHeatmap/pulse" href="/danwild/CesiumHeatmap/pulse">
        Pulse
</a>

  </nav>
</div>


  </div>
<div class="container-lg clearfix new-discussion-timeline  p-responsive">
  <div class="repository-content ">

    
    


  


    <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/danwild/CesiumHeatmap/blob/a774077a58797ddb6c2081921ac3bfe629d3ef59/HeatmapImageryProvider.js">Permalink</a>

    <!-- blob contrib key: blob_contributors:v21:ea7bad9a2211e1222fe23142ef5c2c49 -->
      

    <div class="d-flex flex-items-start flex-shrink-0 flex-column flex-md-row pb-3">
      <span class="d-flex flex-justify-between width-full width-md-auto">
        
<details class="details-reset details-overlay branch-select-menu " id="branch-select-menu">
  <summary class="btn btn-sm css-truncate"
           data-hotkey="w"
           title="Switch branches or tags">
    <i>Branch:</i>
    <span class="css-truncate-target" data-menu-button>master</span>
    <span class="dropdown-caret"></span>
  </summary>

  <details-menu class="SelectMenu SelectMenu--hasFilter" src="/danwild/CesiumHeatmap/refs/master/HeatmapImageryProvider.js?source_action=show&amp;source_controller=blob" preload>
    <div class="SelectMenu-modal">
      <include-fragment class="SelectMenu-loading" aria-label="Menu is loading">
        <svg class="octicon octicon-octoface anim-pulse" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"/></svg>
      </include-fragment>
    </div>
  </details-menu>
</details>

        <div class="BtnGroup flex-shrink-0 d-md-none">
          <a href="/danwild/CesiumHeatmap/find/master"
                class="js-pjax-capture-input btn btn-sm BtnGroup-item"
                data-pjax
                data-hotkey="t">
            Find file
          </a>
          <clipboard-copy value="HeatmapImageryProvider.js" class="btn btn-sm BtnGroup-item">
            Copy path
          </clipboard-copy>
        </div>
      </span>
      <h2 id="blob-path" class="breadcrumb flex-auto min-width-0 text-normal flex-md-self-center ml-md-2 mr-md-3 my-2 my-md-0">
        <span class="js-repo-root text-bold"><span class="js-path-segment"><a data-pjax="true" href="/danwild/CesiumHeatmap"><span>CesiumHeatmap</span></a></span></span><span class="separator">/</span><strong class="final-path">HeatmapImageryProvider.js</strong>
      </h2>

      <div class="BtnGroup flex-shrink-0 d-none d-md-inline-block">
        <a href="/danwild/CesiumHeatmap/find/master"
              class="js-pjax-capture-input btn btn-sm BtnGroup-item"
              data-pjax
              data-hotkey="t">
          Find file
        </a>
        <clipboard-copy value="HeatmapImageryProvider.js" class="btn btn-sm BtnGroup-item">
          Copy path
        </clipboard-copy>
      </div>
    </div>

    



    <include-fragment src="/danwild/CesiumHeatmap/contributors/master/HeatmapImageryProvider.js" class="Box Box--condensed commit-loader">
      <div class="Box-body bg-blue-light f6">
        Fetching contributors&hellip;
      </div>

      <div class="Box-body d-flex flex-items-center" >
        <img alt="" class="loader-loading mr-2" src="https://github.githubassets.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" height="16" />
        <span class="text-red h6 loader-error">Cannot retrieve contributors at this time</span>
      </div>
</include-fragment>





    <div class="Box mt-3 position-relative">
      
<div class="Box-header py-2 d-flex flex-column flex-shrink-0 flex-md-row flex-md-items-center">
  <div class="text-mono f6 flex-auto pr-3 flex-order-2 flex-md-order-1 mt-2 mt-md-0">

      589 lines (523 sloc)
      <span class="file-info-divider"></span>
    32.4 KB
  </div>

  <div class="d-flex py-1 py-md-0 flex-auto flex-order-1 flex-md-order-2 flex-sm-grow-0 flex-justify-between">

    <div class="BtnGroup">
      <a id="raw-url" class="btn btn-sm BtnGroup-item" href="/danwild/CesiumHeatmap/raw/master/HeatmapImageryProvider.js">Raw</a>
        <a class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="/danwild/CesiumHeatmap/blame/master/HeatmapImageryProvider.js">Blame</a>
      <a rel="nofollow" class="btn btn-sm BtnGroup-item" href="/danwild/CesiumHeatmap/commits/master/HeatmapImageryProvider.js">History</a>
    </div>


    <div>
          <a class="btn-octicon tooltipped tooltipped-nw js-remove-unless-platform"
             data-platforms="windows,mac"
             href="x-github-client://openRepo/https://github.com/danwild/CesiumHeatmap?branch=master&amp;filepath=HeatmapImageryProvider.js"
             aria-label="Open this file in GitHub Desktop"
             data-ga-click="Repository, open with desktop">
              <svg class="octicon octicon-device-desktop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
          </a>

          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form js-update-url-with-hash" action="/danwild/CesiumHeatmap/edit/master/HeatmapImageryProvider.js" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="GiT2CihmPYw1ui+jwJO4UVC0puRA1gz3BpHBP6VTUskCBMWNuQiIk/hqWkUWLBeUtwqF4ujZznBp3Na5+G0+1w==" />
            <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
              aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
              <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 011.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
            </button>
</form>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form" action="/danwild/CesiumHeatmap/delete/master/HeatmapImageryProvider.js" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="oSnTS0UyL13zo6TBub/n6U896X/uj45p/VSrbvynXx9401wQpqVIgL6zrr/fKUzLVAQNoNYRqNH5nadih1uD/A==" />
            <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
              aria-label="Fork this project and delete the file" data-disable-with>
              <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
            </button>
</form>    </div>
  </div>
</div>




      

  <div itemprop="text" class="Box-body p-0 blob-wrapper data type-javascript ">
      
<table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/*</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class=pl-c> *  How to add HeatmapImageryProvider to Cesium:</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class=pl-c> *  </span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class=pl-c> *  1. Add the class (define - return HeatmapImageryProvider) to Cesium.js after the definition of define and before the definition of Cesium.</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class=pl-c> *  2. Add &#39;./Scene/HeatmapImageryProvider&#39; as the first value in the second parameter of the definition call of Cesium (on the line starting with &quot;define(&#39;Cesium&#39;,[&quot;).</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class=pl-c> *  3. Add &#39;Scene_HeatmapImageryProvider&#39; as the first value in the third parameter of the definition call of Cesium (on the line starting with &quot;define(&#39;Cesium&#39;,[&quot;).</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class=pl-c> *  4. Add &#39;Cesium[&#39;HeatmapImageryProvider&#39;] = Scene_HeatmapImageryProvider;&#39; to the body of the definition call of Cesium (after the line starting with &quot;var Cesium = {&quot;).</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class=pl-c> *  5. Make sure heatmap.js in included and available before using HeatmapImageryProvider.</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line"><span class=pl-c> *</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/*global define*/</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line"><span class=pl-en>define</span><span class=pl-kos>(</span><span class=pl-s>&#39;Scene/HeatmapImageryProvider&#39;</span><span class=pl-kos>,</span><span class=pl-kos>[</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">        <span class=pl-s>&#39;../Core/Credit&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">        <span class=pl-s>&#39;../Core/defaultValue&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">        <span class=pl-s>&#39;../Core/defined&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">        <span class=pl-s>&#39;../Core/defineProperties&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">        <span class=pl-s>&#39;../Core/DeveloperError&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">        <span class=pl-s>&#39;../Core/Event&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">        <span class=pl-s>&#39;../Core/GeographicTilingScheme&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">        <span class=pl-s>&#39;../Core/Rectangle&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">        <span class=pl-s>&#39;../Core/TileProviderError&#39;</span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>]</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">        <span class=pl-v>Credit</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>defaultValue</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>defined</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>defineProperties</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">        <span class=pl-v>DeveloperError</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">        <span class=pl-v>Event</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">        <span class=pl-v>GeographicTilingScheme</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">        <span class=pl-v>Rectangle</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">        <span class=pl-v>TileProviderError</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">    <span class=pl-s>&quot;use strict&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * Provides a single, top-level imagery tile.  The single image is assumed to use a</span></td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * {<span class=pl-k>@link</span> GeographicTilingScheme}.</span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line"><span class=pl-c>	 </span></td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     *</span></td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@alias</span> HeatmapImageryProvider</span></td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@constructor</span></span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     *</span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Object</span>} options Object with the following properties:</span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Object</span>} [options.heatmapoptions] Optional heatmap.js options to be used (see http://www.patrick-wied.at/static/heatmapjs/docs.html#h337-create).</span></td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Object</span>} [options.bounds] The bounding box for the heatmap in WGS84 coordinates.</span></td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Number</span>} [options.bounds.north] The northernmost point of the heatmap.</span></td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Number</span>} [options.bounds.south] The southernmost point of the heatmap.</span></td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Number</span>} [options.bounds.west] The westernmost point of the heatmap.</span></td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Number</span>} [options.bounds.east] The easternmost point of the heatmap.</span></td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Object</span>} [options.data] Data to be used for the heatmap.</span></td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Object</span>} [options.data.min] Minimum allowed point value.</span></td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Object</span>} [options.data.max] Maximum allowed point value.</span></td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Array</span>} [options.data.points] The data points for the heatmap containing x=lon, y=lat and value=number.</span></td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     *</span></td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@see</span> HeatmapImageryProvider</span></td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@see</span> ArcGisMapServerImageryProvider</span></td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@see</span> BingMapsImageryProvider</span></td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@see</span> GoogleEarthImageryProvider</span></td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@see</span> OpenStreetMapImageryProvider</span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@see</span> TileMapServiceImageryProvider</span></td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@see</span> WebMapServiceImageryProvider</span></td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     */</span></td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>var</span> <span class=pl-v>HeatmapImageryProvider</span> <span class=pl-c1>=</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>options</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>options</span> <span class=pl-c1>=</span> <span class=pl-s1>defaultValue</span><span class=pl-kos>(</span><span class=pl-s1>options</span><span class=pl-kos>,</span> <span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>var</span> <span class=pl-s1>bounds</span> <span class=pl-c1>=</span> <span class=pl-s1>options</span><span class=pl-kos>.</span><span class=pl-c1>bounds</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>var</span> <span class=pl-s1>data</span> <span class=pl-c1>=</span> <span class=pl-s1>options</span><span class=pl-kos>.</span><span class=pl-c1>data</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">        </td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-s1>defined</span><span class=pl-kos>(</span><span class=pl-s1>bounds</span><span class=pl-kos>)</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">            <span class=pl-k>throw</span> <span class=pl-k>new</span> <span class=pl-v>DeveloperError</span><span class=pl-kos>(</span><span class=pl-s>&#39;options.bounds is required.&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">        <span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-s1>defined</span><span class=pl-kos>(</span><span class=pl-s1>bounds</span><span class=pl-kos>.</span><span class=pl-c1>north</span><span class=pl-kos>)</span> <span class=pl-c1>||</span> !<span class=pl-s1>defined</span><span class=pl-kos>(</span><span class=pl-s1>bounds</span><span class=pl-kos>.</span><span class=pl-c1>south</span><span class=pl-kos>)</span> <span class=pl-c1>||</span> !<span class=pl-s1>defined</span><span class=pl-kos>(</span><span class=pl-s1>bounds</span><span class=pl-kos>.</span><span class=pl-c1>east</span><span class=pl-kos>)</span> <span class=pl-c1>||</span> !<span class=pl-s1>defined</span><span class=pl-kos>(</span><span class=pl-s1>bounds</span><span class=pl-kos>.</span><span class=pl-c1>west</span><span class=pl-kos>)</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">            <span class=pl-k>throw</span> <span class=pl-k>new</span> <span class=pl-v>DeveloperError</span><span class=pl-kos>(</span><span class=pl-s>&#39;options.bounds.north, options.bounds.south, options.bounds.east and options.bounds.west are required.&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">        <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">        </td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-s1>defined</span><span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>)</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">            <span class=pl-k>throw</span> <span class=pl-k>new</span> <span class=pl-v>DeveloperError</span><span class=pl-kos>(</span><span class=pl-s>&#39;data is required.&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">        <span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-s1>defined</span><span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>min</span><span class=pl-kos>)</span> <span class=pl-c1>||</span> !<span class=pl-s1>defined</span><span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>max</span><span class=pl-kos>)</span> <span class=pl-c1>||</span> !<span class=pl-s1>defined</span><span class=pl-kos>(</span><span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>points</span><span class=pl-kos>)</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">            <span class=pl-k>throw</span> <span class=pl-k>new</span> <span class=pl-v>DeveloperError</span><span class=pl-kos>(</span><span class=pl-s>&#39;options.bounds.north, bounds.south, bounds.east and bounds.west are required.&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">        <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">        </td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">        <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_wmp</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>Cesium</span><span class=pl-kos>.</span><span class=pl-c1>WebMercatorProjection</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">        <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_mbounds</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>wgs84ToMercatorBB</span><span class=pl-kos>(</span><span class=pl-s1>bounds</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">        <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_options</span> <span class=pl-c1>=</span> <span class=pl-s1>defaultValue</span><span class=pl-kos>(</span><span class=pl-s1>options</span><span class=pl-kos>.</span><span class=pl-c1>heatmapoptions</span><span class=pl-kos>,</span> <span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">        <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_options</span><span class=pl-kos>.</span><span class=pl-c1>gradient</span> <span class=pl-c1>=</span> <span class=pl-s1>defaultValue</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_options</span><span class=pl-kos>.</span><span class=pl-c1>gradient</span><span class=pl-kos>,</span> <span class=pl-kos>{</span> <span class=pl-c1>0.25</span>: <span class=pl-s>&quot;rgb(0,0,255)&quot;</span><span class=pl-kos>,</span> <span class=pl-c1>0.55</span>: <span class=pl-s>&quot;rgb(0,255,0)&quot;</span><span class=pl-kos>,</span> <span class=pl-c1>0.85</span>: <span class=pl-s>&quot;yellow&quot;</span><span class=pl-kos>,</span> <span class=pl-c1>1.0</span>: <span class=pl-s>&quot;rgb(255,0,0)&quot;</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">        </td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">        <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_setWidthAndHeight</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_mbounds</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">        <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_options</span><span class=pl-kos>.</span><span class=pl-c1>radius</span> <span class=pl-c1>=</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>round</span><span class=pl-kos>(</span><span class=pl-s1>defaultValue</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_options</span><span class=pl-kos>.</span><span class=pl-c1>radius</span><span class=pl-kos>,</span> <span class=pl-kos>(</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>width</span> <span class=pl-c1>&gt;</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>height</span><span class=pl-kos>)</span> ? <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>width</span> / <span class=pl-c1>60</span> : <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>height</span> / <span class=pl-c1>60</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">        </td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">        <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_spacing</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_options</span><span class=pl-kos>.</span><span class=pl-c1>radius</span> * <span class=pl-c1>1.5</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">        <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_xoffset</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_mbounds</span><span class=pl-kos>.</span><span class=pl-c1>west</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">        <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_yoffset</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_mbounds</span><span class=pl-kos>.</span><span class=pl-c1>south</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">        </td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">        <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>width</span> <span class=pl-c1>=</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>round</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>width</span> <span class=pl-c1>+</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_spacing</span> * <span class=pl-c1>2</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">        <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>height</span> <span class=pl-c1>=</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>round</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>height</span> <span class=pl-c1>+</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_spacing</span> * <span class=pl-c1>2</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">            </td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">        <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_mbounds</span><span class=pl-kos>.</span><span class=pl-c1>west</span> <span class=pl-c1>-=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_spacing</span> * <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_factor</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">        <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_mbounds</span><span class=pl-kos>.</span><span class=pl-c1>east</span> <span class=pl-c1>+=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_spacing</span> * <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_factor</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">        <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_mbounds</span><span class=pl-kos>.</span><span class=pl-c1>south</span> <span class=pl-c1>-=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_spacing</span> * <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_factor</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">        <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_mbounds</span><span class=pl-kos>.</span><span class=pl-c1>north</span> <span class=pl-c1>+=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_spacing</span> * <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_factor</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">        </td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">        <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>bounds</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>mercatorToWgs84BB</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_mbounds</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">        </td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">        <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_container</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_getContainer</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>width</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>height</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">        <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_options</span><span class=pl-kos>.</span><span class=pl-c1>container</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_container</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">        <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_heatmap</span> <span class=pl-c1>=</span> <span class=pl-s1>h337</span><span class=pl-kos>.</span><span class=pl-en>create</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_options</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">        <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_canvas</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_container</span><span class=pl-kos>.</span><span class=pl-c1>children</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">        </td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">        <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_tilingScheme</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>Cesium</span><span class=pl-kos>.</span><span class=pl-c1>WebMercatorTilingScheme</span><span class=pl-kos>(</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">            <span class=pl-c1>rectangleSouthwestInMeters</span>: <span class=pl-k>new</span> <span class=pl-v>Cesium</span><span class=pl-kos>.</span><span class=pl-c1>Cartesian2</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_mbounds</span><span class=pl-kos>.</span><span class=pl-c1>west</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_mbounds</span><span class=pl-kos>.</span><span class=pl-c1>south</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">            <span class=pl-c1>rectangleNortheastInMeters</span>: <span class=pl-k>new</span> <span class=pl-v>Cesium</span><span class=pl-kos>.</span><span class=pl-c1>Cartesian2</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_mbounds</span><span class=pl-kos>.</span><span class=pl-c1>east</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_mbounds</span><span class=pl-kos>.</span><span class=pl-c1>north</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">        <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">        <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_image</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_canvas</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">        <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_texture</span> <span class=pl-c1>=</span> undefined<span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">        <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_tileWidth</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>width</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">        <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_tileHeight</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>height</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">        <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_ready</span> <span class=pl-c1>=</span> <span class=pl-c1>false</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>options</span><span class=pl-kos>.</span><span class=pl-c1>data</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">            <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_ready</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>setWGS84Data</span><span class=pl-kos>(</span><span class=pl-s1>options</span><span class=pl-kos>.</span><span class=pl-c1>data</span><span class=pl-kos>.</span><span class=pl-c1>min</span><span class=pl-kos>,</span> <span class=pl-s1>options</span><span class=pl-kos>.</span><span class=pl-c1>data</span><span class=pl-kos>.</span><span class=pl-c1>max</span><span class=pl-kos>,</span> <span class=pl-s1>options</span><span class=pl-kos>.</span><span class=pl-c1>data</span><span class=pl-kos>.</span><span class=pl-c1>points</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">        <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">    <span class=pl-s1>defineProperties</span><span class=pl-kos>(</span><span class=pl-v>HeatmapImageryProvider</span><span class=pl-kos>.</span><span class=pl-c1>prototype</span><span class=pl-kos>,</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">        <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * Gets the URL of the single, top-level imagery tile.</span></td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * <span class=pl-k>@memberof</span> HeatmapImageryProvider.prototype</span></td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * <span class=pl-k>@type</span> {String}</span></td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * <span class=pl-k>@readonly</span></span></td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         */</span></td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">        <span class=pl-c1>url</span> : <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">            <span class=pl-en>get</span> : <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">                <span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_url</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">            <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">        <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">        <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * Gets the width of each tile, in pixels. This function should</span></td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * not be called before {<span class=pl-k>@link</span> HeatmapImageryProvider#ready} returns true.</span></td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * <span class=pl-k>@memberof</span> HeatmapImageryProvider.prototype</span></td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * <span class=pl-k>@type</span> {Number}</span></td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * <span class=pl-k>@readonly</span></span></td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         */</span></td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">        <span class=pl-c1>tileWidth</span> : <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">            <span class=pl-en>get</span> : <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">                <span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_ready</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">                    <span class=pl-k>throw</span> <span class=pl-k>new</span> <span class=pl-v>DeveloperError</span><span class=pl-kos>(</span><span class=pl-s>&#39;tileWidth must not be called before the imagery provider is ready.&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">                <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">                </td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">                <span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_tileWidth</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">            <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">        <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">        <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * Gets the height of each tile, in pixels.  This function should</span></td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * not be called before {<span class=pl-k>@link</span> HeatmapImageryProvider#ready} returns true.</span></td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * <span class=pl-k>@memberof</span> HeatmapImageryProvider.prototype</span></td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * <span class=pl-k>@type</span> {Number}</span></td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * <span class=pl-k>@readonly</span></span></td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         */</span></td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">        <span class=pl-c1>tileHeight</span>: <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">            <span class=pl-en>get</span> : <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">                <span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_ready</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">                    <span class=pl-k>throw</span> <span class=pl-k>new</span> <span class=pl-v>DeveloperError</span><span class=pl-kos>(</span><span class=pl-s>&#39;tileHeight must not be called before the imagery provider is ready.&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">                <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">                </td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">                <span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_tileHeight</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">            <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">        <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">        <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * Gets the maximum level-of-detail that can be requested.  This function should</span></td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * not be called before {<span class=pl-k>@link</span> HeatmapImageryProvider#ready} returns true.</span></td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * <span class=pl-k>@memberof</span> HeatmapImageryProvider.prototype</span></td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * <span class=pl-k>@type</span> {Number}</span></td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * <span class=pl-k>@readonly</span></span></td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         */</span></td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">        <span class=pl-c1>maximumLevel</span> : <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">            <span class=pl-en>get</span> : <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">                <span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_ready</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">                    <span class=pl-k>throw</span> <span class=pl-k>new</span> <span class=pl-v>DeveloperError</span><span class=pl-kos>(</span><span class=pl-s>&#39;maximumLevel must not be called before the imagery provider is ready.&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">                <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">                </td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">                <span class=pl-k>return</span> <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">            <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">        <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">        <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * Gets the minimum level-of-detail that can be requested.  This function should</span></td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * not be called before {<span class=pl-k>@link</span> HeatmapImageryProvider#ready} returns true.</span></td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * <span class=pl-k>@memberof</span> HeatmapImageryProvider.prototype</span></td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * <span class=pl-k>@type</span> {Number}</span></td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * <span class=pl-k>@readonly</span></span></td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         */</span></td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">        <span class=pl-c1>minimumLevel</span> : <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">            <span class=pl-en>get</span> : <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">                <span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_ready</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">                    <span class=pl-k>throw</span> <span class=pl-k>new</span> <span class=pl-v>DeveloperError</span><span class=pl-kos>(</span><span class=pl-s>&#39;minimumLevel must not be called before the imagery provider is ready.&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">                <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">                </td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">                <span class=pl-k>return</span> <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">            <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">        <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">        <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * Gets the tiling scheme used by this provider.  This function should</span></td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * not be called before {<span class=pl-k>@link</span> HeatmapImageryProvider#ready} returns true.</span></td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * <span class=pl-k>@memberof</span> HeatmapImageryProvider.prototype</span></td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * <span class=pl-k>@type</span> {TilingScheme}</span></td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * <span class=pl-k>@readonly</span></span></td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         */</span></td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">        <span class=pl-c1>tilingScheme</span> : <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">            <span class=pl-en>get</span> : <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">                <span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_ready</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">                    <span class=pl-k>throw</span> <span class=pl-k>new</span> <span class=pl-v>DeveloperError</span><span class=pl-kos>(</span><span class=pl-s>&#39;tilingScheme must not be called before the imagery provider is ready.&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">                <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">                </td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">                <span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_tilingScheme</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">            <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">        <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">        <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * Gets the rectangle, in radians, of the imagery provided by this instance.  This function should</span></td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * not be called before {<span class=pl-k>@link</span> HeatmapImageryProvider#ready} returns true.</span></td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * <span class=pl-k>@memberof</span> HeatmapImageryProvider.prototype</span></td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * <span class=pl-k>@type</span> {Rectangle}</span></td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * <span class=pl-k>@readonly</span></span></td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         */</span></td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">        <span class=pl-c1>rectangle</span> : <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">            <span class=pl-en>get</span> : <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">                <span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_tilingScheme</span><span class=pl-kos>.</span><span class=pl-c1>rectangle</span><span class=pl-kos>;</span><span class=pl-c>//TODO: change to custom rectangle?</span></td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">            <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">        <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">        <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * Gets the tile discard policy.  If not undefined, the discard policy is responsible</span></td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * for filtering out &quot;missing&quot; tiles via its shouldDiscardImage function.  If this function</span></td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * returns undefined, no tiles are filtered.  This function should</span></td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * not be called before {<span class=pl-k>@link</span> HeatmapImageryProvider#ready} returns true.</span></td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * <span class=pl-k>@memberof</span> HeatmapImageryProvider.prototype</span></td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * <span class=pl-k>@type</span> {TileDiscardPolicy}</span></td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * <span class=pl-k>@readonly</span></span></td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         */</span></td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">        <span class=pl-c1>tileDiscardPolicy</span> : <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">            <span class=pl-en>get</span> : <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">                <span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_ready</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">                    <span class=pl-k>throw</span> <span class=pl-k>new</span> <span class=pl-v>DeveloperError</span><span class=pl-kos>(</span><span class=pl-s>&#39;tileDiscardPolicy must not be called before the imagery provider is ready.&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">                <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">                </td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">                <span class=pl-k>return</span> undefined<span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">            <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">        <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">        <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * Gets an event that is raised when the imagery provider encounters an asynchronous error.  By subscribing</span></td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * to the event, you will be notified of the error and can potentially recover from it.  Event listeners</span></td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * are passed an instance of {<span class=pl-k>@link</span> TileProviderError}.</span></td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * <span class=pl-k>@memberof</span> HeatmapImageryProvider.prototype</span></td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * <span class=pl-k>@type</span> {Event}</span></td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * <span class=pl-k>@readonly</span></span></td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         */</span></td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">        <span class=pl-c1>errorEvent</span> : <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">            <span class=pl-en>get</span> : <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">                <span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_errorEvent</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">            <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">        <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">        <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * Gets a value indicating whether or not the provider is ready for use.</span></td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * <span class=pl-k>@memberof</span> HeatmapImageryProvider.prototype</span></td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * <span class=pl-k>@type</span> {Boolean}</span></td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * <span class=pl-k>@readonly</span></span></td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         */</span></td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">        <span class=pl-c1>ready</span> : <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">            <span class=pl-en>get</span> : <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">                <span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_ready</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">            <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">        <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">        <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * Gets the credit to display when this imagery provider is active.  Typically this is used to credit</span></td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * the source of the imagery.  This function should not be called before {<span class=pl-k>@link</span> HeatmapImageryProvider#ready} returns true.</span></td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * <span class=pl-k>@memberof</span> HeatmapImageryProvider.prototype</span></td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * <span class=pl-k>@type</span> {Credit}</span></td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * <span class=pl-k>@readonly</span></span></td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         */</span></td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">        <span class=pl-c1>credit</span> : <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">            <span class=pl-en>get</span> : <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">                <span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_credit</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">            <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">        <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">        <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * Gets a value indicating whether or not the images provided by this imagery provider</span></td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * include an alpha channel.  If this property is false, an alpha channel, if present, will</span></td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * be ignored.  If this property is true, any images without an alpha channel will be treated</span></td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * as if their alpha is 1.0 everywhere.  When this property is false, memory usage</span></td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * and texture upload time are reduced.</span></td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * <span class=pl-k>@memberof</span> HeatmapImageryProvider.prototype</span></td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * <span class=pl-k>@type</span> {Boolean}</span></td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         * <span class=pl-k>@readonly</span></span></td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line"><span class=pl-c>         */</span></td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">        <span class=pl-c1>hasAlphaChannel</span> : <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">            <span class=pl-en>get</span> : <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">                <span class=pl-k>return</span> <span class=pl-c1>true</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">            <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">        <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line">    <span class=pl-v>HeatmapImageryProvider</span><span class=pl-kos>.</span><span class=pl-c1>prototype</span><span class=pl-kos>.</span><span class=pl-en>_setWidthAndHeight</span> <span class=pl-c1>=</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>mbb</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>var</span> <span class=pl-s1>maxCanvasSize</span> <span class=pl-c1>=</span> <span class=pl-c1>2000</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>var</span> <span class=pl-s1>minCanvasSize</span> <span class=pl-c1>=</span> <span class=pl-c1>700</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">        <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>width</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span><span class=pl-kos>(</span><span class=pl-s1>mbb</span><span class=pl-kos>.</span><span class=pl-c1>east</span> <span class=pl-c1>&gt;</span> <span class=pl-c1>0</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>mbb</span><span class=pl-kos>.</span><span class=pl-c1>west</span> <span class=pl-c1>&lt;</span> <span class=pl-c1>0</span><span class=pl-kos>)</span> ? <span class=pl-s1>mbb</span><span class=pl-kos>.</span><span class=pl-c1>east</span> <span class=pl-c1>+</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>abs</span><span class=pl-kos>(</span><span class=pl-s1>mbb</span><span class=pl-kos>.</span><span class=pl-c1>west</span><span class=pl-kos>)</span> : <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>abs</span><span class=pl-kos>(</span><span class=pl-s1>mbb</span><span class=pl-kos>.</span><span class=pl-c1>east</span> <span class=pl-c1>-</span> <span class=pl-s1>mbb</span><span class=pl-kos>.</span><span class=pl-c1>west</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">        <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>height</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span><span class=pl-kos>(</span><span class=pl-s1>mbb</span><span class=pl-kos>.</span><span class=pl-c1>north</span> <span class=pl-c1>&gt;</span> <span class=pl-c1>0</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>mbb</span><span class=pl-kos>.</span><span class=pl-c1>south</span> <span class=pl-c1>&lt;</span> <span class=pl-c1>0</span><span class=pl-kos>)</span> ? <span class=pl-s1>mbb</span><span class=pl-kos>.</span><span class=pl-c1>north</span> <span class=pl-c1>+</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>abs</span><span class=pl-kos>(</span><span class=pl-s1>mbb</span><span class=pl-kos>.</span><span class=pl-c1>south</span><span class=pl-kos>)</span> : <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>abs</span><span class=pl-kos>(</span><span class=pl-s1>mbb</span><span class=pl-kos>.</span><span class=pl-c1>north</span> <span class=pl-c1>-</span> <span class=pl-s1>mbb</span><span class=pl-kos>.</span><span class=pl-c1>south</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">        <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_factor</span> <span class=pl-c1>=</span> <span class=pl-c1>1</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">        </td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>width</span> <span class=pl-c1>&gt;</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>height</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>width</span> <span class=pl-c1>&gt;</span> <span class=pl-s1>maxCanvasSize</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line">            <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_factor</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>width</span> / <span class=pl-s1>maxCanvasSize</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line">            </td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line">            <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>height</span> / <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_factor</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>minCanvasSize</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line">                <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_factor</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>height</span> / <span class=pl-s1>minCanvasSize</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line">            <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line">        <span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>height</span> <span class=pl-c1>&gt;</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>width</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>height</span> <span class=pl-c1>&gt;</span> <span class=pl-s1>maxCanvasSize</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line">            <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_factor</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>height</span> / <span class=pl-s1>maxCanvasSize</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line">            </td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line">            <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>width</span> / <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_factor</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>minCanvasSize</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line">                <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_factor</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>width</span> / <span class=pl-s1>minCanvasSize</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line">            <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line">        <span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>width</span> <span class=pl-c1>&lt;</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>height</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>width</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>minCanvasSize</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line">            <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_factor</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>width</span> / <span class=pl-s1>minCanvasSize</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line">            <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>height</span> / <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_factor</span> <span class=pl-c1>&gt;</span> <span class=pl-s1>maxCanvasSize</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line">                <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_factor</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>height</span> / <span class=pl-s1>maxCanvasSize</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line">            <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">        <span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>height</span> <span class=pl-c1>&lt;</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>width</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>height</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>minCanvasSize</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line">            <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_factor</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>height</span> / <span class=pl-s1>minCanvasSize</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line">            <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>width</span> / <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_factor</span> <span class=pl-c1>&gt;</span> <span class=pl-s1>maxCanvasSize</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line">                <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_factor</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>width</span> / <span class=pl-s1>maxCanvasSize</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line">            <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line">        <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line">        </td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line">        <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>width</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>width</span> / <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_factor</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line">        <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>height</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>height</span> / <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_factor</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line">    <span class=pl-v>HeatmapImageryProvider</span><span class=pl-kos>.</span><span class=pl-c1>prototype</span><span class=pl-kos>.</span><span class=pl-en>_getContainer</span> <span class=pl-c1>=</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>width</span><span class=pl-kos>,</span> <span class=pl-s1>height</span><span class=pl-kos>,</span> <span class=pl-s1>id</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>var</span> <span class=pl-s1>c</span> <span class=pl-c1>=</span> <span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>createElement</span><span class=pl-kos>(</span><span class=pl-s>&quot;div&quot;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>id</span><span class=pl-kos>)</span> <span class=pl-kos>{</span> <span class=pl-s1>c</span><span class=pl-kos>.</span><span class=pl-en>setAttribute</span><span class=pl-kos>(</span><span class=pl-s>&quot;id&quot;</span><span class=pl-kos>,</span> <span class=pl-s1>id</span><span class=pl-kos>)</span><span class=pl-kos>;</span> <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>c</span><span class=pl-kos>.</span><span class=pl-en>setAttribute</span><span class=pl-kos>(</span><span class=pl-s>&quot;style&quot;</span><span class=pl-kos>,</span> <span class=pl-s>&quot;width: &quot;</span> <span class=pl-c1>+</span> <span class=pl-s1>width</span> <span class=pl-c1>+</span> <span class=pl-s>&quot;px; height: &quot;</span> <span class=pl-c1>+</span> <span class=pl-s1>height</span> <span class=pl-c1>+</span> <span class=pl-s>&quot;px; margin: 0px; display: none;&quot;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line">        <span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-c1>body</span><span class=pl-kos>.</span><span class=pl-en>appendChild</span><span class=pl-kos>(</span><span class=pl-s1>c</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>return</span> <span class=pl-s1>c</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * Convert a WGS84 location into a Mercator location.</span></td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     *</span></td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Object</span>} point The WGS84 location.</span></td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Number</span>} [point.x] The longitude of the location.</span></td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Number</span>} [point.y] The latitude of the location.</span></td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@returns</span> {<span class=pl-smi>Cesium.Cartesian3</span>} The Mercator location.</span></td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     */</span></td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code blob-code-inner js-file-line">    <span class=pl-v>HeatmapImageryProvider</span><span class=pl-kos>.</span><span class=pl-c1>prototype</span><span class=pl-kos>.</span><span class=pl-en>wgs84ToMercator</span> <span class=pl-c1>=</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>point</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_wmp</span><span class=pl-kos>.</span><span class=pl-en>project</span><span class=pl-kos>(</span><span class=pl-v>Cesium</span><span class=pl-kos>.</span><span class=pl-c1>Cartographic</span><span class=pl-kos>.</span><span class=pl-en>fromDegrees</span><span class=pl-kos>(</span><span class=pl-s1>point</span><span class=pl-kos>.</span><span class=pl-c1>x</span><span class=pl-kos>,</span> <span class=pl-s1>point</span><span class=pl-kos>.</span><span class=pl-c1>y</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * Convert a WGS84 bounding box into a Mercator bounding box.</span></td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     *</span></td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Object</span>} bounds The WGS84 bounding box.</span></td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Number</span>} [bounds.north] The northernmost position.</span></td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Number</span>} [bounds.south] The southrnmost position.</span></td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Number</span>} [bounds.east] The easternmost position.</span></td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Number</span>} [bounds.west] The westernmost position.</span></td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@returns</span> {<span class=pl-smi>Object</span>} The Mercator bounding box containing north, south, east and west properties.</span></td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     */</span></td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code blob-code-inner js-file-line">    <span class=pl-v>HeatmapImageryProvider</span><span class=pl-kos>.</span><span class=pl-c1>prototype</span><span class=pl-kos>.</span><span class=pl-en>wgs84ToMercatorBB</span> <span class=pl-c1>=</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>bounds</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>var</span> <span class=pl-s1>ne</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_wmp</span><span class=pl-kos>.</span><span class=pl-en>project</span><span class=pl-kos>(</span><span class=pl-v>Cesium</span><span class=pl-kos>.</span><span class=pl-c1>Cartographic</span><span class=pl-kos>.</span><span class=pl-en>fromDegrees</span><span class=pl-kos>(</span><span class=pl-s1>bounds</span><span class=pl-kos>.</span><span class=pl-c1>east</span><span class=pl-kos>,</span> <span class=pl-s1>bounds</span><span class=pl-kos>.</span><span class=pl-c1>north</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>var</span> <span class=pl-s1>sw</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_wmp</span><span class=pl-kos>.</span><span class=pl-en>project</span><span class=pl-kos>(</span><span class=pl-v>Cesium</span><span class=pl-kos>.</span><span class=pl-c1>Cartographic</span><span class=pl-kos>.</span><span class=pl-en>fromDegrees</span><span class=pl-kos>(</span><span class=pl-s1>bounds</span><span class=pl-kos>.</span><span class=pl-c1>west</span><span class=pl-kos>,</span> <span class=pl-s1>bounds</span><span class=pl-kos>.</span><span class=pl-c1>south</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>return</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code blob-code-inner js-file-line">            <span class=pl-c1>north</span>: <span class=pl-s1>ne</span><span class=pl-kos>.</span><span class=pl-c1>y</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code blob-code-inner js-file-line">            <span class=pl-c1>south</span>: <span class=pl-s1>sw</span><span class=pl-kos>.</span><span class=pl-c1>y</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code blob-code-inner js-file-line">            <span class=pl-c1>east</span>: <span class=pl-s1>ne</span><span class=pl-kos>.</span><span class=pl-c1>x</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code blob-code-inner js-file-line">            <span class=pl-c1>west</span>: <span class=pl-s1>sw</span><span class=pl-kos>.</span><span class=pl-c1>x</span></td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code blob-code-inner js-file-line">        <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * Convert a mercator location into a WGS84 location.</span></td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     *</span></td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Object</span>} point The Mercator lcation.</span></td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Number</span>} [point.x] The x of the location.</span></td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Number</span>} [point.y] The y of the location.</span></td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@returns</span> {<span class=pl-smi>Object</span>} The WGS84 location.</span></td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     */</span></td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code blob-code-inner js-file-line">    <span class=pl-v>HeatmapImageryProvider</span><span class=pl-kos>.</span><span class=pl-c1>prototype</span><span class=pl-kos>.</span><span class=pl-en>mercatorToWgs84</span> <span class=pl-c1>=</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>p</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>var</span> <span class=pl-s1>wp</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_wmp</span><span class=pl-kos>.</span><span class=pl-en>unproject</span><span class=pl-kos>(</span><span class=pl-k>new</span> <span class=pl-v>Cesium</span><span class=pl-kos>.</span><span class=pl-c1>Cartesian3</span><span class=pl-kos>(</span><span class=pl-s1>p</span><span class=pl-kos>.</span><span class=pl-c1>x</span><span class=pl-kos>,</span> <span class=pl-s1>p</span><span class=pl-kos>.</span><span class=pl-c1>y</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>return</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code blob-code-inner js-file-line">            <span class=pl-c1>x</span>: <span class=pl-s1>wp</span><span class=pl-kos>.</span><span class=pl-c1>longitude</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code blob-code-inner js-file-line">            <span class=pl-c1>y</span>: <span class=pl-s1>wp</span><span class=pl-kos>.</span><span class=pl-c1>latitude</span></td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code blob-code-inner js-file-line">        <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * Convert a Mercator bounding box into a WGS84 bounding box.</span></td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     *</span></td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Object</span>} bounds The Mercator bounding box.</span></td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Number</span>} [bounds.north] The northernmost position.</span></td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Number</span>} [bounds.south] The southrnmost position.</span></td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Number</span>} [bounds.east] The easternmost position.</span></td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Number</span>} [bounds.west] The westernmost position.</span></td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@returns</span> {<span class=pl-smi>Object</span>} The WGS84 bounding box containing north, south, east and west properties.</span></td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     */</span></td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code blob-code-inner js-file-line">    <span class=pl-v>HeatmapImageryProvider</span><span class=pl-kos>.</span><span class=pl-c1>prototype</span><span class=pl-kos>.</span><span class=pl-en>mercatorToWgs84BB</span> <span class=pl-c1>=</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>bounds</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>var</span> <span class=pl-s1>sw</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_wmp</span><span class=pl-kos>.</span><span class=pl-en>unproject</span><span class=pl-kos>(</span><span class=pl-k>new</span> <span class=pl-v>Cesium</span><span class=pl-kos>.</span><span class=pl-c1>Cartesian3</span><span class=pl-kos>(</span><span class=pl-s1>bounds</span><span class=pl-kos>.</span><span class=pl-c1>west</span><span class=pl-kos>,</span> <span class=pl-s1>bounds</span><span class=pl-kos>.</span><span class=pl-c1>south</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>var</span> <span class=pl-s1>ne</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_wmp</span><span class=pl-kos>.</span><span class=pl-en>unproject</span><span class=pl-kos>(</span><span class=pl-k>new</span> <span class=pl-v>Cesium</span><span class=pl-kos>.</span><span class=pl-c1>Cartesian3</span><span class=pl-kos>(</span><span class=pl-s1>bounds</span><span class=pl-kos>.</span><span class=pl-c1>east</span><span class=pl-kos>,</span> <span class=pl-s1>bounds</span><span class=pl-kos>.</span><span class=pl-c1>north</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>return</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code blob-code-inner js-file-line">            <span class=pl-c1>north</span>: <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>rad2deg</span><span class=pl-kos>(</span><span class=pl-s1>ne</span><span class=pl-kos>.</span><span class=pl-c1>latitude</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code blob-code-inner js-file-line">            <span class=pl-c1>east</span>: <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>rad2deg</span><span class=pl-kos>(</span><span class=pl-s1>ne</span><span class=pl-kos>.</span><span class=pl-c1>longitude</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code blob-code-inner js-file-line">            <span class=pl-c1>south</span>: <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>rad2deg</span><span class=pl-kos>(</span><span class=pl-s1>sw</span><span class=pl-kos>.</span><span class=pl-c1>latitude</span><span class=pl-kos>)</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code blob-code-inner js-file-line">            <span class=pl-c1>west</span>: <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>rad2deg</span><span class=pl-kos>(</span><span class=pl-s1>sw</span><span class=pl-kos>.</span><span class=pl-c1>longitude</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code blob-code-inner js-file-line">        <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * Convert degrees into radians.</span></td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     *</span></td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Number</span>} degrees The degrees to be converted to radians.</span></td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@returns</span> {<span class=pl-smi>Number</span>} The converted radians.</span></td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     */</span></td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code blob-code-inner js-file-line">    <span class=pl-v>HeatmapImageryProvider</span><span class=pl-kos>.</span><span class=pl-c1>prototype</span><span class=pl-kos>.</span><span class=pl-en>deg2rad</span> <span class=pl-c1>=</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>degrees</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>return</span> <span class=pl-kos>(</span><span class=pl-s1>degrees</span> * <span class=pl-kos>(</span><span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-c1>PI</span> / <span class=pl-c1>180.0</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * Convert radians into degrees.</span></td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     *</span></td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Number</span>} radians The radians to be converted to degrees.</span></td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@returns</span> {<span class=pl-smi>Number</span>} The converted degrees.</span></td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     */</span></td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code blob-code-inner js-file-line">    <span class=pl-v>HeatmapImageryProvider</span><span class=pl-kos>.</span><span class=pl-c1>prototype</span><span class=pl-kos>.</span><span class=pl-en>rad2deg</span> <span class=pl-c1>=</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>radians</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>return</span> <span class=pl-kos>(</span><span class=pl-s1>radians</span> / <span class=pl-kos>(</span><span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-c1>PI</span> / <span class=pl-c1>180.0</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * Convert a WGS84 location to the corresponding heatmap location.</span></td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     *</span></td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Object</span>} point The WGS84 location.</span></td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Number</span>} [point.x] The longitude of the location.</span></td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Number</span>} [point.y] The latitude of the location.</span></td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@returns</span> {<span class=pl-smi>Object</span>} The corresponding heatmap location.</span></td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     */</span></td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code blob-code-inner js-file-line">    <span class=pl-v>HeatmapImageryProvider</span><span class=pl-kos>.</span><span class=pl-c1>prototype</span><span class=pl-kos>.</span><span class=pl-en>wgs84PointToHeatmapPoint</span> <span class=pl-c1>=</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>point</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>mercatorPointToHeatmapPoint</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>wgs84ToMercator</span><span class=pl-kos>(</span><span class=pl-s1>point</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * Convert a mercator location to the corresponding heatmap location.</span></td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     *</span></td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Object</span>} point The Mercator lcation.</span></td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Number</span>} [point.x] The x of the location.</span></td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Number</span>} [point.y] The y of the location.</span></td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@returns</span> {<span class=pl-smi>Object</span>} The corresponding heatmap location.</span></td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     */</span></td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code blob-code-inner js-file-line">    <span class=pl-v>HeatmapImageryProvider</span><span class=pl-kos>.</span><span class=pl-c1>prototype</span><span class=pl-kos>.</span><span class=pl-en>mercatorPointToHeatmapPoint</span> <span class=pl-c1>=</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>point</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>var</span> <span class=pl-s1>pn</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code blob-code-inner js-file-line">        </td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>pn</span><span class=pl-kos>.</span><span class=pl-c1>x</span> <span class=pl-c1>=</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>round</span><span class=pl-kos>(</span><span class=pl-kos>(</span><span class=pl-s1>point</span><span class=pl-kos>.</span><span class=pl-c1>x</span> <span class=pl-c1>-</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_xoffset</span><span class=pl-kos>)</span> / <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_factor</span> <span class=pl-c1>+</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_spacing</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>pn</span><span class=pl-kos>.</span><span class=pl-c1>y</span> <span class=pl-c1>=</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>round</span><span class=pl-kos>(</span><span class=pl-kos>(</span><span class=pl-s1>point</span><span class=pl-kos>.</span><span class=pl-c1>y</span> <span class=pl-c1>-</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_yoffset</span><span class=pl-kos>)</span> / <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_factor</span> <span class=pl-c1>+</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_spacing</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code blob-code-inner js-file-line">        <span class=pl-s1>pn</span><span class=pl-kos>.</span><span class=pl-c1>y</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>height</span> <span class=pl-c1>-</span> <span class=pl-s1>pn</span><span class=pl-kos>.</span><span class=pl-c1>y</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code blob-code-inner js-file-line">        </td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>return</span> <span class=pl-s1>pn</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * Set an array of heatmap locations.</span></td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     *</span></td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Number</span>} min The minimum allowed value for the data points.</span></td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Number</span>} max The maximum allowed value for the data points.</span></td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Array</span>} data An array of data points with heatmap coordinates(x, y) and value</span></td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@returns</span> {<span class=pl-smi>Boolean</span>} Wheter or not the data was successfully added or failed.</span></td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     */</span></td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code blob-code-inner js-file-line">    <span class=pl-v>HeatmapImageryProvider</span><span class=pl-kos>.</span><span class=pl-c1>prototype</span><span class=pl-kos>.</span><span class=pl-en>setData</span> <span class=pl-c1>=</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>min</span><span class=pl-kos>,</span> <span class=pl-s1>max</span><span class=pl-kos>,</span> <span class=pl-s1>data</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>data</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>&gt;</span> <span class=pl-c1>0</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>min</span> !== null <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>min</span> !== <span class=pl-c1>false</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>max</span> !== null <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>max</span> !== <span class=pl-c1>false</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code blob-code-inner js-file-line">            <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_heatmap</span><span class=pl-kos>.</span><span class=pl-en>setData</span><span class=pl-kos>(</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code blob-code-inner js-file-line">                <span class=pl-c1>min</span>: <span class=pl-s1>min</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code blob-code-inner js-file-line">                <span class=pl-c1>max</span>: <span class=pl-s1>max</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code blob-code-inner js-file-line">                <span class=pl-c1>data</span>: <span class=pl-s1>data</span></td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code blob-code-inner js-file-line">            <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code blob-code-inner js-file-line">            </td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code blob-code-inner js-file-line">            <span class=pl-k>return</span> <span class=pl-c1>true</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code blob-code-inner js-file-line">        <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code blob-code-inner js-file-line">        </td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>return</span> <span class=pl-c1>false</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * Set an array of WGS84 locations.</span></td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     *</span></td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Number</span>} min The minimum allowed value for the data points.</span></td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Number</span>} max The maximum allowed value for the data points.</span></td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Array</span>} data An array of data points with WGS84 coordinates(x=lon, y=lat) and value</span></td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@returns</span> {<span class=pl-smi>Boolean</span>} Wheter or not the data was successfully added or failed.</span></td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     */</span></td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code blob-code-inner js-file-line">    <span class=pl-v>HeatmapImageryProvider</span><span class=pl-kos>.</span><span class=pl-c1>prototype</span><span class=pl-kos>.</span><span class=pl-en>setWGS84Data</span> <span class=pl-c1>=</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>min</span><span class=pl-kos>,</span> <span class=pl-s1>max</span><span class=pl-kos>,</span> <span class=pl-s1>data</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>data</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>&gt;</span> <span class=pl-c1>0</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>min</span> !== null <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>min</span> !== <span class=pl-c1>false</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>max</span> !== null <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>max</span> !== <span class=pl-c1>false</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code blob-code-inner js-file-line">            <span class=pl-k>var</span> <span class=pl-s1>convdata</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code blob-code-inner js-file-line">            </td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code blob-code-inner js-file-line">            <span class=pl-k>for</span> <span class=pl-kos>(</span><span class=pl-k>var</span> <span class=pl-s1>i</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span> <span class=pl-s1>i</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>data</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>;</span> <span class=pl-s1>i</span><span class=pl-c1>++</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code blob-code-inner js-file-line">                <span class=pl-k>var</span> <span class=pl-s1>gp</span> <span class=pl-c1>=</span> <span class=pl-s1>data</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code blob-code-inner js-file-line">                </td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code blob-code-inner js-file-line">                <span class=pl-k>var</span> <span class=pl-s1>hp</span> <span class=pl-c1>=</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>wgs84PointToHeatmapPoint</span><span class=pl-kos>(</span><span class=pl-s1>gp</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code blob-code-inner js-file-line">                <span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>gp</span><span class=pl-kos>.</span><span class=pl-c1>value</span> <span class=pl-c1>||</span> <span class=pl-s1>gp</span><span class=pl-kos>.</span><span class=pl-c1>value</span> <span class=pl-c1>===</span> <span class=pl-c1>0</span><span class=pl-kos>)</span> <span class=pl-kos>{</span> <span class=pl-s1>hp</span><span class=pl-kos>.</span><span class=pl-c1>value</span> <span class=pl-c1>=</span> <span class=pl-s1>gp</span><span class=pl-kos>.</span><span class=pl-c1>value</span><span class=pl-kos>;</span> <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code blob-code-inner js-file-line">                </td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code blob-code-inner js-file-line">                <span class=pl-s1>convdata</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span><span class=pl-s1>hp</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code blob-code-inner js-file-line">            <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code blob-code-inner js-file-line">            </td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code blob-code-inner js-file-line">            <span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>setData</span><span class=pl-kos>(</span><span class=pl-s1>min</span><span class=pl-kos>,</span> <span class=pl-s1>max</span><span class=pl-kos>,</span> <span class=pl-s1>convdata</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code blob-code-inner js-file-line">        <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code blob-code-inner js-file-line">        </td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>return</span> <span class=pl-c1>false</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * Gets the credits to be displayed when a given tile is displayed.</span></td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     *</span></td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Number</span>} x The tile X coordinate.</span></td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Number</span>} y The tile Y coordinate.</span></td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Number</span>} level The tile level;</span></td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@returns</span> {<span class=pl-smi>Credit[]</span>} The credits to be displayed when the tile is displayed.</span></td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     *</span></td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@exception</span> {DeveloperError} &lt;code&gt;getTileCredits&lt;/code&gt; must not be called before the imagery provider is ready.</span></td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     */</span></td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code blob-code-inner js-file-line">    <span class=pl-v>HeatmapImageryProvider</span><span class=pl-kos>.</span><span class=pl-c1>prototype</span><span class=pl-kos>.</span><span class=pl-en>getTileCredits</span> <span class=pl-c1>=</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>x</span><span class=pl-kos>,</span> <span class=pl-s1>y</span><span class=pl-kos>,</span> <span class=pl-s1>level</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>return</span> undefined<span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * Requests the image for a given tile.  This function should</span></td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * not be called before {<span class=pl-k>@link</span> HeatmapImageryProvider#ready} returns true.</span></td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     *</span></td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Number</span>} x The tile X coordinate.</span></td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Number</span>} y The tile Y coordinate.</span></td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Number</span>} level The tile level.</span></td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@returns</span> {<span class=pl-smi>Promise</span>} A promise for the image that will resolve when the image is available, or</span></td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     *          undefined if there are too many active requests to the server, and the request</span></td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     *          should be retried later.  The resolved image may be either an</span></td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     *          Image or a Canvas DOM object.</span></td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     *</span></td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@exception</span> {DeveloperError} &lt;code&gt;requestImage&lt;/code&gt; must not be called before the imagery provider is ready.</span></td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     */</span></td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code blob-code-inner js-file-line">    <span class=pl-v>HeatmapImageryProvider</span><span class=pl-kos>.</span><span class=pl-c1>prototype</span><span class=pl-kos>.</span><span class=pl-en>requestImage</span> <span class=pl-c1>=</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>x</span><span class=pl-kos>,</span> <span class=pl-s1>y</span><span class=pl-kos>,</span> <span class=pl-s1>level</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_ready</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code blob-code-inner js-file-line">            <span class=pl-k>throw</span> <span class=pl-k>new</span> <span class=pl-v>DeveloperError</span><span class=pl-kos>(</span><span class=pl-s>&#39;requestImage must not be called before the imagery provider is ready.&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L554" class="blob-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-code blob-code-inner js-file-line">        <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L555" class="blob-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-code blob-code-inner js-file-line">        </td>
      </tr>
      <tr>
        <td id="L556" class="blob-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_image</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L557" class="blob-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L558" class="blob-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L559" class="blob-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L560" class="blob-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * Picking features is not currently supported by this imagery provider, so this function simply returns</span></td>
      </tr>
      <tr>
        <td id="L561" class="blob-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * undefined.</span></td>
      </tr>
      <tr>
        <td id="L562" class="blob-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     *</span></td>
      </tr>
      <tr>
        <td id="L563" class="blob-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Number</span>} x The tile X coordinate.</span></td>
      </tr>
      <tr>
        <td id="L564" class="blob-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Number</span>} y The tile Y coordinate.</span></td>
      </tr>
      <tr>
        <td id="L565" class="blob-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Number</span>} level The tile level.</span></td>
      </tr>
      <tr>
        <td id="L566" class="blob-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Number</span>} longitude The longitude at which to pick features.</span></td>
      </tr>
      <tr>
        <td id="L567" class="blob-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@param</span> {<span class=pl-smi>Number</span>} latitude  The latitude at which to pick features.</span></td>
      </tr>
      <tr>
        <td id="L568" class="blob-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     * <span class=pl-k>@return</span> {<span class=pl-smi>Promise</span>} A promise for the picked features that will resolve when the asynchronous</span></td>
      </tr>
      <tr>
        <td id="L569" class="blob-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     *                   picking completes.  The resolved value is an array of {<span class=pl-k>@link</span> ImageryLayerFeatureInfo}</span></td>
      </tr>
      <tr>
        <td id="L570" class="blob-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     *                   instances.  The array may be empty if no features are found at the given location.</span></td>
      </tr>
      <tr>
        <td id="L571" class="blob-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     *                   It may also be undefined if picking is not supported.</span></td>
      </tr>
      <tr>
        <td id="L572" class="blob-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-code blob-code-inner js-file-line"><span class=pl-c>     */</span></td>
      </tr>
      <tr>
        <td id="L573" class="blob-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-code blob-code-inner js-file-line">    <span class=pl-v>HeatmapImageryProvider</span><span class=pl-kos>.</span><span class=pl-c1>prototype</span><span class=pl-kos>.</span><span class=pl-en>pickFeatures</span> <span class=pl-c1>=</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L574" class="blob-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>return</span> undefined<span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L575" class="blob-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L576" class="blob-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L577" class="blob-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-code blob-code-inner js-file-line">    <span class=pl-k>return</span> <span class=pl-v>HeatmapImageryProvider</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L578" class="blob-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L579" class="blob-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L580" class="blob-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/*  DON&#39;T TOUCH:</span></td>
      </tr>
      <tr>
        <td id="L581" class="blob-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-code blob-code-inner js-file-line"><span class=pl-c> *</span></td>
      </tr>
      <tr>
        <td id="L582" class="blob-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-code blob-code-inner js-file-line"><span class=pl-c> *  heatmap.js v2.0.0 | JavaScript Heatmap Library: http://www.patrick-wied.at/static/heatmapjs/</span></td>
      </tr>
      <tr>
        <td id="L583" class="blob-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-code blob-code-inner js-file-line"><span class=pl-c> *</span></td>
      </tr>
      <tr>
        <td id="L584" class="blob-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-code blob-code-inner js-file-line"><span class=pl-c> *  Copyright 2008-2014 Patrick Wied &lt;heatmapjs@patrick-wied.at&gt; - All rights reserved.</span></td>
      </tr>
      <tr>
        <td id="L585" class="blob-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-code blob-code-inner js-file-line"><span class=pl-c> *  Dual licensed under MIT and Beerware license </span></td>
      </tr>
      <tr>
        <td id="L586" class="blob-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-code blob-code-inner js-file-line"><span class=pl-c> *</span></td>
      </tr>
      <tr>
        <td id="L587" class="blob-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-code blob-code-inner js-file-line"><span class=pl-c> *  :: 2014-10-31 21:16</span></td>
      </tr>
      <tr>
        <td id="L588" class="blob-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-code blob-code-inner js-file-line"><span class=pl-c> */</span></td>
      </tr>
      <tr>
        <td id="L589" class="blob-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>(</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>,</span><span class=pl-s1>b</span><span class=pl-kos>,</span><span class=pl-s1>c</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-k>typeof</span> <span class=pl-smi>module</span>!==<span class=pl-s>&quot;undefined&quot;</span><span class=pl-c1>&amp;&amp;</span><span class=pl-smi>module</span><span class=pl-kos>.</span><span class=pl-c1>exports</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-smi>module</span><span class=pl-kos>.</span><span class=pl-c1>exports</span><span class=pl-c1>=</span><span class=pl-s1>c</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-k>else</span> <span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-k>typeof</span> <span class=pl-s1>define</span><span class=pl-c1>===</span><span class=pl-s>&quot;function&quot;</span><span class=pl-c1>&amp;&amp;</span><span class=pl-s1>define</span><span class=pl-kos>.</span><span class=pl-c1>amd</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-en>define</span><span class=pl-kos>(</span><span class=pl-s1>c</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-k>else</span><span class=pl-kos>{</span><span class=pl-s1>b</span><span class=pl-kos>[</span><span class=pl-s1>a</span><span class=pl-kos>]</span><span class=pl-c1>=</span><span class=pl-s1>c</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>(</span><span class=pl-s>&quot;h337&quot;</span><span class=pl-kos>,</span><span class=pl-smi>this</span><span class=pl-kos>,</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>var</span> <span class=pl-s1>a</span><span class=pl-c1>=</span><span class=pl-kos>{</span><span class=pl-c1>defaultRadius</span>:<span class=pl-c1>40</span><span class=pl-kos>,</span><span class=pl-c1>defaultRenderer</span>:<span class=pl-s>&quot;canvas2d&quot;</span><span class=pl-kos>,</span><span class=pl-c1>defaultGradient</span>:<span class=pl-kos>{</span><span class=pl-c1>.25</span>:<span class=pl-s>&quot;rgb(0,0,255)&quot;</span><span class=pl-kos>,</span><span class=pl-c1>.55</span>:<span class=pl-s>&quot;rgb(0,255,0)&quot;</span><span class=pl-kos>,</span><span class=pl-c1>.85</span>:<span class=pl-s>&quot;yellow&quot;</span><span class=pl-kos>,</span><span class=pl-c1>1</span>:<span class=pl-s>&quot;rgb(255,0,0)&quot;</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-c1>defaultMaxOpacity</span>:<span class=pl-c1>1</span><span class=pl-kos>,</span><span class=pl-c1>defaultMinOpacity</span>:<span class=pl-c1>0</span><span class=pl-kos>,</span><span class=pl-c1>defaultBlur</span>:<span class=pl-c1>.85</span><span class=pl-kos>,</span><span class=pl-c1>defaultXField</span>:<span class=pl-s>&quot;x&quot;</span><span class=pl-kos>,</span><span class=pl-c1>defaultYField</span>:<span class=pl-s>&quot;y&quot;</span><span class=pl-kos>,</span><span class=pl-c1>defaultValueField</span>:<span class=pl-s>&quot;value&quot;</span><span class=pl-kos>,</span><span class=pl-c1>plugins</span>:<span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>}</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>b</span><span class=pl-c1>=</span><span class=pl-k>function</span> <span class=pl-en>h</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>var</span> <span class=pl-en>b</span><span class=pl-c1>=</span><span class=pl-k>function</span> <span class=pl-en>d</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_coordinator</span><span class=pl-c1>=</span><span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_data</span><span class=pl-c1>=</span><span class=pl-kos>[</span><span class=pl-kos>]</span><span class=pl-kos>;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_radi</span><span class=pl-c1>=</span><span class=pl-kos>[</span><span class=pl-kos>]</span><span class=pl-kos>;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_min</span><span class=pl-c1>=</span><span class=pl-c1>0</span><span class=pl-kos>;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_max</span><span class=pl-c1>=</span><span class=pl-c1>1</span><span class=pl-kos>;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_xField</span><span class=pl-c1>=</span><span class=pl-s1>a</span><span class=pl-kos>[</span><span class=pl-s>&quot;xField&quot;</span><span class=pl-kos>]</span><span class=pl-c1>||</span><span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>defaultXField</span><span class=pl-kos>;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_yField</span><span class=pl-c1>=</span><span class=pl-s1>a</span><span class=pl-kos>[</span><span class=pl-s>&quot;yField&quot;</span><span class=pl-kos>]</span><span class=pl-c1>||</span><span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>defaultYField</span><span class=pl-kos>;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_valueField</span><span class=pl-c1>=</span><span class=pl-s1>a</span><span class=pl-kos>[</span><span class=pl-s>&quot;valueField&quot;</span><span class=pl-kos>]</span><span class=pl-c1>||</span><span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>defaultValueField</span><span class=pl-kos>;</span><span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>[</span><span class=pl-s>&quot;radius&quot;</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_cfgRadius</span><span class=pl-c1>=</span><span class=pl-s1>a</span><span class=pl-kos>[</span><span class=pl-s>&quot;radius&quot;</span><span class=pl-kos>]</span><span class=pl-kos>}</span><span class=pl-kos>}</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>c</span><span class=pl-c1>=</span><span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>defaultRadius</span><span class=pl-kos>;</span><span class=pl-en>b</span><span class=pl-kos>.</span><span class=pl-c1>prototype</span><span class=pl-c1>=</span><span class=pl-kos>{</span><span class=pl-en>_organiseData</span>:<span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>,</span><span class=pl-s1>b</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>var</span> <span class=pl-s1>d</span><span class=pl-c1>=</span><span class=pl-s1>a</span><span class=pl-kos>[</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_xField</span><span class=pl-kos>]</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>e</span><span class=pl-c1>=</span><span class=pl-s1>a</span><span class=pl-kos>[</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_yField</span><span class=pl-kos>]</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>f</span><span class=pl-c1>=</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_radi</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>g</span><span class=pl-c1>=</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_data</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>h</span><span class=pl-c1>=</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_max</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>i</span><span class=pl-c1>=</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_min</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>j</span><span class=pl-c1>=</span><span class=pl-s1>a</span><span class=pl-kos>[</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_valueField</span><span class=pl-kos>]</span><span class=pl-c1>||</span><span class=pl-c1>1</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>k</span><span class=pl-c1>=</span><span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>radius</span><span class=pl-c1>||</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_cfgRadius</span><span class=pl-c1>||</span><span class=pl-s1>c</span><span class=pl-kos>;</span><span class=pl-k>if</span><span class=pl-kos>(</span>!<span class=pl-s1>g</span><span class=pl-kos>[</span><span class=pl-s1>d</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-s1>g</span><span class=pl-kos>[</span><span class=pl-s1>d</span><span class=pl-kos>]</span><span class=pl-c1>=</span><span class=pl-kos>[</span><span class=pl-kos>]</span><span class=pl-kos>;</span><span class=pl-s1>f</span><span class=pl-kos>[</span><span class=pl-s1>d</span><span class=pl-kos>]</span><span class=pl-c1>=</span><span class=pl-kos>[</span><span class=pl-kos>]</span><span class=pl-kos>}</span><span class=pl-k>if</span><span class=pl-kos>(</span>!<span class=pl-s1>g</span><span class=pl-kos>[</span><span class=pl-s1>d</span><span class=pl-kos>]</span><span class=pl-kos>[</span><span class=pl-s1>e</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-s1>g</span><span class=pl-kos>[</span><span class=pl-s1>d</span><span class=pl-kos>]</span><span class=pl-kos>[</span><span class=pl-s1>e</span><span class=pl-kos>]</span><span class=pl-c1>=</span><span class=pl-s1>j</span><span class=pl-kos>;</span><span class=pl-s1>f</span><span class=pl-kos>[</span><span class=pl-s1>d</span><span class=pl-kos>]</span><span class=pl-kos>[</span><span class=pl-s1>e</span><span class=pl-kos>]</span><span class=pl-c1>=</span><span class=pl-s1>k</span><span class=pl-kos>}</span><span class=pl-k>else</span><span class=pl-kos>{</span><span class=pl-s1>g</span><span class=pl-kos>[</span><span class=pl-s1>d</span><span class=pl-kos>]</span><span class=pl-kos>[</span><span class=pl-s1>e</span><span class=pl-kos>]</span><span class=pl-c1>+=</span><span class=pl-s1>j</span><span class=pl-kos>}</span><span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-s1>g</span><span class=pl-kos>[</span><span class=pl-s1>d</span><span class=pl-kos>]</span><span class=pl-kos>[</span><span class=pl-s1>e</span><span class=pl-kos>]</span><span class=pl-c1>&gt;</span><span class=pl-s1>h</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>if</span><span class=pl-kos>(</span>!<span class=pl-s1>b</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_max</span><span class=pl-c1>=</span><span class=pl-s1>g</span><span class=pl-kos>[</span><span class=pl-s1>d</span><span class=pl-kos>]</span><span class=pl-kos>[</span><span class=pl-s1>e</span><span class=pl-kos>]</span><span class=pl-kos>}</span><span class=pl-k>else</span><span class=pl-kos>{</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>setDataMax</span><span class=pl-kos>(</span><span class=pl-s1>g</span><span class=pl-kos>[</span><span class=pl-s1>d</span><span class=pl-kos>]</span><span class=pl-kos>[</span><span class=pl-s1>e</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-k>return</span> <span class=pl-c1>false</span><span class=pl-kos>}</span><span class=pl-k>else</span><span class=pl-kos>{</span><span class=pl-k>return</span><span class=pl-kos>{</span><span class=pl-c1>x</span>:<span class=pl-s1>d</span><span class=pl-kos>,</span><span class=pl-c1>y</span>:<span class=pl-s1>e</span><span class=pl-kos>,</span><span class=pl-c1>value</span>:<span class=pl-s1>j</span><span class=pl-kos>,</span><span class=pl-c1>radius</span>:<span class=pl-s1>k</span><span class=pl-kos>,</span><span class=pl-c1>min</span>:<span class=pl-s1>i</span><span class=pl-kos>,</span><span class=pl-c1>max</span>:<span class=pl-s1>h</span><span class=pl-kos>}</span><span class=pl-kos>}</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-en>_unOrganizeData</span>:<span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>var</span> <span class=pl-s1>a</span><span class=pl-c1>=</span><span class=pl-kos>[</span><span class=pl-kos>]</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>b</span><span class=pl-c1>=</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_data</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>c</span><span class=pl-c1>=</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_radi</span><span class=pl-kos>;</span><span class=pl-k>for</span><span class=pl-kos>(</span><span class=pl-k>var</span> <span class=pl-s1>d</span> <span class=pl-k>in</span> <span class=pl-s1>b</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>for</span><span class=pl-kos>(</span><span class=pl-k>var</span> <span class=pl-s1>e</span> <span class=pl-k>in</span> <span class=pl-s1>b</span><span class=pl-kos>[</span><span class=pl-s1>d</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span><span class=pl-kos>{</span><span class=pl-c1>x</span>:<span class=pl-s1>d</span><span class=pl-kos>,</span><span class=pl-c1>y</span>:<span class=pl-s1>e</span><span class=pl-kos>,</span><span class=pl-c1>radius</span>:<span class=pl-s1>c</span><span class=pl-kos>[</span><span class=pl-s1>d</span><span class=pl-kos>]</span><span class=pl-kos>[</span><span class=pl-s1>e</span><span class=pl-kos>]</span><span class=pl-kos>,</span><span class=pl-c1>value</span>:<span class=pl-s1>b</span><span class=pl-kos>[</span><span class=pl-s1>d</span><span class=pl-kos>]</span><span class=pl-kos>[</span><span class=pl-s1>e</span><span class=pl-kos>]</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>}</span><span class=pl-k>return</span><span class=pl-kos>{</span><span class=pl-c1>min</span>:<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_min</span><span class=pl-kos>,</span><span class=pl-c1>max</span>:<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_max</span><span class=pl-kos>,</span><span class=pl-c1>data</span>:<span class=pl-s1>a</span><span class=pl-kos>}</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-en>_onExtremaChange</span>:<span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_coordinator</span><span class=pl-kos>.</span><span class=pl-en>emit</span><span class=pl-kos>(</span><span class=pl-s>&quot;extremachange&quot;</span><span class=pl-kos>,</span><span class=pl-kos>{</span><span class=pl-c1>min</span>:<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_min</span><span class=pl-kos>,</span><span class=pl-c1>max</span>:<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_max</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-en>addData</span>:<span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-smi>arguments</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-c1>&gt;</span><span class=pl-c1>0</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>var</span> <span class=pl-s1>a</span><span class=pl-c1>=</span><span class=pl-smi>arguments</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>b</span><span class=pl-c1>=</span><span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>;</span><span class=pl-k>while</span><span class=pl-kos>(</span><span class=pl-s1>b</span><span class=pl-c1>--</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>addData</span><span class=pl-kos>.</span><span class=pl-en>call</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>,</span><span class=pl-s1>a</span><span class=pl-kos>[</span><span class=pl-s1>b</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>}</span><span class=pl-k>else</span><span class=pl-kos>{</span><span class=pl-k>var</span> <span class=pl-s1>c</span><span class=pl-c1>=</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_organiseData</span><span class=pl-kos>(</span><span class=pl-smi>arguments</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>,</span><span class=pl-c1>true</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-s1>c</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_coordinator</span><span class=pl-kos>.</span><span class=pl-en>emit</span><span class=pl-kos>(</span><span class=pl-s>&quot;renderpartial&quot;</span><span class=pl-kos>,</span><span class=pl-kos>{</span><span class=pl-c1>min</span>:<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_min</span><span class=pl-kos>,</span><span class=pl-c1>max</span>:<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_max</span><span class=pl-kos>,</span><span class=pl-c1>data</span>:<span class=pl-kos>[</span><span class=pl-s1>c</span><span class=pl-kos>]</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>}</span><span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-en>setData</span>:<span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>var</span> <span class=pl-s1>b</span><span class=pl-c1>=</span><span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>data</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>c</span><span class=pl-c1>=</span><span class=pl-s1>b</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_data</span><span class=pl-c1>=</span><span class=pl-kos>[</span><span class=pl-kos>]</span><span class=pl-kos>;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_radi</span><span class=pl-c1>=</span><span class=pl-kos>[</span><span class=pl-kos>]</span><span class=pl-kos>;</span><span class=pl-k>for</span><span class=pl-kos>(</span><span class=pl-k>var</span> <span class=pl-s1>d</span><span class=pl-c1>=</span><span class=pl-c1>0</span><span class=pl-kos>;</span><span class=pl-s1>d</span><span class=pl-c1>&lt;</span><span class=pl-s1>c</span><span class=pl-kos>;</span><span class=pl-s1>d</span><span class=pl-c1>++</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_organiseData</span><span class=pl-kos>(</span><span class=pl-s1>b</span><span class=pl-kos>[</span><span class=pl-s1>d</span><span class=pl-kos>]</span><span class=pl-kos>,</span><span class=pl-c1>false</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_max</span><span class=pl-c1>=</span><span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>max</span><span class=pl-kos>;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_min</span><span class=pl-c1>=</span><span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>min</span><span class=pl-c1>||</span><span class=pl-c1>0</span><span class=pl-kos>;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_onExtremaChange</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_coordinator</span><span class=pl-kos>.</span><span class=pl-en>emit</span><span class=pl-kos>(</span><span class=pl-s>&quot;renderall&quot;</span><span class=pl-kos>,</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_getInternalData</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-en>removeData</span>:<span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-en>setDataMax</span>:<span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_max</span><span class=pl-c1>=</span><span class=pl-s1>a</span><span class=pl-kos>;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_onExtremaChange</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_coordinator</span><span class=pl-kos>.</span><span class=pl-en>emit</span><span class=pl-kos>(</span><span class=pl-s>&quot;renderall&quot;</span><span class=pl-kos>,</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_getInternalData</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-en>setDataMin</span>:<span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_min</span><span class=pl-c1>=</span><span class=pl-s1>a</span><span class=pl-kos>;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_onExtremaChange</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_coordinator</span><span class=pl-kos>.</span><span class=pl-en>emit</span><span class=pl-kos>(</span><span class=pl-s>&quot;renderall&quot;</span><span class=pl-kos>,</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_getInternalData</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-en>setCoordinator</span>:<span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_coordinator</span><span class=pl-c1>=</span><span class=pl-s1>a</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-en>_getInternalData</span>:<span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>return</span><span class=pl-kos>{</span><span class=pl-c1>max</span>:<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_max</span><span class=pl-kos>,</span><span class=pl-c1>min</span>:<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_min</span><span class=pl-kos>,</span><span class=pl-c1>data</span>:<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_data</span><span class=pl-kos>,</span><span class=pl-c1>radi</span>:<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_radi</span><span class=pl-kos>}</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-en>getData</span>:<span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_unOrganizeData</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>}</span><span class=pl-kos>;</span><span class=pl-k>return</span> <span class=pl-en>b</span><span class=pl-kos>}</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>c</span><span class=pl-c1>=</span><span class=pl-k>function</span> <span class=pl-en>i</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>var</span> <span class=pl-en>a</span><span class=pl-c1>=</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>var</span> <span class=pl-s1>b</span><span class=pl-c1>=</span><span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>gradient</span><span class=pl-c1>||</span><span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>defaultGradient</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>c</span><span class=pl-c1>=</span><span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>createElement</span><span class=pl-kos>(</span><span class=pl-s>&quot;canvas&quot;</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>d</span><span class=pl-c1>=</span><span class=pl-s1>c</span><span class=pl-kos>.</span><span class=pl-en>getContext</span><span class=pl-kos>(</span><span class=pl-s>&quot;2d&quot;</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-s1>c</span><span class=pl-kos>.</span><span class=pl-c1>width</span><span class=pl-c1>=</span><span class=pl-c1>256</span><span class=pl-kos>;</span><span class=pl-s1>c</span><span class=pl-kos>.</span><span class=pl-c1>height</span><span class=pl-c1>=</span><span class=pl-c1>1</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>e</span><span class=pl-c1>=</span><span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-en>createLinearGradient</span><span class=pl-kos>(</span><span class=pl-c1>0</span><span class=pl-kos>,</span><span class=pl-c1>0</span><span class=pl-kos>,</span><span class=pl-c1>256</span><span class=pl-kos>,</span><span class=pl-c1>1</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>for</span><span class=pl-kos>(</span><span class=pl-k>var</span> <span class=pl-s1>f</span> <span class=pl-k>in</span> <span class=pl-s1>b</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-en>addColorStop</span><span class=pl-kos>(</span><span class=pl-s1>f</span><span class=pl-kos>,</span><span class=pl-s1>b</span><span class=pl-kos>[</span><span class=pl-s1>f</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-c1>fillStyle</span><span class=pl-c1>=</span><span class=pl-s1>e</span><span class=pl-kos>;</span><span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-en>fillRect</span><span class=pl-kos>(</span><span class=pl-c1>0</span><span class=pl-kos>,</span><span class=pl-c1>0</span><span class=pl-kos>,</span><span class=pl-c1>256</span><span class=pl-kos>,</span><span class=pl-c1>1</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>return</span> <span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-en>getImageData</span><span class=pl-kos>(</span><span class=pl-c1>0</span><span class=pl-kos>,</span><span class=pl-c1>0</span><span class=pl-kos>,</span><span class=pl-c1>256</span><span class=pl-kos>,</span><span class=pl-c1>1</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>data</span><span class=pl-kos>}</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-en>b</span><span class=pl-c1>=</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>,</span><span class=pl-s1>b</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>var</span> <span class=pl-s1>c</span><span class=pl-c1>=</span><span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>createElement</span><span class=pl-kos>(</span><span class=pl-s>&quot;canvas&quot;</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>d</span><span class=pl-c1>=</span><span class=pl-s1>c</span><span class=pl-kos>.</span><span class=pl-en>getContext</span><span class=pl-kos>(</span><span class=pl-s>&quot;2d&quot;</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>e</span><span class=pl-c1>=</span><span class=pl-s1>a</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>f</span><span class=pl-c1>=</span><span class=pl-s1>a</span><span class=pl-kos>;</span><span class=pl-s1>c</span><span class=pl-kos>.</span><span class=pl-c1>width</span><span class=pl-c1>=</span><span class=pl-s1>c</span><span class=pl-kos>.</span><span class=pl-c1>height</span><span class=pl-c1>=</span><span class=pl-s1>a</span>*<span class=pl-c1>2</span><span class=pl-kos>;</span><span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-s1>b</span><span class=pl-c1>==</span><span class=pl-c1>1</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-en>beginPath</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-en>arc</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>,</span><span class=pl-s1>f</span><span class=pl-kos>,</span><span class=pl-s1>a</span><span class=pl-kos>,</span><span class=pl-c1>0</span><span class=pl-kos>,</span><span class=pl-c1>2</span>*<span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-c1>PI</span><span class=pl-kos>,</span><span class=pl-c1>false</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-c1>fillStyle</span><span class=pl-c1>=</span><span class=pl-s>&quot;rgba(0,0,0,1)&quot;</span><span class=pl-kos>;</span><span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-en>fill</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-k>else</span><span class=pl-kos>{</span><span class=pl-k>var</span> <span class=pl-s1>g</span><span class=pl-c1>=</span><span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-en>createRadialGradient</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>,</span><span class=pl-s1>f</span><span class=pl-kos>,</span><span class=pl-s1>a</span>*<span class=pl-s1>b</span><span class=pl-kos>,</span><span class=pl-s1>e</span><span class=pl-kos>,</span><span class=pl-s1>f</span><span class=pl-kos>,</span><span class=pl-s1>a</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-s1>g</span><span class=pl-kos>.</span><span class=pl-en>addColorStop</span><span class=pl-kos>(</span><span class=pl-c1>0</span><span class=pl-kos>,</span><span class=pl-s>&quot;rgba(0,0,0,1)&quot;</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-s1>g</span><span class=pl-kos>.</span><span class=pl-en>addColorStop</span><span class=pl-kos>(</span><span class=pl-c1>1</span><span class=pl-kos>,</span><span class=pl-s>&quot;rgba(0,0,0,0)&quot;</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-c1>fillStyle</span><span class=pl-c1>=</span><span class=pl-s1>g</span><span class=pl-kos>;</span><span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-en>fillRect</span><span class=pl-kos>(</span><span class=pl-c1>0</span><span class=pl-kos>,</span><span class=pl-c1>0</span><span class=pl-kos>,</span><span class=pl-c1>2</span>*<span class=pl-s1>a</span><span class=pl-kos>,</span><span class=pl-c1>2</span>*<span class=pl-s1>a</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-k>return</span> <span class=pl-s1>c</span><span class=pl-kos>}</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-en>c</span><span class=pl-c1>=</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>var</span> <span class=pl-s1>b</span><span class=pl-c1>=</span><span class=pl-kos>[</span><span class=pl-kos>]</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>c</span><span class=pl-c1>=</span><span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>min</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>d</span><span class=pl-c1>=</span><span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>max</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>e</span><span class=pl-c1>=</span><span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>radi</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>a</span><span class=pl-c1>=</span><span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>data</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>f</span><span class=pl-c1>=</span><span class=pl-v>Object</span><span class=pl-kos>.</span><span class=pl-en>keys</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>g</span><span class=pl-c1>=</span><span class=pl-s1>f</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>;</span><span class=pl-k>while</span><span class=pl-kos>(</span><span class=pl-s1>g</span><span class=pl-c1>--</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>var</span> <span class=pl-s1>h</span><span class=pl-c1>=</span><span class=pl-s1>f</span><span class=pl-kos>[</span><span class=pl-s1>g</span><span class=pl-kos>]</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>i</span><span class=pl-c1>=</span><span class=pl-v>Object</span><span class=pl-kos>.</span><span class=pl-en>keys</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>[</span><span class=pl-s1>h</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>j</span><span class=pl-c1>=</span><span class=pl-s1>i</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>;</span><span class=pl-k>while</span><span class=pl-kos>(</span><span class=pl-s1>j</span><span class=pl-c1>--</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>var</span> <span class=pl-s1>k</span><span class=pl-c1>=</span><span class=pl-s1>i</span><span class=pl-kos>[</span><span class=pl-s1>j</span><span class=pl-kos>]</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>l</span><span class=pl-c1>=</span><span class=pl-s1>a</span><span class=pl-kos>[</span><span class=pl-s1>h</span><span class=pl-kos>]</span><span class=pl-kos>[</span><span class=pl-s1>k</span><span class=pl-kos>]</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>m</span><span class=pl-c1>=</span><span class=pl-s1>e</span><span class=pl-kos>[</span><span class=pl-s1>h</span><span class=pl-kos>]</span><span class=pl-kos>[</span><span class=pl-s1>k</span><span class=pl-kos>]</span><span class=pl-kos>;</span><span class=pl-s1>b</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span><span class=pl-kos>{</span><span class=pl-c1>x</span>:<span class=pl-s1>h</span><span class=pl-kos>,</span><span class=pl-c1>y</span>:<span class=pl-s1>k</span><span class=pl-kos>,</span><span class=pl-c1>value</span>:<span class=pl-s1>l</span><span class=pl-kos>,</span><span class=pl-c1>radius</span>:<span class=pl-s1>m</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>}</span><span class=pl-k>return</span><span class=pl-kos>{</span><span class=pl-c1>min</span>:<span class=pl-s1>c</span><span class=pl-kos>,</span><span class=pl-c1>max</span>:<span class=pl-s1>d</span><span class=pl-kos>,</span><span class=pl-c1>data</span>:<span class=pl-s1>b</span><span class=pl-kos>}</span><span class=pl-kos>}</span><span class=pl-kos>;</span><span class=pl-k>function</span> <span class=pl-en>d</span><span class=pl-kos>(</span><span class=pl-s1>b</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>var</span> <span class=pl-s1>c</span><span class=pl-c1>=</span><span class=pl-s1>b</span><span class=pl-kos>.</span><span class=pl-c1>container</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>d</span><span class=pl-c1>=</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>shadowCanvas</span><span class=pl-c1>=</span><span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>createElement</span><span class=pl-kos>(</span><span class=pl-s>&quot;canvas&quot;</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>e</span><span class=pl-c1>=</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>canvas</span><span class=pl-c1>=</span><span class=pl-s1>b</span><span class=pl-kos>.</span><span class=pl-c1>canvas</span><span class=pl-c1>||</span><span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>createElement</span><span class=pl-kos>(</span><span class=pl-s>&quot;canvas&quot;</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>f</span><span class=pl-c1>=</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_renderBoundaries</span><span class=pl-c1>=</span><span class=pl-kos>[</span><span class=pl-c1>1e4</span><span class=pl-kos>,</span><span class=pl-c1>1e4</span><span class=pl-kos>,</span><span class=pl-c1>0</span><span class=pl-kos>,</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>g</span><span class=pl-c1>=</span><span class=pl-en>getComputedStyle</span><span class=pl-kos>(</span><span class=pl-s1>b</span><span class=pl-kos>.</span><span class=pl-c1>container</span><span class=pl-kos>)</span><span class=pl-c1>||</span><span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>;</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>className</span><span class=pl-c1>=</span><span class=pl-s>&quot;heatmap-canvas&quot;</span><span class=pl-kos>;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_width</span><span class=pl-c1>=</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>width</span><span class=pl-c1>=</span><span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-c1>width</span><span class=pl-c1>=</span><span class=pl-c1>+</span><span class=pl-s1>g</span><span class=pl-kos>.</span><span class=pl-c1>width</span><span class=pl-kos>.</span><span class=pl-en>replace</span><span class=pl-kos>(</span><span class=pl-pds>/px/</span><span class=pl-kos>,</span><span class=pl-s>&quot;&quot;</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_height</span><span class=pl-c1>=</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>height</span><span class=pl-c1>=</span><span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-c1>height</span><span class=pl-c1>=</span><span class=pl-c1>+</span><span class=pl-s1>g</span><span class=pl-kos>.</span><span class=pl-c1>height</span><span class=pl-kos>.</span><span class=pl-en>replace</span><span class=pl-kos>(</span><span class=pl-pds>/px/</span><span class=pl-kos>,</span><span class=pl-s>&quot;&quot;</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>shadowCtx</span><span class=pl-c1>=</span><span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-en>getContext</span><span class=pl-kos>(</span><span class=pl-s>&quot;2d&quot;</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>ctx</span><span class=pl-c1>=</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-en>getContext</span><span class=pl-kos>(</span><span class=pl-s>&quot;2d&quot;</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>cssText</span><span class=pl-c1>=</span><span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>cssText</span><span class=pl-c1>=</span><span class=pl-s>&quot;position:absolute;left:0;top:0;&quot;</span><span class=pl-kos>;</span><span class=pl-s1>c</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>position</span><span class=pl-c1>=</span><span class=pl-s>&quot;relative&quot;</span><span class=pl-kos>;</span><span class=pl-s1>c</span><span class=pl-kos>.</span><span class=pl-en>appendChild</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_palette</span><span class=pl-c1>=</span><span class=pl-en>a</span><span class=pl-kos>(</span><span class=pl-s1>b</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_templates</span><span class=pl-c1>=</span><span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_setStyles</span><span class=pl-kos>(</span><span class=pl-s1>b</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-c1>prototype</span><span class=pl-c1>=</span><span class=pl-kos>{</span><span class=pl-en>renderPartial</span>:<span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_drawAlpha</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_colorize</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-en>renderAll</span>:<span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_clear</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_drawAlpha</span><span class=pl-kos>(</span><span class=pl-en>c</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_colorize</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-en>_updateGradient</span>:<span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>b</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_palette</span><span class=pl-c1>=</span><span class=pl-en>a</span><span class=pl-kos>(</span><span class=pl-s1>b</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-en>updateConfig</span>:<span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>[</span><span class=pl-s>&quot;gradient&quot;</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_updateGradient</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_setStyles</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-en>setDimensions</span>:<span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>,</span><span class=pl-s1>b</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_width</span><span class=pl-c1>=</span><span class=pl-s1>a</span><span class=pl-kos>;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_height</span><span class=pl-c1>=</span><span class=pl-s1>b</span><span class=pl-kos>;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>canvas</span><span class=pl-kos>.</span><span class=pl-c1>width</span><span class=pl-c1>=</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>shadowCanvas</span><span class=pl-kos>.</span><span class=pl-c1>width</span><span class=pl-c1>=</span><span class=pl-s1>a</span><span class=pl-kos>;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>canvas</span><span class=pl-kos>.</span><span class=pl-c1>height</span><span class=pl-c1>=</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>shadowCanvas</span><span class=pl-kos>.</span><span class=pl-c1>height</span><span class=pl-c1>=</span><span class=pl-s1>b</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-en>_clear</span>:<span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>shadowCtx</span><span class=pl-kos>.</span><span class=pl-en>clearRect</span><span class=pl-kos>(</span><span class=pl-c1>0</span><span class=pl-kos>,</span><span class=pl-c1>0</span><span class=pl-kos>,</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_width</span><span class=pl-kos>,</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_height</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>ctx</span><span class=pl-kos>.</span><span class=pl-en>clearRect</span><span class=pl-kos>(</span><span class=pl-c1>0</span><span class=pl-kos>,</span><span class=pl-c1>0</span><span class=pl-kos>,</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_width</span><span class=pl-kos>,</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_height</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-en>_setStyles</span>:<span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_blur</span><span class=pl-c1>=</span><span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>blur</span><span class=pl-c1>==</span><span class=pl-c1>0</span>?<span class=pl-c1>0</span>:<span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>blur</span><span class=pl-c1>||</span><span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>defaultBlur</span><span class=pl-kos>;</span><span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>backgroundColor</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>canvas</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>backgroundColor</span><span class=pl-c1>=</span><span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>backgroundColor</span><span class=pl-kos>}</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_opacity</span><span class=pl-c1>=</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>opacity</span><span class=pl-c1>||</span><span class=pl-c1>0</span><span class=pl-kos>)</span>*<span class=pl-c1>255</span><span class=pl-kos>;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_maxOpacity</span><span class=pl-c1>=</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>maxOpacity</span><span class=pl-c1>||</span><span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>defaultMaxOpacity</span><span class=pl-kos>)</span>*<span class=pl-c1>255</span><span class=pl-kos>;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_minOpacity</span><span class=pl-c1>=</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>minOpacity</span><span class=pl-c1>||</span><span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>defaultMinOpacity</span><span class=pl-kos>)</span>*<span class=pl-c1>255</span><span class=pl-kos>;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_useGradientOpacity</span><span class=pl-c1>=</span>!!<span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>useGradientOpacity</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-en>_drawAlpha</span>:<span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>var</span> <span class=pl-s1>c</span><span class=pl-c1>=</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_min</span><span class=pl-c1>=</span><span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>min</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>d</span><span class=pl-c1>=</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_max</span><span class=pl-c1>=</span><span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>max</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>a</span><span class=pl-c1>=</span><span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>data</span><span class=pl-c1>||</span><span class=pl-kos>[</span><span class=pl-kos>]</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>e</span><span class=pl-c1>=</span><span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>f</span><span class=pl-c1>=</span><span class=pl-c1>1</span><span class=pl-c1>-</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_blur</span><span class=pl-kos>;</span><span class=pl-k>while</span><span class=pl-kos>(</span><span class=pl-s1>e</span><span class=pl-c1>--</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>var</span> <span class=pl-s1>g</span><span class=pl-c1>=</span><span class=pl-s1>a</span><span class=pl-kos>[</span><span class=pl-s1>e</span><span class=pl-kos>]</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>h</span><span class=pl-c1>=</span><span class=pl-s1>g</span><span class=pl-kos>.</span><span class=pl-c1>x</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>i</span><span class=pl-c1>=</span><span class=pl-s1>g</span><span class=pl-kos>.</span><span class=pl-c1>y</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>j</span><span class=pl-c1>=</span><span class=pl-s1>g</span><span class=pl-kos>.</span><span class=pl-c1>radius</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>k</span><span class=pl-c1>=</span><span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>min</span><span class=pl-kos>(</span><span class=pl-s1>g</span><span class=pl-kos>.</span><span class=pl-c1>value</span><span class=pl-kos>,</span><span class=pl-s1>d</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>l</span><span class=pl-c1>=</span><span class=pl-s1>h</span><span class=pl-c1>-</span><span class=pl-s1>j</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>m</span><span class=pl-c1>=</span><span class=pl-s1>i</span><span class=pl-c1>-</span><span class=pl-s1>j</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>n</span><span class=pl-c1>=</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>shadowCtx</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>o</span><span class=pl-kos>;</span><span class=pl-k>if</span><span class=pl-kos>(</span>!<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_templates</span><span class=pl-kos>[</span><span class=pl-s1>j</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_templates</span><span class=pl-kos>[</span><span class=pl-s1>j</span><span class=pl-kos>]</span><span class=pl-c1>=</span><span class=pl-s1>o</span><span class=pl-c1>=</span><span class=pl-en>b</span><span class=pl-kos>(</span><span class=pl-s1>j</span><span class=pl-kos>,</span><span class=pl-s1>f</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-k>else</span><span class=pl-kos>{</span><span class=pl-s1>o</span><span class=pl-c1>=</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_templates</span><span class=pl-kos>[</span><span class=pl-s1>j</span><span class=pl-kos>]</span><span class=pl-kos>}</span><span class=pl-s1>n</span><span class=pl-kos>.</span><span class=pl-c1>globalAlpha</span><span class=pl-c1>=</span><span class=pl-kos>(</span><span class=pl-s1>k</span><span class=pl-c1>-</span><span class=pl-s1>c</span><span class=pl-kos>)</span>/<span class=pl-kos>(</span><span class=pl-s1>d</span><span class=pl-c1>-</span><span class=pl-s1>c</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-s1>n</span><span class=pl-kos>.</span><span class=pl-en>drawImage</span><span class=pl-kos>(</span><span class=pl-s1>o</span><span class=pl-kos>,</span><span class=pl-s1>l</span><span class=pl-kos>,</span><span class=pl-s1>m</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-s1>l</span><span class=pl-c1>&lt;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_renderBoundaries</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_renderBoundaries</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-c1>=</span><span class=pl-s1>l</span><span class=pl-kos>}</span><span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-s1>m</span><span class=pl-c1>&lt;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_renderBoundaries</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_renderBoundaries</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-c1>=</span><span class=pl-s1>m</span><span class=pl-kos>}</span><span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-s1>l</span><span class=pl-c1>+</span><span class=pl-c1>2</span>*<span class=pl-s1>j</span><span class=pl-c1>&gt;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_renderBoundaries</span><span class=pl-kos>[</span><span class=pl-c1>2</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_renderBoundaries</span><span class=pl-kos>[</span><span class=pl-c1>2</span><span class=pl-kos>]</span><span class=pl-c1>=</span><span class=pl-s1>l</span><span class=pl-c1>+</span><span class=pl-c1>2</span>*<span class=pl-s1>j</span><span class=pl-kos>}</span><span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-s1>m</span><span class=pl-c1>+</span><span class=pl-c1>2</span>*<span class=pl-s1>j</span><span class=pl-c1>&gt;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_renderBoundaries</span><span class=pl-kos>[</span><span class=pl-c1>3</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_renderBoundaries</span><span class=pl-kos>[</span><span class=pl-c1>3</span><span class=pl-kos>]</span><span class=pl-c1>=</span><span class=pl-s1>m</span><span class=pl-c1>+</span><span class=pl-c1>2</span>*<span class=pl-s1>j</span><span class=pl-kos>}</span><span class=pl-kos>}</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-en>_colorize</span>:<span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>var</span> <span class=pl-s1>a</span><span class=pl-c1>=</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_renderBoundaries</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>b</span><span class=pl-c1>=</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_renderBoundaries</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>c</span><span class=pl-c1>=</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_renderBoundaries</span><span class=pl-kos>[</span><span class=pl-c1>2</span><span class=pl-kos>]</span><span class=pl-c1>-</span><span class=pl-s1>a</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>d</span><span class=pl-c1>=</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_renderBoundaries</span><span class=pl-kos>[</span><span class=pl-c1>3</span><span class=pl-kos>]</span><span class=pl-c1>-</span><span class=pl-s1>b</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>e</span><span class=pl-c1>=</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_width</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>f</span><span class=pl-c1>=</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_height</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>g</span><span class=pl-c1>=</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_opacity</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>h</span><span class=pl-c1>=</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_maxOpacity</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>i</span><span class=pl-c1>=</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_minOpacity</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>j</span><span class=pl-c1>=</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_useGradientOpacity</span><span class=pl-kos>;</span><span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-c1>&lt;</span><span class=pl-c1>0</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-s1>a</span><span class=pl-c1>=</span><span class=pl-c1>0</span><span class=pl-kos>}</span><span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-s1>b</span><span class=pl-c1>&lt;</span><span class=pl-c1>0</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-s1>b</span><span class=pl-c1>=</span><span class=pl-c1>0</span><span class=pl-kos>}</span><span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-c1>+</span><span class=pl-s1>c</span><span class=pl-c1>&gt;</span><span class=pl-s1>e</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-s1>c</span><span class=pl-c1>=</span><span class=pl-s1>e</span><span class=pl-c1>-</span><span class=pl-s1>a</span><span class=pl-kos>}</span><span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-s1>b</span><span class=pl-c1>+</span><span class=pl-s1>d</span><span class=pl-c1>&gt;</span><span class=pl-s1>f</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-s1>d</span><span class=pl-c1>=</span><span class=pl-s1>f</span><span class=pl-c1>-</span><span class=pl-s1>b</span><span class=pl-kos>}</span><span class=pl-k>var</span> <span class=pl-s1>k</span><span class=pl-c1>=</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>shadowCtx</span><span class=pl-kos>.</span><span class=pl-en>getImageData</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>,</span><span class=pl-s1>b</span><span class=pl-kos>,</span><span class=pl-s1>c</span><span class=pl-kos>,</span><span class=pl-s1>d</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>l</span><span class=pl-c1>=</span><span class=pl-s1>k</span><span class=pl-kos>.</span><span class=pl-c1>data</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>m</span><span class=pl-c1>=</span><span class=pl-s1>l</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>n</span><span class=pl-c1>=</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_palette</span><span class=pl-kos>;</span><span class=pl-k>for</span><span class=pl-kos>(</span><span class=pl-k>var</span> <span class=pl-s1>o</span><span class=pl-c1>=</span><span class=pl-c1>3</span><span class=pl-kos>;</span><span class=pl-s1>o</span><span class=pl-c1>&lt;</span><span class=pl-s1>m</span><span class=pl-kos>;</span><span class=pl-s1>o</span><span class=pl-c1>+=</span><span class=pl-c1>4</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>var</span> <span class=pl-s1>p</span><span class=pl-c1>=</span><span class=pl-s1>l</span><span class=pl-kos>[</span><span class=pl-s1>o</span><span class=pl-kos>]</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>q</span><span class=pl-c1>=</span><span class=pl-s1>p</span>*<span class=pl-c1>4</span><span class=pl-kos>;</span><span class=pl-k>if</span><span class=pl-kos>(</span>!<span class=pl-s1>q</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>continue</span><span class=pl-kos>}</span><span class=pl-k>var</span> <span class=pl-s1>r</span><span class=pl-kos>;</span><span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-s1>g</span><span class=pl-c1>&gt;</span><span class=pl-c1>0</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-s1>r</span><span class=pl-c1>=</span><span class=pl-s1>g</span><span class=pl-kos>}</span><span class=pl-k>else</span><span class=pl-kos>{</span><span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-s1>p</span><span class=pl-c1>&lt;</span><span class=pl-s1>h</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-s1>p</span><span class=pl-c1>&lt;</span><span class=pl-s1>i</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-s1>r</span><span class=pl-c1>=</span><span class=pl-s1>i</span><span class=pl-kos>}</span><span class=pl-k>else</span><span class=pl-kos>{</span><span class=pl-s1>r</span><span class=pl-c1>=</span><span class=pl-s1>p</span><span class=pl-kos>}</span><span class=pl-kos>}</span><span class=pl-k>else</span><span class=pl-kos>{</span><span class=pl-s1>r</span><span class=pl-c1>=</span><span class=pl-s1>h</span><span class=pl-kos>}</span><span class=pl-kos>}</span><span class=pl-s1>l</span><span class=pl-kos>[</span><span class=pl-s1>o</span><span class=pl-c1>-</span><span class=pl-c1>3</span><span class=pl-kos>]</span><span class=pl-c1>=</span><span class=pl-s1>n</span><span class=pl-kos>[</span><span class=pl-s1>q</span><span class=pl-kos>]</span><span class=pl-kos>;</span><span class=pl-s1>l</span><span class=pl-kos>[</span><span class=pl-s1>o</span><span class=pl-c1>-</span><span class=pl-c1>2</span><span class=pl-kos>]</span><span class=pl-c1>=</span><span class=pl-s1>n</span><span class=pl-kos>[</span><span class=pl-s1>q</span><span class=pl-c1>+</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>;</span><span class=pl-s1>l</span><span class=pl-kos>[</span><span class=pl-s1>o</span><span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-c1>=</span><span class=pl-s1>n</span><span class=pl-kos>[</span><span class=pl-s1>q</span><span class=pl-c1>+</span><span class=pl-c1>2</span><span class=pl-kos>]</span><span class=pl-kos>;</span><span class=pl-s1>l</span><span class=pl-kos>[</span><span class=pl-s1>o</span><span class=pl-kos>]</span><span class=pl-c1>=</span><span class=pl-s1>j</span>?<span class=pl-s1>n</span><span class=pl-kos>[</span><span class=pl-s1>q</span><span class=pl-c1>+</span><span class=pl-c1>3</span><span class=pl-kos>]</span>:<span class=pl-s1>r</span><span class=pl-kos>}</span><span class=pl-s1>k</span><span class=pl-kos>.</span><span class=pl-c1>data</span><span class=pl-c1>=</span><span class=pl-s1>l</span><span class=pl-kos>;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>ctx</span><span class=pl-kos>.</span><span class=pl-en>putImageData</span><span class=pl-kos>(</span><span class=pl-s1>k</span><span class=pl-kos>,</span><span class=pl-s1>a</span><span class=pl-kos>,</span><span class=pl-s1>b</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_renderBoundaries</span><span class=pl-c1>=</span><span class=pl-kos>[</span><span class=pl-c1>1e3</span><span class=pl-kos>,</span><span class=pl-c1>1e3</span><span class=pl-kos>,</span><span class=pl-c1>0</span><span class=pl-kos>,</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-en>getValueAt</span>:<span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>var</span> <span class=pl-s1>b</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>c</span><span class=pl-c1>=</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>shadowCtx</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>d</span><span class=pl-c1>=</span><span class=pl-s1>c</span><span class=pl-kos>.</span><span class=pl-en>getImageData</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>x</span><span class=pl-kos>,</span><span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>y</span><span class=pl-kos>,</span><span class=pl-c1>1</span><span class=pl-kos>,</span><span class=pl-c1>1</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>e</span><span class=pl-c1>=</span><span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-c1>data</span><span class=pl-kos>[</span><span class=pl-c1>3</span><span class=pl-kos>]</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>f</span><span class=pl-c1>=</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_max</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>g</span><span class=pl-c1>=</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_min</span><span class=pl-kos>;</span><span class=pl-s1>b</span><span class=pl-c1>=</span><span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>abs</span><span class=pl-kos>(</span><span class=pl-s1>f</span><span class=pl-c1>-</span><span class=pl-s1>g</span><span class=pl-kos>)</span>*<span class=pl-kos>(</span><span class=pl-s1>e</span>/<span class=pl-c1>255</span><span class=pl-kos>)</span><span class=pl-c1>&gt;&gt;</span><span class=pl-c1>0</span><span class=pl-kos>;</span><span class=pl-k>return</span> <span class=pl-s1>b</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-en>getDataURL</span>:<span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>canvas</span><span class=pl-kos>.</span><span class=pl-en>toDataURL</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>}</span><span class=pl-kos>;</span><span class=pl-k>return</span> <span class=pl-s1>d</span><span class=pl-kos>}</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>d</span><span class=pl-c1>=</span><span class=pl-k>function</span> <span class=pl-en>j</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>var</span> <span class=pl-s1>b</span><span class=pl-c1>=</span><span class=pl-c1>false</span><span class=pl-kos>;</span><span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>[</span><span class=pl-s>&quot;defaultRenderer&quot;</span><span class=pl-kos>]</span><span class=pl-c1>===</span><span class=pl-s>&quot;canvas2d&quot;</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-s1>b</span><span class=pl-c1>=</span><span class=pl-s1>c</span><span class=pl-kos>}</span><span class=pl-k>return</span> <span class=pl-s1>b</span><span class=pl-kos>}</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>e</span><span class=pl-c1>=</span><span class=pl-kos>{</span><span class=pl-en>merge</span>:<span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>var</span> <span class=pl-s1>a</span><span class=pl-c1>=</span><span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>b</span><span class=pl-c1>=</span><span class=pl-smi>arguments</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>;</span><span class=pl-k>for</span><span class=pl-kos>(</span><span class=pl-k>var</span> <span class=pl-s1>c</span><span class=pl-c1>=</span><span class=pl-c1>0</span><span class=pl-kos>;</span><span class=pl-s1>c</span><span class=pl-c1>&lt;</span><span class=pl-s1>b</span><span class=pl-kos>;</span><span class=pl-s1>c</span><span class=pl-c1>++</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>var</span> <span class=pl-s1>d</span><span class=pl-c1>=</span><span class=pl-smi>arguments</span><span class=pl-kos>[</span><span class=pl-s1>c</span><span class=pl-kos>]</span><span class=pl-kos>;</span><span class=pl-k>for</span><span class=pl-kos>(</span><span class=pl-k>var</span> <span class=pl-s1>e</span> <span class=pl-k>in</span> <span class=pl-s1>d</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-s1>a</span><span class=pl-kos>[</span><span class=pl-s1>e</span><span class=pl-kos>]</span><span class=pl-c1>=</span><span class=pl-s1>d</span><span class=pl-kos>[</span><span class=pl-s1>e</span><span class=pl-kos>]</span><span class=pl-kos>}</span><span class=pl-kos>}</span><span class=pl-k>return</span> <span class=pl-s1>a</span><span class=pl-kos>}</span><span class=pl-kos>}</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>f</span><span class=pl-c1>=</span><span class=pl-k>function</span> <span class=pl-en>k</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>var</span> <span class=pl-s1>c</span><span class=pl-c1>=</span><span class=pl-k>function</span> <span class=pl-en>h</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>function</span> <span class=pl-s1>a</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>cStore</span><span class=pl-c1>=</span><span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>}</span><span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>prototype</span><span class=pl-c1>=</span><span class=pl-kos>{</span><span class=pl-en>on</span>:<span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>,</span><span class=pl-s1>b</span><span class=pl-kos>,</span><span class=pl-s1>c</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>var</span> <span class=pl-s1>d</span><span class=pl-c1>=</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>cStore</span><span class=pl-kos>;</span><span class=pl-k>if</span><span class=pl-kos>(</span>!<span class=pl-s1>d</span><span class=pl-kos>[</span><span class=pl-s1>a</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-s1>d</span><span class=pl-kos>[</span><span class=pl-s1>a</span><span class=pl-kos>]</span><span class=pl-c1>=</span><span class=pl-kos>[</span><span class=pl-kos>]</span><span class=pl-kos>}</span><span class=pl-s1>d</span><span class=pl-kos>[</span><span class=pl-s1>a</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>return</span> <span class=pl-s1>b</span><span class=pl-kos>.</span><span class=pl-en>call</span><span class=pl-kos>(</span><span class=pl-s1>c</span><span class=pl-kos>,</span><span class=pl-s1>a</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-en>emit</span>:<span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>,</span><span class=pl-s1>b</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>var</span> <span class=pl-s1>c</span><span class=pl-c1>=</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>cStore</span><span class=pl-kos>;</span><span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-s1>c</span><span class=pl-kos>[</span><span class=pl-s1>a</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>var</span> <span class=pl-s1>d</span><span class=pl-c1>=</span><span class=pl-s1>c</span><span class=pl-kos>[</span><span class=pl-s1>a</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>;</span><span class=pl-k>for</span><span class=pl-kos>(</span><span class=pl-k>var</span> <span class=pl-s1>e</span><span class=pl-c1>=</span><span class=pl-c1>0</span><span class=pl-kos>;</span><span class=pl-s1>e</span><span class=pl-c1>&lt;</span><span class=pl-s1>d</span><span class=pl-kos>;</span><span class=pl-s1>e</span><span class=pl-c1>++</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>var</span> <span class=pl-s1>f</span><span class=pl-c1>=</span><span class=pl-s1>c</span><span class=pl-kos>[</span><span class=pl-s1>a</span><span class=pl-kos>]</span><span class=pl-kos>[</span><span class=pl-s1>e</span><span class=pl-kos>]</span><span class=pl-kos>;</span><span class=pl-s1>f</span><span class=pl-kos>(</span><span class=pl-s1>b</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>}</span><span class=pl-kos>}</span><span class=pl-kos>}</span><span class=pl-kos>;</span><span class=pl-k>return</span> <span class=pl-s1>a</span><span class=pl-kos>}</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-en>f</span><span class=pl-c1>=</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>var</span> <span class=pl-s1>b</span><span class=pl-c1>=</span><span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>_renderer</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>c</span><span class=pl-c1>=</span><span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>_coordinator</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>d</span><span class=pl-c1>=</span><span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>_store</span><span class=pl-kos>;</span><span class=pl-s1>c</span><span class=pl-kos>.</span><span class=pl-en>on</span><span class=pl-kos>(</span><span class=pl-s>&quot;renderpartial&quot;</span><span class=pl-kos>,</span><span class=pl-s1>b</span><span class=pl-kos>.</span><span class=pl-c1>renderPartial</span><span class=pl-kos>,</span><span class=pl-s1>b</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-s1>c</span><span class=pl-kos>.</span><span class=pl-en>on</span><span class=pl-kos>(</span><span class=pl-s>&quot;renderall&quot;</span><span class=pl-kos>,</span><span class=pl-s1>b</span><span class=pl-kos>.</span><span class=pl-c1>renderAll</span><span class=pl-kos>,</span><span class=pl-s1>b</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-s1>c</span><span class=pl-kos>.</span><span class=pl-en>on</span><span class=pl-kos>(</span><span class=pl-s>&quot;extremachange&quot;</span><span class=pl-kos>,</span><span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>b</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>_config</span><span class=pl-kos>.</span><span class=pl-c1>onExtremaChange</span><span class=pl-c1>&amp;&amp;</span><span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>_config</span><span class=pl-kos>.</span><span class=pl-en>onExtremaChange</span><span class=pl-kos>(</span><span class=pl-kos>{</span><span class=pl-c1>min</span>:<span class=pl-s1>b</span><span class=pl-kos>.</span><span class=pl-c1>min</span><span class=pl-kos>,</span><span class=pl-c1>max</span>:<span class=pl-s1>b</span><span class=pl-kos>.</span><span class=pl-c1>max</span><span class=pl-kos>,</span><span class=pl-c1>gradient</span>:<span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>_config</span><span class=pl-kos>[</span><span class=pl-s>&quot;gradient&quot;</span><span class=pl-kos>]</span><span class=pl-c1>||</span><span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>_config</span><span class=pl-kos>[</span><span class=pl-s>&quot;defaultGradient&quot;</span><span class=pl-kos>]</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-s1>d</span><span class=pl-kos>.</span><span class=pl-en>setCoordinator</span><span class=pl-kos>(</span><span class=pl-s1>c</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>;</span><span class=pl-k>function</span> <span class=pl-en>g</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>var</span> <span class=pl-s1>g</span><span class=pl-c1>=</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_config</span><span class=pl-c1>=</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-en>merge</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>,</span><span class=pl-smi>arguments</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-c1>||</span><span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_coordinator</span><span class=pl-c1>=</span><span class=pl-k>new</span> <span class=pl-s1>c</span><span class=pl-kos>;</span><span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-s1>g</span><span class=pl-kos>[</span><span class=pl-s>&quot;plugin&quot;</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>var</span> <span class=pl-s1>h</span><span class=pl-c1>=</span><span class=pl-s1>g</span><span class=pl-kos>[</span><span class=pl-s>&quot;plugin&quot;</span><span class=pl-kos>]</span><span class=pl-kos>;</span><span class=pl-k>if</span><span class=pl-kos>(</span>!<span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>plugins</span><span class=pl-kos>[</span><span class=pl-s1>h</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>throw</span> <span class=pl-k>new</span> <span class=pl-v>Error</span><span class=pl-kos>(</span><span class=pl-s>&quot;Plugin &#39;&quot;</span><span class=pl-c1>+</span><span class=pl-s1>h</span><span class=pl-c1>+</span><span class=pl-s>&quot;&#39; not found. Maybe it was not registered.&quot;</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-k>else</span><span class=pl-kos>{</span><span class=pl-k>var</span> <span class=pl-s1>i</span><span class=pl-c1>=</span><span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>plugins</span><span class=pl-kos>[</span><span class=pl-s1>h</span><span class=pl-kos>]</span><span class=pl-kos>;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_renderer</span><span class=pl-c1>=</span><span class=pl-k>new</span> <span class=pl-s1>i</span><span class=pl-kos>.</span><span class=pl-c1>renderer</span><span class=pl-kos>(</span><span class=pl-s1>g</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_store</span><span class=pl-c1>=</span><span class=pl-k>new</span> <span class=pl-s1>i</span><span class=pl-kos>.</span><span class=pl-c1>store</span><span class=pl-kos>(</span><span class=pl-s1>g</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>}</span><span class=pl-k>else</span><span class=pl-kos>{</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_renderer</span><span class=pl-c1>=</span><span class=pl-k>new</span> <span class=pl-s1>d</span><span class=pl-kos>(</span><span class=pl-s1>g</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_store</span><span class=pl-c1>=</span><span class=pl-k>new</span> <span class=pl-s1>b</span><span class=pl-kos>(</span><span class=pl-s1>g</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-en>f</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-s1>g</span><span class=pl-kos>.</span><span class=pl-c1>prototype</span><span class=pl-c1>=</span><span class=pl-kos>{</span><span class=pl-en>addData</span>:<span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_store</span><span class=pl-kos>.</span><span class=pl-c1>addData</span><span class=pl-kos>.</span><span class=pl-en>apply</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_store</span><span class=pl-kos>,</span><span class=pl-smi>arguments</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-en>removeData</span>:<span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_store</span><span class=pl-kos>.</span><span class=pl-c1>removeData</span><span class=pl-c1>&amp;&amp;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_store</span><span class=pl-kos>.</span><span class=pl-c1>removeData</span><span class=pl-kos>.</span><span class=pl-en>apply</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_store</span><span class=pl-kos>,</span><span class=pl-smi>arguments</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-en>setData</span>:<span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_store</span><span class=pl-kos>.</span><span class=pl-c1>setData</span><span class=pl-kos>.</span><span class=pl-en>apply</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_store</span><span class=pl-kos>,</span><span class=pl-smi>arguments</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-en>setDataMax</span>:<span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_store</span><span class=pl-kos>.</span><span class=pl-c1>setDataMax</span><span class=pl-kos>.</span><span class=pl-en>apply</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_store</span><span class=pl-kos>,</span><span class=pl-smi>arguments</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-en>setDataMin</span>:<span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_store</span><span class=pl-kos>.</span><span class=pl-c1>setDataMin</span><span class=pl-kos>.</span><span class=pl-en>apply</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_store</span><span class=pl-kos>,</span><span class=pl-smi>arguments</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-en>configure</span>:<span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_config</span><span class=pl-c1>=</span><span class=pl-s1>e</span><span class=pl-kos>.</span><span class=pl-en>merge</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_config</span><span class=pl-kos>,</span><span class=pl-s1>a</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_renderer</span><span class=pl-kos>.</span><span class=pl-en>updateConfig</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_config</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_coordinator</span><span class=pl-kos>.</span><span class=pl-en>emit</span><span class=pl-kos>(</span><span class=pl-s>&quot;renderall&quot;</span><span class=pl-kos>,</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_store</span><span class=pl-kos>.</span><span class=pl-en>_getInternalData</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-en>repaint</span>:<span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_coordinator</span><span class=pl-kos>.</span><span class=pl-en>emit</span><span class=pl-kos>(</span><span class=pl-s>&quot;renderall&quot;</span><span class=pl-kos>,</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_store</span><span class=pl-kos>.</span><span class=pl-en>_getInternalData</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-en>getData</span>:<span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_store</span><span class=pl-kos>.</span><span class=pl-en>getData</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-en>getDataURL</span>:<span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_renderer</span><span class=pl-kos>.</span><span class=pl-en>getDataURL</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-en>getValueAt</span>:<span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_store</span><span class=pl-kos>.</span><span class=pl-c1>getValueAt</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_store</span><span class=pl-kos>.</span><span class=pl-en>getValueAt</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-k>else</span> <span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_renderer</span><span class=pl-kos>.</span><span class=pl-c1>getValueAt</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>_renderer</span><span class=pl-kos>.</span><span class=pl-en>getValueAt</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-k>else</span><span class=pl-kos>{</span><span class=pl-k>return</span> null<span class=pl-kos>}</span><span class=pl-kos>}</span><span class=pl-kos>}</span><span class=pl-kos>;</span><span class=pl-k>return</span> <span class=pl-s1>g</span><span class=pl-kos>}</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span><span class=pl-k>var</span> <span class=pl-s1>g</span><span class=pl-c1>=</span><span class=pl-kos>{</span><span class=pl-en>create</span>:<span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-k>return</span> <span class=pl-k>new</span> <span class=pl-s1>f</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>)</span><span class=pl-kos>}</span><span class=pl-kos>,</span><span class=pl-en>register</span>:<span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>b</span><span class=pl-kos>,</span><span class=pl-s1>c</span><span class=pl-kos>)</span><span class=pl-kos>{</span><span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>plugins</span><span class=pl-kos>[</span><span class=pl-s1>b</span><span class=pl-kos>]</span><span class=pl-c1>=</span><span class=pl-s1>c</span><span class=pl-kos>}</span><span class=pl-kos>}</span><span class=pl-kos>;</span><span class=pl-k>return</span> <span class=pl-s1>g</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
</table>

  <details class="details-reset details-overlay BlobToolbar position-absolute js-file-line-actions dropdown d-none" aria-hidden="true">
    <summary class="btn-octicon ml-0 px-2 p-0 bg-white border border-gray-dark rounded-1" aria-label="Inline file action toolbar">
      <svg class="octicon octicon-kebab-horizontal" viewBox="0 0 13 16" version="1.1" width="13" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM13 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/></svg>
    </summary>
    <details-menu>
      <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2" style="width:185px">
        <li>
          <clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-lines" style="cursor:pointer;">
            Copy lines
          </clipboard-copy>
        </li>
        <li>
          <clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-permalink" style="cursor:pointer;">
            Copy permalink
          </clipboard-copy>
        </li>
        <li><a class="dropdown-item js-update-url-with-hash" id="js-view-git-blame" role="menuitem" href="/danwild/CesiumHeatmap/blame/a774077a58797ddb6c2081921ac3bfe629d3ef59/HeatmapImageryProvider.js">View git blame</a></li>
      </ul>
    </details-menu>
  </details>

  </div>

    </div>

  

  <details class="details-reset details-overlay details-overlay-dark">
    <summary data-hotkey="l" aria-label="Jump to line"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast linejump" aria-label="Jump to line">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form Box-body d-flex" action="" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
        <input class="form-control flex-auto mr-3 linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
        <button type="submit" class="btn" data-close-dialog>Go</button>
</form>    </details-dialog>
  </details>



  </div>
</div>

    </main>
  </div>
  

  </div>

        
<div class="footer container-lg width-full p-responsive" role="contentinfo">
  <div class="position-relative d-flex flex-row-reverse flex-lg-row flex-wrap flex-lg-nowrap flex-justify-center flex-lg-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
      <li class="mr-3 mr-lg-0">&copy; 2020 GitHub, Inc.</li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to security, text:security" href="https://github.com/security">Security</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://githubstatus.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>
    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon d-none d-lg-block mx-lg-4" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.com/pricing" data-ga-click="Footer, go to Pricing, text:Pricing">Pricing</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>

    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    <script crossorigin="anonymous" async="async" integrity="sha512-0ME9ftiuUHsYYdeBdLtPHbeL4j0UjTAy9YxHpX0AaZLPPex/JTS5mmHozk8Bnp2czMkd3FmK8DfVID7zxmD5OA==" type="application/javascript" id="js-conditional-compat" data-src="https://github.githubassets.com/assets/compat-bootstrap-d0c13d7e.js"></script>
    <script crossorigin="anonymous" integrity="sha512-52SEoSSU9xJzVkVh4EhSAqx2ahFi63p4TLyodiqlbaq3mS6EJIiwk9e95rGZciPCofFDIAcvCOvknoIHyanhIA==" type="application/javascript" src="https://github.githubassets.com/assets/frameworks-e76484a1.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-5CoIYUCe+5DCHOCo4mlEo1RjS4O+PmsQ5Y45h8dpd4yacX3H2O/BaLuX8njAbUI8pTD4gLFC1VMYjTVdEtH6pw==" type="application/javascript" src="https://github.githubassets.com/assets/github-bootstrap-e42a0861.js"></script>
    
    
    
  <div class="js-stale-session-flash flash flash-warn flash-banner" hidden
    >
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <span class="js-stale-session-flash-signed-in" hidden>You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="js-stale-session-flash-signed-out" hidden>You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark hx_rsm" open>
    <summary role="button" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast hx_rsm-dialog hx_rsm-modal">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>

  <div aria-live="polite" class="js-global-screen-reader-notice sr-only"></div>

  </body>
</html>

