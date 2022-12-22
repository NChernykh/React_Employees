import './app-filter.css';

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники', colored: false},
        {name: 'rise', label: 'На повышение', colored: false},
        {name: 'moreThan1000', label: 'З/п больше 1000$', colored: true}
    ];

    const buttons = buttonsData.map(item => {
        // в active true or false
        const active = props.filter === item.name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        const style = item.colored ? {color: 'red'} : null;
        return (
            <button
                className={`btn ${clazz}`}
                type="button"
                key={item.name}
                onClick={() => props.onFilterSelect(item.name)}
                style={style}>
                    {item.label}
            </button>
        )
    }) 
    return (
        <div className="btn-group">
            {buttons}
            {/* <button 
                onClick={props.showAll}
                className="btn btn-light"
                type="button">
                    Все сотрудники
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    На повышение
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    ЗП больше 1000$
            </button> */}
        </div>
    )
}

export default AppFilter;