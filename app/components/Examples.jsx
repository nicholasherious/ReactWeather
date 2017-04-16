const React = require('react');
const {Link} = require('react-router');

const Examples = (props) => {
    return (
        <div>
        <h1 className="text-center page-title">Examples</h1>
            <p>
                Here are a few locations to try out.
            </p>
            <ol>
                <li>
                    <Link to='/?location=Nassau'>Nassau, Bahamas</Link>
                </li>
                <li>
                    <Link to='/?location=Miami'>Miami, Florida</Link>
                </li>
            </ol>
        </div>
    )
};

module.exports = Examples;