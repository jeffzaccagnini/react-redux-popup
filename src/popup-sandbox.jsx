import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import collection, { TYPE_MODAL, TYPE_POPUP } from 'rrp/popup-collection';

export const popupSelector = state => state.popup;

class Sandbox extends Component {
    renderPopups(popupType) {
        return collection
            .filter(popup => popup[0] === popupType && this.props[popup[2].id])
            // eslint-disable-next-line no-unused-vars
            .map(([type, Popup, props]) => <Popup key={props.id} {...props} />);
    }

    render() {
        return (
            <div>
                <ReactCSSTransitionGroup
                    transitionName={this.props.modalTransitionName}
                    transitionEnterTimeout={this.props.modalTransitionEnterTimeout}
                    transitionLeaveTimeout={this.props.modalTransitionLeaveTimeout}
                >
                    {this.renderPopups(TYPE_MODAL)}
                </ReactCSSTransitionGroup>
                <ReactCSSTransitionGroup
                    transitionName={this.props.popupTransitionName}
                    transitionEnterTimeout={this.props.popupTransitionEnterTimeout}
                    transitionLeaveTimeout={this.props.popupTransitionLeaveTimeout}
                >
                    {this.renderPopups(TYPE_POPUP)}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

Sandbox.propTypes = {
    modalTransitionName: PropTypes.string.isRequired,
    modalTransitionEnterTimeout: PropTypes.number.isRequired,
    modalTransitionLeaveTimeout: PropTypes.number.isRequired,
    popupTransitionName: PropTypes.string.isRequired,
    popupTransitionEnterTimeout: PropTypes.number.isRequired,
    popupTransitionLeaveTimeout: PropTypes.number.isRequired
};

Sandbox.defaultProps = {
    modalTransitionName: 'modal',
    modalTransitionEnterTimeout: 0,
    modalTransitionLeaveTimeout: 0,
    popupTransitionName: 'popup',
    popupTransitionEnterTimeout: 0,
    popupTransitionLeaveTimeout: 0
};

export default connect(popupSelector)(Sandbox);
