import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';
const EmployeesList = ({data, deliteItem, onToggleProp, onSalaryChange}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;

        return (
            <EmployeesListItem 
                key={id} 
                {...itemProps}
                // Спред-операртор внутри разворачивает объект на элементы item
                //<EmployeesListItem name={item.name} salary={item.salary} increase={item.increase}/>
                onDelite={() => deliteItem(id)}
                onToggleProp={(e) => onToggleProp(e, id, e.currentTarget.getAttribute('data-toggle'))}
                onSalaryChange={onSalaryChange}/>
            )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;