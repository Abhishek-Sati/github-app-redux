import axios from "axios"
import { endPoints } from "../../utils/api"

export const fetchRepos = async (repos_url) => {
    const { data } = await axios.get(repos_url)
    return data
}

export const fetchUsers = async (searchedUser) => {
    const { data } = await axios.get(`${endPoints.user.base}/${searchedUser}/repos`)
    return data
}

export const fetchFollowers = async (followers_url) => {
    const { data } = await axios.get(followers_url)
    return data
}
