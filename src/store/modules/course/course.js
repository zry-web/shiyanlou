export default {
    namespaced: true,
    state: {
        course: {},
        tagName: '全部',
        dir: '全部',
        page: '1'
    },
    mutations: {
        changeCourse(state, payload) {
            state.course = payload.course;
        },
        changeTagName(state, payload) {
            state.tagName = payload.tagName;
        },
        changeDir(state, payload) {
            state.dir = payload.dir;
        },
        changePage(state, payload) {
            state.page = payload.page;
        }
    }
}