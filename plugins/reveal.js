export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    getSSRProps(binding, vnode) {
      return {}
    },
    mounted(el, binding) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('active');
            if (binding.modifiers.once) {
              observer.unobserve(el);
            }
          } else {
            if (!binding.modifiers.once) {
              el.classList.remove('active');
            }
          }
        });
      }, {
        threshold: 0,
        rootMargin: '0px 0px 0px 0px'
      });

      el.classList.add('reveal');
      observer.observe(el);
      el._revealObserver = observer;
    },
    unmounted(el) {
      if (el._revealObserver) {
        el._revealObserver.disconnect();
      }
    }
  });
});
