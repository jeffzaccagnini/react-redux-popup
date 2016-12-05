import { Component } from 'react';
import { connect } from 'react-redux';
import { popupActions } from 'react-redux-popup';
import { bindActionCreators } from 'redux';
import BottomSheet from 'app/components/bottom-sheet';
import Menus from 'app/menus';
import ModalPopup from 'app/components/modal-popup';
import { PopupSandbox } from 'react-redux-popup';

class App extends Component {
    render() {
        const actions = bindActionCreators(popupActions, this.props.dispatch);
        return (
            <div
                style={{overflow:'auto', height:'400px'}}
                onScroll={this.scroll.bind(this)}
                ref="main">
                <button onClick={this.openModal.bind(this)}>Open Modal</button>
                <button onClick={this.openBottomSheet.bind(this)}>Open Bottom Sheet</button>
                <div style={{height:'1000px'}}>
                    <Menus />
                </div>
                <ModalPopup id="modal1" popupClassName="modal-container" layoverClassName="modal-layover" closePopup={actions.closePopup}/>
                <BottomSheet
                    id="bottomSheet1"
                    popupClassName="bottom-sheet-container"
                    layoverClassName="modal-layover"
                    closePopup={actions.closePopup}
                />
                <PopupSandbox
                    modalTransitionEnterTimeout={300}
                    modalTransitionLeaveTimeout={300}
                    popupTransitionEnterTimeout={100}
                    popupTransitionLeaveTimeout={100} />
            </div>
        );
    }

    scroll(event) {
        this.props.updateScrollPosition(this.refs.main.scrollLeft, this.refs.main.scrollTop);
    }

    openBottomSheet() {
        this.props.openPopup('bottomSheet1');
    }

    openModal() {
        this.props.openPopup('modal1');
    }
}

export default connect(null, popupActions)(App);
