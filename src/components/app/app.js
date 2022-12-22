import { Component } from 'react';
import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: [
                {name: 'John T.', salary: 8000, increase: true, rise: false, id: 1},
                {name: 'Alex N.', salary: 2500, increase: false, rise: true, id: 2},
                {name: 'Mark E.', salary: 1300, increase: true, rise: false, id: 3},
                {name: 'Shon A.', salary: 4000, increase: false, rise: true, id: 4}
            ],

            term: '',
            filter: ''
        }
        this.maxId = 5
    }

    deliteEmployee = (id) => {
        this.setState (({data}) => {
            // const index = data.findIndex(elem => elem.id === id);
            // Нельзя мутировать объект в State, надо создать новый.
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);
            // const newArr = [...before, ...after];

            return {
                data: data.filter(item => item.id !== id)
            }

        })
    }

    addEmployee = (name, salary) => {
        const newEployee = {
            name: name,
            salary: salary,
            increase: false,
            rise: false,
            id: +this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newEployee]
            return {
                data: newArr
            }
        })
    }

    onToggleProp = (e, id, prop) => {
        // this.setState(({data}) => {
        //     const index = data.findIndex(elem => elem.id ===id);
        //     const old = data[index];
        //     const newItem = {...old, increase: !old.increase};
        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

        //     return {
        //         data: newArr
        //     }
        // })
        if(e.type === 'click' || e.key === 'Enter') {
            this.setState(({data}) => ({
                data: data.map(item => {
                    if (item.id === id) {
                        return {...item, [prop]: !item[prop]}
                    }
                    return item
                })
            }))
        }
    }

    searchEmployee = (term, data) => {
        if (term.length === 0) {
            return data;
        }
        return data.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (liftTerm) => {
        this.setState({
            term: liftTerm
        })
    }

    filterPost = (data, filter) => {
        switch (filter) {
            case 'rise' :
                return data.filter(item => item.rise);
            case 'moreThan1000':
                return data.filter(item => item.salary > 3000); 
            default:
                return data       
        }
    }

    onFilterSelect = (filter) => {
        this.setState(({filter}));
    }

    onSalaryChange = (name, salary) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.name === name) {
                    return {...item, salary: (salary === '' || Number.isNaN(salary)) ? 0 : parseInt(salary)}
                }

                return item
            })
        }))
    }

    render() {
        const {data, term, filter} = this.state;
        const allEmployees = data.length;
        const increaseEmployees = data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmployee(term, data), filter);

        return (
            <div className="app">
                <AppInfo
                    countEmployes={allEmployees} 
                    increaseEmployes={increaseEmployees}
                />
    
                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter
                        // передает текущий стейт в app-filter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                </div>
                <EmployeesList 
                    data={visibleData}
                    deliteItem={this.deliteEmployee}
                    onToggleProp={this.onToggleProp}
                    onSalaryChange={this.onSalaryChange}/>
                <EmployeesAddForm
                    onAdd={this.addEmployee}
                />
            </div>
        );
    }
};

export default App;