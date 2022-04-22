import './TabBar.css'

function TapBar() {
    return (
        <nav className="slidemenu">
            <input type="radio" name="slideItem" id="slide-item-1" className="slide-toggle" checked/>
            <label htmlFor="slide-item-1"><span>ОБЗОР</span></label>

            <input type="radio" name="slideItem" id="slide-item-2" className="slide-toggle"/>
            <label htmlFor="slide-item-2"><span>ИНФОРМАЦИЯ</span></label>

            <input type="radio" name="slideItem" id="slide-item-3" className="slide-toggle"/>
            <label htmlFor="slide-item-3"><span>СТРУКТУРА</span></label>

            <input type="radio" name="slideItem" id="slide-item-4" className="slide-toggle"/>
            <label htmlFor="slide-item-4"><span>ДОКУМЕНТАЦИЯ</span></label>
        </nav>
    );
}

export default TapBar;
