import React, { Component } from 'react';
import './HeaderBin.css';
import { Link } from 'react-router-dom'

class HeaderBinB1 extends Component {
    render() {
        return (
            <div className="bin_header_root">
              <Link to="/shelves/shelfB">
                <div className="bin_header_container">
                    <Link to="/"> <div className="bin_logo_container">
                        <img className="bin_header_logo" src="https://raw.githubusercontent.com/DevMountain/simulation-1/master/assets/logo.png" alt="" />
                    </div>
                    </Link>
                    <p>Shelf B</p>
                </div>
                </Link>
                <p>Bin 1</p>
            </div>
        )
    }
}
export default HeaderBinB1