import { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line } from 'recharts';
import './linechart.css'



function DemoLine() {
    const [data, setData] = useState({ min:0, max:0, graph: [{date:0,price:0}] })
    

    useEffect(async () => {
        const result = await axios(
            'https://server.jysaninvest.kz/api/Portfolios/stocks/graph/deprecated?stockId=124333&dateFrom=13.03.2022&dateTo=13.04.2022',
        );
        setData(result.data);
    });

    return(
        <div>
            <p id="current-price">${data.graph[data.graph.length-1].price}</p>
            {(data.graph[data.graph.length-1].price*100/data.graph[0].price-100)>0?
                <p id="current-price-difference">
                    <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.66667 9.00001V5.00001H8L4 0.333344L0 5.00001H3.33333V9.00001H4.66667Z" fill="#8A9C1B"/>
                    </svg>&nbsp;
                    ${data.graph[data.graph.length-1].price-data.graph[0].price.toFixed(2)}&nbsp;
                    ({(data.graph[data.graph.length-1].price*100/data.graph[0].price-100).toFixed(2)}%)
                </p>:
                <p id="current-price-minus">
                    <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.66667 9.00001V5.00001H8L4 0.333344L0 5.00001H3.33333V9.00001H4.66667Z" fill="#8A9C1B"/>
                    </svg>&nbsp;
                    ${data.graph[data.graph.length-1].price-data.graph[0].price.toFixed(2)}&nbsp;
                    ({(data.graph[data.graph.length-1].price*100/data.graph[0].price-100).toFixed(2)}%)
                </p>}
            <LineChart
                width={360}
                height={80}
                data={data.graph}
            >

                <Line
                    type="linear"
                    dataKey="price"
                    stroke="#193048"
                />
            </LineChart>

            <div className="group-button">
                <div className="form_radio_btn">
                    <input id="radio-1" type="radio" name="radio" value="1" checked/>
                        <label htmlFor="radio-1">1 нед</label>
                </div>

                <div className="form_radio_btn">
                    <input id="radio-2" type="radio" name="radio" value="2"/>
                        <label htmlFor="radio-2">2 нед</label>
                </div>

                <div className="form_radio_btn">
                    <input id="radio-3" type="radio" name="radio" value="3"/>
                        <label htmlFor="radio-3">Мес</label>
                </div>
            </div>

        </div>
    );
};

export default DemoLine