const React = require('react');

class Python extends React.Component {
    render() {
        return (
            <div className="pythonCoverImageWrapper">
                <div className="pythonCoverImageWithbutton">
                    <img
                        src="/img/tech_writer_koduje_w_pythonie.png"
                        className="img-fluid mx-auto d-block mb-5"
                        alt="tech writer koduje w pythonie, przewodnik szybkiego startu. autor: Michał Skowron." />
                    <a href="/docs/python/teoria">
                        <div className="pythonCoverButton">
                            <div className="pythonCoverButtonInner">
                                <div className="pythonButtonLabelWrapper">na_początek_trochę_teorii →</div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

module.exports = Python;