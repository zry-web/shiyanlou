
import Home from '../../../api/home/home_header'

const state = {

    content: {
        'course1': [{
            'url': '',
            'o_time': '',
            'img': '',
            'tit': ''
        }],
        'course2': [{
            'url': '',
            'studentsCount': '',
            'coverImg': '',
            'title': '',
            'courseType': '',
            'descriptions': ''

        }],
        'course3': [{}, {}, {}, {}],
        'course4': [{

        }],
        'course5': [{
            'url': '',
            'studentsCount': '',
            'coverImg': '',
            'title': '',
            'courseType': '',
            'descriptions': ''

        }],
        'course6': [{
            'pathCourseImg': '',
            'pathCourseTit': '',
            'pathCourseCount': ''
        }],
        'course7': [{

        }],
        'course8': [{

        }],

    }
}
const mutations = {
    content_one(state, payload) {
        // {homeIndex: 'index_categories',
        //  data: data}

        let homeIndex = payload.home_index
        let homeContent = payload.data
        let cons = homeContent[0].course
        state.content[homeIndex] = cons

    },
    content_two(state, payload) {
        // {homeIndex: 'index_categories',
        //  data: data}

        let homeIndex = payload.home_index
        let homeContent = payload.data
        state.content[homeIndex] = homeContent

    },
    content_three(state, payload) {
        // {homeIndex: 'index_categories',
        //  data: data}

        let homeIndex = payload.home_index
        let homeContent = payload.data
        state.content[homeIndex] = homeContent

    },
    content_four(state, payload) {
        // {homeIndex: 'index_categories',
        //  data: data}

        let homeIndex = payload.home_index
        let homeContent = payload.data
        state.content[homeIndex] = homeContent

    },
    content_five(state, payload) {
        // {homeIndex: 'index_categories',
        //  data: data}

        let homeIndex = payload.home_index
        let homeContent = payload.data
        state.content[homeIndex] = homeContent

    },
    content_six(state, payload) {
        // {homeIndex: 'index_categories',
        //  data: data}

        let homeIndex = payload.home_index
        let homeContent = payload.data
        let cons = homeContent[0].pathCourse
        state.content[homeIndex] = cons

    },
    content_seven(state, payload) {
        // {homeIndex: 'index_categories',
        //  data: data}

        let homeIndex = payload.home_index
        let homeContent = payload.data
        state.content[homeIndex] = homeContent

    },
    content_eight(state, payload) {
        // {homeIndex: 'index_categories',
        //  data: data}

        let homeIndex = payload.home_index
        let homeContent = payload.data
        state.content[homeIndex] = homeContent

    }

}
const actions = {
    // getdata(context, payload) {
    //     context.commit('content_one', payload)

    // }
    get_data(context) {
        Home.get_content().then((res) => {

            context.commit("content_one", { 'home_index': 'course1', "data": res.data.data })//payload
        })
        Home.get_content_2().then((res) => {

            context.commit("content_two", { 'home_index': 'course2', "data": res.data.course })
        })
        Home.get_content_3('?category = 后端开发').then((res) => {

            let newData = []
            let tempList = []
            for (let [index, course] of res.data.course.entries()) {

                tempList.push(course)
                if ((index + 1) % 4 === 0) {
                    newData.push(tempList)
                    tempList = []
                }
            }
            res.data.course = newData

            context.commit("content_three", { 'home_index': 'course3', "data": res.data })
        })
        // Home.get_content_4().then((res) => {

        //     context.commit("content_four", { 'home_index': 'course4', "data": res.data.course })
        // })
        Home.get_content_5('?category=Linux运维').then((res) => {

            context.commit("content_five", { 'home_index': 'course5', "data": res.data.course })
        })
        Home.get_content_6().then((res) => {

            context.commit("content_six", { 'home_index': 'course6', "data": res.data.data })
        })
        // Home.get_content_7().then((res) => {

        //     context.commit("content_seven", { 'home_index': 'course7', "data": res.data.course })
        // })
        // Home.get_content_8().then((res) => {

        //     context.commit("content_eight", { 'home_index': 'course8', "data": res.data.course })
        // })

    }


}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
