import React from 'react'

const Layout = props => {
    return (
        <div className="lg:container mx-auto">
            {props.children}
        </div>
    )
}
export default Layout