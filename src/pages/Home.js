import React, { useEffect, useRef } from "react"
import { useHistory } from "react-router-dom"
import Alert from "components/common/Alert"
import RepoCard from "components/home/RepoCard"
import { connect } from "react-redux"
import { requestSearchFollowers, requestSearchUsers, requestUpdateUserName } from "../redux/actions"

function Home(props) {
    const inputRef = useRef()
    const history = useHistory()
    const { searched_user, repos = [], loader } = props
    const { id: followersId, followers_url: followersURL } = repos?.[0]?.owner ?? {}

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    const handleChangeInput = (e) => {
        props.requestUpdateUserName(e.currentTarget.value)
    }

    const handleSubmit = async () => {
        props.requestSearchUsers(searched_user)
    }

    const handleShowFollowers = async () => {
        props.requestSearchFollowers(history, `/${followersId}/followers`, followersURL)
    }

    return (
        <section className='home_container'>
            <h1 className='home_container__heading'>GitHub App</h1>
            <section className='home_container__search_container'>
                <input
                    id='input'
                    type='text'
                    ref={inputRef}
                    value={searched_user}
                    placeholder='Search..'
                    name='search'
                    onChange={handleChangeInput}
                />
                <button type='submit' className='primary-btn' onClick={() => handleSubmit()}>
                    Submit
                </button>
            </section>
            <Alert/>
            {followersURL ? (
                <button className='secondary-btn home_container__follower_btn' onClick={handleShowFollowers}>
                    Show Followers
                </button>
            ) : null}
            <section className='home_container__repos_container'>
                {loader ? (
                    <div className='spinner absolute-l50-t50'/>
                ) : repos.length ? (
                    repos.map((item, index) => <RepoCard key={index} data={item}/>)
                ) : (
                    <h3 className='absolute-l40-t50 not-found-h3'> No Repositories To Show</h3>
                )}
            </section>
        </section>
    )
}

const mapStateToProps = (state) => ({
    searched_user: state.searched_user,
    repos: state.repos,
    loader: state.loader,
    followers: state.followers
})

const mapDispatchToProps = {
    requestSearchUsers,
    requestSearchFollowers,
    requestUpdateUserName
}

const connector = connect(mapStateToProps, mapDispatchToProps)
export default connector(Home)
