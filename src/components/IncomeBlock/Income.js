import './Income.css'

function IncomeBlock() {
    return (
        <>
            <div className="risk-wrapper">
                <div className="group-income">
                    <div className="label-name">Доходность фонда &nbsp;
                        <img src='/ques.png' id="logo" width="18px" height="18px" />
                    </div>
                    <p className="year-income">В годовых</p>
                </div>
                <div className="grid-container">
                    <div className="column">YTD</div>
                    <div className="column">6 мес.</div>
                    <div className="column">1 год</div>
                    <div className="column">Весь период</div>
                    <div className="data">1.41%</div>
                    <div className="data">4.69%</div>
                    <div className="data">1.45%</div>
                    <div className="data">1.89%</div>
                </div>
            </div>

        </>
    );
}

export default IncomeBlock;
