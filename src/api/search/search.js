import { post, get } from "../../utils/request";
import axios from "axios";
export default {
    get_search() {
        return get("/api/course?per=486")
    }
}