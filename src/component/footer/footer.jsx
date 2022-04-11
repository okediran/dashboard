import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6">
                        © <Link to="/">By Fidepad</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;