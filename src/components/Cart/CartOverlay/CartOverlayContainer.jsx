import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CartOverlay from './CartOverlay';
import CartSection from '../CartSection/CartSection';
import { totalCountReducer } from '../../../utils/utils';
import { appendMask, removeMask } from '../../../redux/appSlice';

class CartOverlayContainer extends React.Component {
  state = {
    isOpened: false,
  };

  toggleOverlay = () => {
    if (this.state.isOpened) {
      this.setState({ isOpened: false });
      this.props.removeMask();
    } else {
      this.setState({ isOpened: true });
      this.props.appendMask();
    }
  };

  onLeaveFromClick = () => {
    this.setState({ isOpened: false });
    this.props.removeMask();
  };

  render() {
    const counter = this.props.basket.reduce(totalCountReducer, 0);

    return (
      <CartOverlay
        isOpened={this.state.isOpened}
        counter={counter}
        toggleOverlay={this.toggleOverlay}
        onLeaveFromClick={this.onLeaveFromClick}>
        <CartSection
          fromCart={true}
          counter={counter}
          onLeaveFromClick={this.onLeaveFromClick}>
          {counter !== 0 && (
            <NavLink onClick={this.onLeaveFromClick} to='/cart'>
              View bag
            </NavLink>
          )}
        </CartSection>
      </CartOverlay>
    );
  }
}

const mapStateToProps = state => ({
  basket: state.basket,
});

export default connect(mapStateToProps, { appendMask, removeMask })(
  CartOverlayContainer
);
