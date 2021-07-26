import React, { Component } from 'react';
import { connect } from 'react-redux';

import s from './Mask.module.css';

class Mask extends Component {
  render() {
    return this.props.isLayoutMasked ? <div className={s.mask}></div> : null;
  }
}

const mapStateToProps = state => ({
  isLayoutMasked: state.app.isLayoutMasked,
});

export default connect(mapStateToProps)(Mask);
