import Link from 'next/link'
import { Component } from 'react'
import Router from 'next/router'

let counter = 0

const linkStyle = {
  marginRight: 10,
}

export default class extends Component {
  increase() {
    counter++
    this.forceUpdate()
  }

  visitQueryStringPage() {
    const href = { pathname: '/nav/querystring', query: { id: 10 } }
    const as = { pathname: '/nav/querystring/10', hash: '10' }
    Router.push(href, as)
  }

  render() {
    return (
      <div className="nav-home">
        <Link href="/nav/about">
          <a id="about-link" style={linkStyle}>
            About
          </a>
        </Link>
        <Link href="/empty-get-initial-props">
          <a id="empty-props" style={linkStyle}>
            Empty Props
          </a>
        </Link>
        <Link href="/nav/self-reload">
          <a id="self-reload-link" style={linkStyle}>
            Self Reload
          </a>
        </Link>
        <Link href="/nav/shallow-routing">
          <a id="shallow-routing-link" style={linkStyle}>
            Shallow Routing
          </a>
        </Link>
        <Link href="/nav/redirect">
          <a id="redirect-link" style={linkStyle}>
            Redirect
          </a>
        </Link>
        <Link
          href={{ pathname: '/nav/querystring', query: { id: 10 } }}
          as={{ pathname: '/nav/querystring/10', hash: '10' }}
        >
          <a id="query-string-link" style={linkStyle}>
            QueryString
          </a>
        </Link>
        <Link href="/nav/about" replace>
          <a id="about-replace-link" style={linkStyle}>
            Replace state
          </a>
        </Link>
        <Link href="/nav/as-path" as="/as/path">
          <a id="as-path-link" style={linkStyle}>
            As Path
          </a>
        </Link>
        <Link href="/nav/as-path">
          <a id="as-path-link-no-as" style={linkStyle}>
            As Path (No as)
          </a>
        </Link>
        <Link href="/nav/as-path-using-router">
          <a id="as-path-using-router-link" style={linkStyle}>
            As Path (Using Router)
          </a>
        </Link>
        <Link href="/nav/on-click?count=1">
          <a id="on-click-link" style={linkStyle}>
            An element with onClick
          </a>
        </Link>
        <Link href="/nav/about">
          <a id="target-link" target="_blank">
            An element with target
          </a>
        </Link>

        <svg
          width={24}
          height={24}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Link href="/nav/about">
            <a id="in-svg-link" style={{ display: 'block' }}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0Zm4.5 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                fill="#335BF1"
              />
            </a>
          </Link>
        </svg>

        <button
          onClick={() => this.visitQueryStringPage()}
          style={linkStyle}
          id="query-string-button"
        >
          Visit QueryString Page
        </button>

        <p>This is the home.</p>
        <div id="counter">Counter: {counter}</div>
        <button id="increase" onClick={() => this.increase()}>
          Increase
        </button>
        <Link href="/nav/hash-changes#item-400">
          <a id="scroll-to-hash">Scroll to hash</a>
        </Link>
        <Link href="/nav/hash-changes#中文">
          <a id="scroll-to-cjk-hash">Scroll to CJK hash</a>
        </Link>
      </div>
    )
  }
}
