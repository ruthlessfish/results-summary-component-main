const App = () => {
    return (
        <>
            <main role="main">
                <section className="results">
                <h2>Your Result</h2>
                <div className="total">
                    <big>76</big>
                    <span>of 100</span>
                </div>

                <h3>Great</h3>
                <p>You scored higher than 65% of<br /> the people who have taken these tests.</p>
                </section>
                <section className="summary">
                <h2>Summary</h2>

                <div className="score reaction">
                    <span className="label">Reaction</span>
                    <span><strong>80</strong> / 100</span>
                </div>

                <div className="score memory">
                    <span className="label">Memory</span>
                    <span><strong>92</strong> / 100</span>
                </div>

                <div className="score verbal">
                    <span className="label">Verbal</span>
                    <span><strong>61</strong> / 100</span>
                </div>

                <div className="score visual">
                    <span className="label">Visual</span>
                    <span><strong>72</strong> / 100</span>
                </div>
                <button role="button">Continue</button>
                </section>
            </main>
            <footer>
                <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="#">Shane Pearson</a>.
                </div>
            </footer>
        </>
    );
};

export default App;