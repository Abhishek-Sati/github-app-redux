import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"
import FollowerCard from "components/home/FollowerCard"
import { connect } from "react-redux"

function Followers(props) {
    const { followers = [], loader } = props
    const history = useHistory()

    useEffect(() => {
        if (!followers.length) {
            history.push("/")
        }
    }, [])

    return (
        <section style={{ gridColumn: "center-start/center-end", textAlign: "center" }}>
            {" "}
            <section className='breadcrumb_wrapper'>
                <ul className='breadcrumb' style={{ marginLeft: "3rem", flex: ".5", textAlign: "left" }}>
                    <li>
                        <a
                            href=''
                            onClick={(e) => {
                                e.preventDefault()
                                history.push("/")
                            }}
                        >
                            Home
                        </a>
                    </li>
                    <li>Followers</li>
                </ul>
                <h1 className='detail_container__heading'>Followers</h1>
            </section>
            <section className='home_container__repos_container'>
                {loader ? (
                    <div className='spinner absolute-l50-t50'/>
                ) : (
                    followers.map((item, index) => <FollowerCard key={index} data={item}/>)
                )}
            </section>
        </section>
    )
}

const mapStateToProps = (state) => ({
    followers: state.followers,
    loader: state.loader
})

const connector = connect(mapStateToProps)
export default connector(Followers)
