import { post, get } from "../../utils/request";
import axios from "axios";



export function lists() {
    return get("/api/list")
}