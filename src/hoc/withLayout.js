import React, { Component, Fragment } from 'react'
import { Header } from '../component/header';
import { Footer } from '../component/footer';

// wrap component with footer and header

export const withLayout = (WrappedComponent) => {
    return class ComponentwithLayout extends Component {
        render() {
            return <Fragment >
                <Header />
                <div className="container">
                    <WrappedComponent {...this.props} />
                </div>
                <Footer />
            </Fragment>
        }
    }
}
