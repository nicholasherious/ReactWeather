const React = require('react');

const Examples = (props) => {
    return (
        <div>
        <h1 className="text-center">Examples</h1>
            <p>
                This is a weather application built with React using the Complete React Web App developer course.
            </p>
            <p>
                Here are some of the tools I used
            </p>
            <p>
                <ul>
                    <li>
                        <a href="https://facebook.github.io/react">React</a> Javascript framework
                    </li>
                    <li>
                        <a href="http://openweathermap.org/">OpenWeatherMap API</a>
                    </li>
                </ul>
            </p>
        </div>
    )
};

module.exports = Examples;