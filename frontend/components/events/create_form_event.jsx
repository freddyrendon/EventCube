import React from "react";
import { Link } from 'react-router-dom';




class CreateEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            host_id: this.props.currentUser,
            category_id: "",
            event_title: "",
            event_body: "",
            location: "",
            event_start_date: "", 
            event_start_time: ""
        };
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }


    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('event[host_id]', this.state.host_id);
        formData.append('event[category_id]', this.state.category_id);
        formData.append('event[event_title]', this.state.event_title);
        formData.append('event[event_body]', this.state.event_body);
        formData.append('event[location]', this.state.location);
        formData.append('event[event_start_date]', this.state.event_start_date); 
        formData.append('event[event_start_time]', this.state.event_start_time); 



        this.props.createEvent(formData)
        .then(response => {
            // console.log(response)
            if (this.props.formType === 'Create an event') {
                this.props.history.push(`/`);
            }
            else {
                this.props.history.push(`/events/${response.event.id}`)
            };
        })
    }



    render() {
        // console.log(this.state)
        
        return (
            <div className="form-container">
                <form className="form-info-container" onSubmit={this.handleSubmit}>
                            <div className='form-info-input'>
                                <label className='form-label'>Event Title</label>
                                <br />
                                <input
                                    className='form-input-text'
                                    type="text"
                                    onChange={this.update('event_title')}
                                    value={this.state.event_title}
                                    placeholder="Event Title"
                                />
                            </div>

                        <div className='form-location'>
                            <div className='form-info-input'>
                                <label className='form-label'>Event Location</label>
                                <br />
                                <input
                                    className='form-input-text'
                                    type="text"
                                    placeholder="Enter location"
                                    onChange={this.update('location')}
                                    value={this.state.location}
                                />
                            </div>
                        </div>
                        <div className='form-date'>
                            <div className='form-info-input'>
                                <label className='form-label'>Event Date</label>
                                <br />
                                <input
                                    className='form-input'
                                    type="date"
                                    onChange={this.update('event_start_date')}
                                    value={this.state.event_start_date}
                                />
                            </div>
                        </div>
                        <div className='form-time'>
                            <div className='form-info-input'>
                                <label className='form-label'>Event Start Time</label>
                                <br />
                                <input
                                    className='form-input'
                                    type="time"
                                    onChange={this.update('event_start_time')}
                                    value={this.state.event_start_time}
                                />
                            </div>
                        </div>
                        <div>
                        <label className="form-label"> Select Category</label>
                            <br />
                        <select className="form-input" onChange={this.update('category_id')}>
                                <option value="3">Music</option>
                                <option value="4">Performing & Visual Arts</option>
                                <option value="5">Travel & Outdoor</option>
                                <option value="6">Health</option>
                                <option value="7">Hobbies</option>
                                <option value="8">Business</option>
                                <option value="9">Food & Drink</option>
                                <option value="10">Sports & Fitness</option>
                            </select>
                        </div>
                        <div className='form-description'>
                            <div className='form-info-input'>
                                <label className='form-label'>Description</label>
                                <br />
                                <textarea
                                    className='form-input-text'
                                    type="text"
                                    placeholder="Enter Description"
                                    onChange={this.update('event_body')}
                                    value={this.state.event_body}
                                />
                            </div>
                        </div>
                <button className='form-button' type='submit'>submit</button>
                </form>
            </div>
        )
    }
}

export default CreateEvent;