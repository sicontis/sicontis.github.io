let Home = Vue.component('home', {
    template: '#home'
});

let Book1 = Vue.component('book1', {
    template: '#book1'
});

let Book2 = Vue.component('book2', {
    template: '#book2'
});

let Book3 = Vue.component('book3', {
    template: '#book3'
});

let routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/book1', name: 'book1', component: Book1 },
  { path: '/book2', name: 'book2', component: Book2 },
  { path: '/book3', name: 'book3', component: Book3 }
];

let router = new VueRouter({ routes });

new Vue({
    router,
    components: [ Book1, Book2, Book3 ],
    data: {
        title: 'ass',
    },
    methods: {
        intro() {
            TweenLite.from('#swlogo', 2, {top:-30, autoAlpha:0});
            TweenLite.from('#title', 2, {scale: 0.7, autoAlpha:0});
            TweenLite.from('#book1', 1, {bottom: -50, autoAlpha:0, delay:2});
            TweenLite.from('#book2', 1, {bottom: -50, autoAlpha:0, delay:2.5});
            TweenLite.from('#book3', 1, {bottom: -50, autoAlpha:0, delay:3});
        },

        
    },

    mounted() {
        this.intro();
    }
}).$mount('#app');