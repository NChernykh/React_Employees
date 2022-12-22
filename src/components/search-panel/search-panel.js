import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor (props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onValueChange = (e) => {
        const localTerm = e.target.value;
        this.setState({
            term: localTerm,
        })
        this.props.onUpdateSearch(localTerm)
    }

    render() {
    const {term} = this.state;
    return (
        <input
            type="text"
            onChange={this.onValueChange}
            value={term}
            className="form-control search-input"
            placeholder="Найти сотрудника" />
    )
    }
}

export default SearchPanel;