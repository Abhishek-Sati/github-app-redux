import React from "react"
import { useHistory } from "react-router-dom"
import { connect } from "react-redux"
import { requestAlerts, requestUpdateRepos } from "../../redux/actions"

function FollowerCard(props) {
    const { data: { avatar_url, login, repos_url } } = props
    const history = useHistory()

    const handleSelect = async () => {
        if (!repos_url) {
            props.requestAlerts({ show: true, type: 'error', description: "Repository url not available" })
        } else {
            props.requestUpdateRepos(login, repos_url, history)
        }
    }

    return (
        <section className='home_container__repo_card' onClick={handleSelect}>
            <img className='home_container__repo_card__img' src={avatar_url} alt={login ?? "N/A"}/>
            <section className='home_container__repo_card__name_desc_wrapper'>
                <h3 className='home_container__repo_card__name_desc_wrapper__name'>{login ?? "N/A"}</h3>
                <img className='check_icon' src={'/images/check.jpeg'} alt={'success'}/>
            </section>
            <p className='home_container__repo_card__name_desc_wrapper__desc'> {repos_url ?? "N/A"}</p>
        </section>
    )
}

const mapDispatchToProps = {
    requestAlerts,
    requestUpdateRepos
}
const connector = connect(null, mapDispatchToProps)
export default connector(FollowerCard)
