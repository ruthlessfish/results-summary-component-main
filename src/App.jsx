import scores from "../data.json" with { type: "json" };

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

                {scores.map((item) => (
                    <div key={item.category} className={`score ${item.category.toLowerCase()}`}>
                         <span className="label">{item.category}</span>
                         <span><strong>{item.score}</strong> / 100</span>
                    </div>
                ))}                        
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