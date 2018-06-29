import React from 'react';
import './Business.css';

class Business extends React.Component {
  navi(){
    alert("haha");
  }

  render() {
    return (
      <div className = "Business" onClick={this.navi}>
        <div className = "image-container">
          <img src = {this.props.bussiness.imageSrc} alt=''/>
        </div>
        <h2>{this.props.bussiness.name}</h2>
        <div className = "Business-information">
          <div className = "Business-address">
            <p>{this.props.bussiness.address}</p>
            <p>{this.props.bussiness.city}</p>
            <p>{this.props.bussiness.state} {this.props.bussiness.zipCode}</p>
          </div>
          <div className = "Business-reviews">
            <h3>{this.props.bussiness.category}</h3>
            <h3 className="rating">{this.props.bussiness.rating} stars</h3>
            <p>{this.props.bussiness.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
