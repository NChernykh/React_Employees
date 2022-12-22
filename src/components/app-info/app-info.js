import './app-info.css';

const AppInfo= (props) => {
    const  {countEmployes, increaseEmployes} = props;
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {countEmployes}</h2>
            <h2>Премию получат: {increaseEmployes}</h2>
        </div>
    )
}

export default AppInfo;