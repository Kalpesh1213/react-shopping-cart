import React, { Component } from 'react'

export default class filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter_result"> {this.props.count} Products</div>
                <div className="filter_sort"> 
                   Order {" "} 
                   <select value={this.props.sort} onChange={this.props.sortProducts}>
                    <option>Latest</option>
                    <option value="lowest">Lowest</option>
                    <option value="hightest">Hightest</option>
                </select>
                </div>
                <div className="filter_size"> 
                Filter 
                <select value={this.props.size} onChange={this.props.filterProducts}>
                <option value="">All</option>   
                <option value="XS">XS</option>   
                <option value="S">S</option>   
                <option value="M">M</option>   
                <option value="L">L</option>   
                <option value="XL">XL</option>   
                <option value="XXL">XXL</option>   
                </select>
                </div>
     
            </div>
        )
    }
}
