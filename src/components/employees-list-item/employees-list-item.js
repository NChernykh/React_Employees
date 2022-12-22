import { Component } from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component {
    constructor (props) {
        super(props);
        this.state = {
            salary: props.salary
        }
    }

    onValueChange = (e) => {
        let currentValue;
        if (e.target.value === "") {
            currentValue = 0
        } else {
            currentValue = Number(e.target.value.slice(0, -1));
        }

        this.setState({
            salary: currentValue
        })

        this.props.onSalaryChange(this.props.name, currentValue)
    }

    render() {
        const {name, onDelite, onToggleProp, increase, rise} = this.props;
        const {salary} = this.state;
        let classNames = "list-group-item d-flex justify-content-between";

        if (increase) {
            classNames+=' increase';
        }

        if (rise) {
            classNames+=' like';
        }
        return (
            <li className={classNames}>
                <span 
                    onClick={onToggleProp}
                    onKeyDown={onToggleProp}
                    className="list-group-item-label"
                    data-toggle="rise"
                    tabIndex="0"
                    >{name}</span>
                <input 
                    type="text"
                    className="list-group-item-input"
                    value={(Number.isNaN(salary)  || salary < 0) ? 0 : salary + '$'}
                    onChange={this.onValueChange}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        onClick={onToggleProp}
                        data-toggle="increase"
                        className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelite}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;