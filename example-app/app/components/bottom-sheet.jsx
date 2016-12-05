import { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, popupActions } from 'react-redux-popup';
import Menus from 'app/menus2';

const selector = state => state.modal;

class BottomSheet extends Component {
    render() {
        return (
            <div>
                <label>This is bottom sheet!</label>
                <label>Showing different ways to open the modal with this library.</label>
                <Menus />
                <button onClick={() => this.props.dispatch(popupActions.closePopup(this.props.id))}>OK</button>
            </div>
        );
    }
}

export default Modal(connect(selector)(BottomSheet));
