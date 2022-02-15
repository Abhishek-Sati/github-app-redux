import { ALERT, FOLLOWERS, LOADER, REPOS, SEARCHED_USERS, UPDATE_REPOS, USERS } from "../actions/types"

const initialState = {
    users: [],
    repos: [],
    followers: [],
    searched_user: "",
    alert: {
        show: false,
        type: "",
        description: "",
    },
    loader: false,
}

export const rootReducer = (state = initialState, action) => {
    const { payload = {}, type } = action || {}
    switch (type) {
        case USERS:
            return { ...state, users: payload.users }
        case SEARCHED_USERS:
            return { ...state, searched_user: payload.value }
        case ALERT:
            return {
                ...state,
                alert: {
                    show: payload.show,
                    type: payload.type ?? '',
                    description: payload.description ?? ''
                }
            }
        case LOADER:
            return { ...state, loader: payload.value }
        case FOLLOWERS:
            return { ...state, followers: payload.value, loader: false }
        case REPOS:
            return { ...state, repos: payload.value, loader: false }
        case UPDATE_REPOS:
            return {
                ...state,
                repos: payload.repos,
                followers: payload.followers,
                searched_user: payload.searched_user,
                loader: false
            }
        default:
            return state
    }
}
