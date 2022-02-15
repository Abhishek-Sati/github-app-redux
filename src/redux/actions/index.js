import { ALERT, FOLLOWERS, LOADER, REPOS, SEARCHED_USERS, UPDATE_REPOS } from "./types"
import { fetchFollowers, fetchRepos, fetchUsers } from "../effects"

export const requestUpdateUserName = (value) => (dispatch) => {
    dispatch({ type: SEARCHED_USERS, payload: { value } })
}

export const requestAlerts = ({ show, type, description }) => (dispatch) => {
    dispatch({
        type: ALERT,
        payload: { show, type, description }
    })
}

export const requestUpdateRepos = (login, repos_url, history) => async (dispatch) => {
    try {
        dispatch({ type: LOADER, payload: { value: true } })
        const response = await fetchRepos(repos_url)
        dispatch({
            type: UPDATE_REPOS,
            payload: {
                repos: response,
                followers: [],
                searched_user: login,
            },
        })
        history.push('/')
    } catch (e) {
        console.log('update repos request failed')
    } finally {
        dispatch({ type: LOADER, payload: { value: false } })
    }
}

export const requestSearchUsers = (searchedUser) => async (dispatch) => {
    try {
        dispatch({ type: LOADER, payload: { value: true } })
        const response = await fetchUsers(searchedUser)
        dispatch({ type: REPOS, payload: { value: response } })
    } catch (err) {
        console.log('search user request failed')
        dispatch({ type: REPOS, payload: { value: [] } })
        dispatch({ type: LOADER, payload: { value: false } })
        dispatch({
            type: ALERT,
            payload: {
                show: true,
                type: 'error',
                description: "No user present with this name",
            },
        })
    }
}

export const requestSearchFollowers = (history, route, followers_url) => async (dispatch) => {
    try {
        dispatch({ type: LOADER, payload: { value: true } })
        const response = await fetchFollowers(followers_url)
        dispatch({ type: FOLLOWERS, payload: { value: response } })
        history.push(route)
    } catch (err) {
        console.log('search followers request failed')
        dispatch({ type: LOADER, payload: { value: false } })
        dispatch({
            type: ALERT,
            payload: {
                show: true,
                type: "error",
                description: "Something went wrong",
            },
        })
    }
}

