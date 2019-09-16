import React from 'react';
import {connect} from 'react-redux';
import './shopping-cart-table.css';

const ShoppingCartTable = ({cartItems, total, onIncrease, onDecrease, onDelete}) => {

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {cartItems.map((item, idx)=>{
            const {id, title, cnt, price} = item;
            return (
                <tr key={id}>
                  <td>{idx+1}</td>
                  <td>{title}</td>
                  <td>{cnt}</td>
                  <td>${price}</td>
                  <td>
                    <button onClick={()=>onDelete(id)} className="btn btn-outline-danger btn-sm float-right">
                      <i className="fa fa-trash-o" />
                    </button>
                    <button onClick={()=>onIncrease(id)} className="btn btn-outline-success btn-sm float-right">
                      <i className="fa fa-plus-circle" />
                    </button>
                    <button onClick={()=>onDecrease(id)} className="btn btn-outline-warning btn-sm float-right">
                      <i className="fa fa-minus-circle" />
                    </button>
                  </td>
                </tr>
            )
          })}
        </tbody>
      </table>

      <div className="total">
        Total: ${total}
      </div>
    </div>
  );
};

const mapStateToProps = ({cartItems, total}) => {
  return {
    cartItems,
    total
  }
};

const mapDispatchToProps = () => ({
  onIncrease: (id) => {
    console.log(`increase ${id}`);
  },
  onDecrease: (id) => {
    console.log(`decrease ${id}`);
  },
  onDelete: (id) => {
    console.log(`delete ${id}`);
  }

});


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
