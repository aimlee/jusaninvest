import './RiskLvl.css'

function RiskLvl() {
    return (
        <>
        <div className="risk-wrapper">
            <p className="label-name">Уровень риска</p>
            <div className="battery-lvl">
                <svg className="rectangle-block" width="74" height="32" viewBox="0 0 74 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="11.6842" height="32" rx="2" fill="#8A9C1B"/>
                    <rect x="15.5789" width="11.6842" height="32" rx="2" fill="#DADEE2"/>
                    <rect x="31.1579" width="11.6842" height="32" rx="2" fill="#DADEE2"/>
                    <rect x="46.7368" width="11.6842" height="32" rx="2" fill="#DADEE2"/>
                    <rect x="62.3158" width="11.6842" height="32" rx="2" fill="#DADEE2"/>
                </svg>
                <p>Низкий риск;<br/> Консервативня доходность</p>
            </div>
        </div>

        </>
    );
}

export default RiskLvl;
