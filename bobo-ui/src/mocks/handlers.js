import { ALL_BOOKS_QUERY } from './api/queries';
import { CREATE_BOOK_MUTATION } from './api/mutations';

const queries = [ALL_BOOKS_QUERY];
const mutations = [CREATE_BOOK_MUTATION];
export const handlers = [...queries, ...mutations];
