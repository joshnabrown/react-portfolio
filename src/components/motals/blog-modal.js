import React, { Component } from "react";
import ReactModal from "react-modal";

export default class BlogModal extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <ReactModal isOpen={true}>
                <h1>I'm in a modal!</h1>
            </ReactModal>
        )
    }
}