import React, { Component } from 'react';
import { Route } from "react-router-dom";
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData'
import Spinner from '../../components/UI/Spinner/Spinner'
import {connect} from 'react-redux';
class Checkout extends Component {

    checkoutCancelledHandler = ()=>{
        this.props.history.goBack();
    }
    checkoutContinuedHandler = ()=>{
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
            <div>
                <CheckoutSummary 
                ingredients={this.props.ings}
                checkoutCancelled={this.checkoutCancelledHandler}
                checkoutContinued={this.checkoutContinuedHandler}
                />
            </div>
                            <Route 
                            path={this.props.match.url+'/contact-data'}
//                            render = {()=>(<ContactData 
//                                price = {this.props.price}
  //                              ingredients={this.state.ingredients}
    //                            {...this.props}/>)}
                            component={ContactData} />
            </div>  
        );
    }
}
const mapStateToProps=state=>{
    return {
        ings:state.ingredients,
        price:state.totalPrice
    }
}
export default connect(mapStateToProps)(Checkout);