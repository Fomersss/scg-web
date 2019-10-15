import React, { Component } from 'react'
import { Header } from '../component/header';
import { Footer } from '../component/footer';


export const withLayout = (WrappedComponent) => {
    return class ComponentwithLayout extends Component {
        render() {
            return <div><Header /><WrappedComponent {...this.props} /><Footer/></div>
        }
    }
}
