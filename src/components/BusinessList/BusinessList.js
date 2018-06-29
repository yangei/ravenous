import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';
import ReactPaginate from 'react-paginate';

class BusinessList extends React.Component {
  constructor(props){
    super(props);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick(data) {
    let pageNum = data.selected;
    this.props.onPageChange(pageNum);
  }

  render() {
    return (
      <div className="BusinessList">
        {this.props.businesses.map ( bussiness => <Business key={bussiness.id} bussiness={bussiness}/>)}
        <ReactPaginate 
                       previousLabel={"previous"}
                       nextLabel={"next"}
                       breakLabel={<a href="">...</a>}
                       breakClassName={"break-me"}
                       pageCount={10}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={5}
                       onPageChange={this.handlePageClick}
                       containerClassName={"react-paginate"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"} />
      </div>
    );
  }
}

export default BusinessList;
