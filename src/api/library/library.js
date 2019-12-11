import {
    post,
    get
} from '../../utils/request';
export function getLibraryList() {
    return get('/api/Library');
}