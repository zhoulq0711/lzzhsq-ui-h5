import router from './router/router'
import store from './store/store'

router.beforeEach((to, from, next) => {

    // console.log(from)
    // console.log(to)
    // console.log(next)

    store.commit('gettitle', to.meta.title);
    store.commit('getlevel', to.meta.level);
    document.title = to.meta.title
    next()

})