import React, { Component } from 'react'
import { NavBar } from '../component/navbar';

export const withLayout = (WrappedComponent) => {
    return class ComponentwithLayout extends Component {
        render() {
            return <div><NavBar /><WrappedComponent {...this.props} /></div>
        }
    }
}
