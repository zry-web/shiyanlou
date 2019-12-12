import Search from '../../../api/search/search'

const state = {

    search_result: []
}

const mutations = {
    change_search_result(state, searchResult) {
        state.search_result = searchResult
    },

}

const actions = {
    async change_search(context, args) {
        let result = await Search.get_search()
        const arr1 = [];
        const arr2 = [];
        for (let [index, course] of result.data.course.entries()) {
            if (course.title.indexOf(args) > -1 || course.tag.indexOf(args) > -1) {
                arr1.push(course)
            }
            // if ((index + 1) % 15 === 0) {
            //     arr2.push(arr1)
            //     arr1 = []
            // }
        }
        result.data = arr1
        console.log(arr1)
        context.commit('change_search_result', result.data)
    },

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}

