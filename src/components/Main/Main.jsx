import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import ProductSection from '../ProductSection/ProductSection';
import ProductPageContainer from '../ProductSection/Product/ProductPageContainer';
import CartSection from '../CartSection/CartSection';

import Mask from '../misc/Mask';
import s from './Main.module.css';
import { connect } from 'react-redux';

class Main extends React.Component {
  render() {
    const categoryName = this.props.location.pathname.split('/')[1];

    return (
      <main className={s.main}>
        <div className='container'>
          <h1 className='visually-hidden'>Small Store</h1>
          <section className={s.section}>
            <Switch>
              <Route exact path='/'>
                <Redirect to='/all' />
              </Route>
              <Route exact path={`/cart`}>
                <CartSection />
              </Route>
              <Route exact path={`/${categoryName}`}>
                <ProductSection
                  category={categoryName !== 'all' ? categoryName : ''}
                />
              </Route>
              <Route path={`/${categoryName}/:id`}>
                <ProductPageContainer />
              </Route>
            </Switch>
          </section>
        </div>
        {this.props.isLayoutMasked && <Mask />}
      </main>
    );
  }
}

const mapStateToProps = state => ({
  isLayoutMasked: state.app.isLayoutMasked,
});

export default connect(mapStateToProps)(withRouter(Main));
