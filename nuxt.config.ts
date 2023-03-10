// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['/assets/css/style.css'],
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
    head: {
      title: '席替え革命',
      meta: [
        {
          name: 'description',
          content:
            'くじ引きでの席替えはもうやめませんか？席替え革命を使うと簡単にリッチな画面で席替えをすることが出来ます。',
        },
      ],
      link: [
        {
          rel: 'icon',
          href: '/favicon.png',
        },
      ],
    },
  },
});
