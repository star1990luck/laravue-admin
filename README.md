<p align="center">
  <img width="320" src="http://doc.laravue.cipherpols.com/assets/laravue-logo-line.png">
</p>
<p align="center">
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/laravel-5.8-red.svg" alt="vue">
  </a>
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-2.6.8-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/ElemeFE/element">
    <img src="https://img.shields.io/badge/element--ui-2.6.1-brightgreen.svg" alt="element-ui">
  </a>
  <a href="https://github.com/tuandm/laravue/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg" alt="license">
  </a>
</p>

# Laravue

## Introduction
[Laravue](https://laravue.dev) is a beautiful dashboard based on [Laravel](https://laravel.com/), [Vue.js](https://github.com/vuejs/vue) and uses the UI Toolkit [Element](https://github.com/ElemeFE/element).

This Laravel-Vue admin is inspired by the awesome [vue-element-admin](http://panjiachen.github.io/vue-element-admin) (many thanks to [PanJiaChen](https://github.com/PanJiaChen) for the great works) and the applying of latest development stack of Laravel/Vue such as i18n, Envoy, vue-router, et cetera.

<p align="center">
  <img width="900" src="http://doc.laravue.cipherpols.com/assets/screenshot.png">
</p>

## Preparation
** [Node](http://nodejs.org/)

** [Git](https://git-scm.com/)

** [Laravel](https://laravel.com/)

The project is built on top of [Laravel](https://laravel.com), [vue](https://cn.vuejs.org/index.html), [vuex](https://vuex.vuejs.org/zh-cn/), [vue-router](https://router.vuejs.org/zh-cn/), [axios](https://github.com/axios/axios) and [element-ui](https://github.com/ElemeFE/element). Since this framework is positioned as an enterprise management solution, it is recommended to use it to start a project.

**Integration with existing Laravel code**
For integration with existing Laravue project, please refer to [Laravue Core](https://github.com/tuandm/laravue-core) for more detail.

## API
Laravel should help us serve the API. In this project, you need to run database migration and data seeders to generate sample data for authentication/authorization. Other APIs are faked for testing purpose.

## Getting started
This project is built on top of fresh latest version Laravel (5.8). You should check the installation guide from official Laravel document [here](https://laravel.com/docs/5.8).


```bash
# Clone the project and run composer
composer create-project tuandm/laravue
cd laravue

# Migration and DB seeder (after changing your DB settings in .env)
php artisan migrate --seed

# Generate JWT secret key
php artisan jwt:secret

# install dependency
npm install

# develop
npm run dev # or npm run watch

# Build on production
npm run production
```

## Deployment and/or CI/CD
This project uses [Envoy](https://laravel.com/docs/5.8/envoy) for deployment, and [GitLab CI/CD](https://about.gitlab.com/product/continuous-integration/). Please check `Envoy.blade.php` and `.gitlab-ci.yml` for more detail.
