import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer id="footer" className="row">
            <div className="col-12">
                <p className="text-muted credit">
                    All images are from <a href="https://commons.wikimedia.org/wiki/Main_Page">Wikimedia Commons</a> and are in the public domain.
                </p>
            </div>
        </footer>
    )
}

export default Footer;