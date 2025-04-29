const CCard = (props) => {
    return (
        <div className="card text-white bg-dark mb-3 shadow-sm">
            <div className="card-body">
                <h5 className="card-title">{props.countryName}</h5>
                <p className="card-text">
                    <strong>Capital:</strong> {props.capital}
                </p>
                <p className="card-text">
                    <strong>Population:</strong> {props.population.toLocaleString()}
                </p>
                <p className="card-text">
                    <strong>Interesting Facts:</strong> {props.interestingFacts}
                </p>
            </div>
        </div>
    );
};


export default CCard;
