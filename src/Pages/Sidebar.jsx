import { Component } from "react";
export default class Sidebar extends Component {
  render() {
    return (
      <div className="hh w-25">
        <div className="d-flex flex-column flex-shrink-0  p-3 color w-100 h-100 text-light"       >
          <a
            href="/"
            className="d-flex  align-items-center mb-3 mb-md-0 me-md-auto   link-body-emphasis text-light text-decoration-none"
          >
            <svg
              className="bi pe-none me-2"
              width="40"
              height="32"
              aria-hidden="true"
            >
              <use xlinkHref="#bootstrap"></use>
            </svg>
            <span className="fs-3">Task Manager</span>
          </a>
          <hr />
          <ul className="nav nav-pills  d-flex h-75 fs-5 justify-content-between flex-column text-light mb-auto">

            <li>
              <a onClick={() => { this.props.changename("Dashboard") }}  className="nav-link text-light">
                <svg
                  className="bi pe-none me-2"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <use xlinkHref="#speedometer2"></use>
                </svg>
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" onClick={() => { this.props.changename("Complete") }} className="nav-link text-light">
                <svg
                  className="bi pe-none me-2"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <use xlinkHref="#table"></use>
                </svg>
                Complete Task
              </a>
            </li>
            <li>
              <a href="#" onClick={() => { this.props.changename("Pending") }} className="nav-link text-light">
                <svg
                  className="bi pe-none me-2"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <use xlinkHref="#grid"></use>
                </svg>
                Pending Task
              </a>
            </li>
            <li>
              <a href="#" onClick={() => { this.props.changename("Progress") }} className="nav-link text-light">
                <svg
                  className="bi pe-none me-2"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <use xlinkHref="#people-circle"></use>
                </svg>
                Progress Task
              </a>
            </li>
            <li className="nav-item">
              <a href="#" onClick={() => { this.props.changename("Deployed") }} className="nav-link text-light" aria-current="page">
                <svg
                  className="bi pe-none me-2"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <use xlinkHref="#home"></use>
                </svg>
                Deployed Task
              </a>
            </li>
            <li>
              <a href="#" onClick={() => { this.props.changename("Deferred") }} className="nav-link text-light">
                <svg
                  className="bi pe-none me-2"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <use xlinkHref="#people-circle"></use>
                </svg>
                Deferred Task
              </a>
            </li>
            <li>
              <a href="#" onClick={() => { this.props.changename("Task") }} className="nav-link text-light">
                <svg
                  className="bi pe-none me-2"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <use xlinkHref="#people-circle"></use>
                </svg>
                Add New Task
              </a>
            </li>
            <li>
              <a href="#" onClick={() => { this.props.changename("Stats") }} className="nav-link text-light">
                <svg
                  className="bi pe-none me-2"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <use xlinkHref="#people-circle"></use>
                </svg>
                Task  Stats
              </a>
            </li>
          </ul>
          <hr />

        </div>
      </div>
    )
  }
}