import { post, get } from "../../utils/request";
import axios from "axios";

export default {
    get_content() {
        return get("/api/loop")
    },
    get_content_2() {
        return get("/api/course")
    },
    get_content_3(id) {
        return get("/api/course?" + id)
    },
    get_content_5(word) {
        return get("/api/course" + word)
    },
    // get_content_5() {
    //     return get("/api/course/bootcamp")
    // }

    get_content_6() {
        return get("/api/path")
    }
    // get_content_7() {
    //     return get("/api/paths")
    // },
    // get_content_8() {
    //     return get("/api/paths")
    // }

}

export function lists() {
    return get("/api/list")
}
export function get_content_3(id) {
    return get("/api/course?" + id)
}
// export function get_content() {
//     return get("/api/course")
// }


