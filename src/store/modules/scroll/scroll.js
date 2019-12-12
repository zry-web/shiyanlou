const state = {
    show_scroll_bar: false,
    cool: false,
    current_scrolled_value: 0
}

const mutations = {
    update_scroll_value(state) {
        let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
        if (state.current_scrolled_value < scrollTop) {
            state.show_scroll_bar = true
        } else {
            state.show_scroll_bar = false
        }

        state.current_scrolled_value = scrollTop
    },
    vip_show(state, payload) {
        state.cool = payload
    }
}

const actions = {
    update_scroll_value(context) {
        context.commit('update_scroll_value')
    },
    vip_s(context, payload) {
        context.commit('vip_show', payload)
    },
    vip_ss(context, payload) {
        context.commit('vip_show', payload)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
