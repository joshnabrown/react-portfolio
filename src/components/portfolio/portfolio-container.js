import React, { Component } from "react";

import axios from 'axios';
import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: []
        };
        // this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this);
        this.handleFilter = this.handleFilter.bind(this);

    }

    getPortfolioItems() {
        axios.get('https://josh.devcamp.space/portfolio/portfolio_items')
            .then(response => {
                // handle success
                this.setState({
                    data: response.data.portfolio_items
                })
            })
            .catch(error => {
                // handle error
                console.log(error);
            })
            .then(() => {
                // always executed
            });
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem key={item.id} item={item} />;
        })

    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }

    // handlePageTitleUpdate() {
    //     this.setState({
    //         pageTitle: "Something Else"

    //     })
    // }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading... </div>;
        }
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick={() => this.handleFilter('eCommerce')}>eCommerce</button>
                <button onClick={() => this.handleFilter('Scheduling')}>Scheduling</button>
                <button onClick={() => this.handleFilter('Enterprise')}>Enterprise</button>

                <div className="portfolio-items-wrapper">
                    {this.portfolioItems()}
                </div>
                {/* <hr />

                <button onClick={this.handlePageTitleUpdate}>Change Title</button> */}
            </div>
        )
    }
}