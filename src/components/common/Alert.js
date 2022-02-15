import React from "react"
import { requestAlerts } from "../../redux/actions"
import { connect } from "react-redux"

function Alert(props) {
    const { alert } = props

    if (!alert.show) return null

    return (
        <section className={`alert ${alert.type}`}>
      <span
          className='alert__close_btn'
          onClick={() => requestAlerts(false)}
      >
        &times;
      </span>
            <strong>{alert.type || "Success"}</strong> {alert.description || ""}
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        alert: state.alert
    }
}

const connector = connect(mapStateToProps)
export default connector(Alert)


