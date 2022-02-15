import React, { memo } from "react"
import { useHistory } from "react-router-dom"
// import check from "public/images/check.jpeg"

export default memo(function RepoCard(props) {
    const { data } = props
    const history = useHistory()
    const { id, name, description, owner = {} } = data
    return (
        <section
            className='home_container__repo_card'
            onClick={() => history.push({ pathname: `/${id}`, state: { data } })}
        >
            <img
                className='home_container__repo_card__img'
                src={owner?.avatar_url}
                alt={owner?.login ?? "N/A"}
            />
            <section className='home_container__repo_card__name_desc_wrapper'>
                <h3 className='home_container__repo_card__name_desc_wrapper__name'>{name ?? "N/A"}</h3>
                <img className='check_icon' src={'/images/check.jpeg'}/>
            </section>
            <p className='home_container__repo_card__name_desc_wrapper__desc'> {description ?? "N/A"}</p>
        </section>
    )
})
