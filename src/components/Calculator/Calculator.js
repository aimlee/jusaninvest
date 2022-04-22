import {useState} from 'react'
import './Calculator.css'


function Calculator() {
    const [value, setValue] = useState(10000)
    const [year, setYear] = useState(1)
    const [finalSum, setFinalSum] = useState(10000)

    const handleFinalChange=()=>{
        setFinalSum(value*1.07*year)
    }

    return (
            <div className="risk-wrapper-calculator">
                <div className="group-income-calculator">
                    <div className="label-name-calculator">Посчитать возможный доход &nbsp;
                        <img src='/ques.png' id="logo" width="18px" height="18px" />
                    </div>
                </div>
                <div className="calculator-slider">
                    <label id="calculator-label">Сумма инвестирования</label>
                    <span id="calculator-value">${value}</span>
                    <input
                        id="range-calculator"
                        type="range"
                        min="10000" max="2000000"
                        value ={value}
                        onChange={(event) => {setValue(parseInt(event.target.value));handleFinalChange();}}
                        step="1"/>
                    <div className="min-max-amount">
                        <label>$10 000</label>
                        <label>$2 000 000</label>
                    </div>

                </div>
                <div>

                    <label id="calculator-label">Срок инвестирования</label>

                    <div className="group-button">
                        <div className="year_radio_btn">
                            <input
                                id="radio-year-1"
                                type="radio"
                                name="radio"
                                value="1"
                                onChange={(event) => {
                                    setYear(parseInt(event.target.value));handleFinalChange()}} checked
                            />
                            <label htmlFor="radio-year-1">1 год</label>
                        </div>

                        <div className="year_radio_btn">
                            <input
                                id="radio-year-2"
                                type="radio"
                                name="radio"
                                value="2"
                                onChange={(event) => {
                                    setYear(parseInt(event.target.value));handleFinalChange()}
                            }
                            />
                            <label htmlFor="radio-year-2">2 года</label>
                        </div>

                        <div className="year_radio_btn">
                            <input
                                id="radio-year-3"
                                type="radio"
                                name="radio"
                                value="3"
                                onChange={(event) => {
                                    setYear(parseInt(event.target.value));handleFinalChange()}
                            }
                            />
                            <label htmlFor="radio-year-3">3 года</label>
                        </div>
                        <div className="year_radio_btn">
                            <input
                                id="radio-year-4"
                                type="radio"
                                name="radio"
                                value="4"
                                onChange={(event) => {
                                    setYear(parseInt(event.target.value));handleFinalChange()}
                            }
                            />
                            <label htmlFor="radio-year-4">4 года</label>
                        </div>
                        <div className="year_radio_btn">
                            <input
                                id="radio-year-5"
                                type="radio"
                                name="radio"
                                value="5"
                                onChange={(event) => {
                                    setYear(parseInt(event.target.value));handleFinalChange()}}
                            />
                            <label htmlFor="radio-year-5">5 лет</label>
                        </div>
                    </div>
                </div>
                <div className="calculator-slider">
                    <label id="calculator-label-sum">Предполагаемый доход</label>
                    <label id="calculator-label-sum-value">${parseFloat(finalSum).toFixed(2)}</label>
                </div>
            </div>
    );
}

export default Calculator;
