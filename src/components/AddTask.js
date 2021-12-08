import React from 'react';
import './AddTask.css'

class AddTask extends React.Component {
    state = {
        text: '',
        checked: false,
        date: "2021-12-25"
    }
    render() {
        return (
            <div className='form'>
                <input type='text' placeholder='dodaj zadanie' value={this.state.text} />
                <input type='checkbox' checked={this.state.checked} id='important' />
                <label htmlFor='important'>Priorytet</label><br />
                <label htmlFor='date'>Do kiedy zrobić</label><br />
                <input type='date' value='' min='2021-12-08' max='2022-12-31' />
                <button>Dodaj</button>
            </div >
        );
    }
}

export default AddTask;