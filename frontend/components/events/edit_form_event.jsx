import React from "react";
import { Link } from 'react-router-dom';




class EditEvent extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.event)
        this.state = {
            host_id: this.props.event.host_id,
            category_id: this.props.event.category_id,
            event_title: this.props.event.event_body,
            event_body: this.props.event.event_body,
            location: this.props.event.location,
            event_start_date: this.props.event.event_start_date,
            event_start_time: this.props.event.event_start_time,
            photoUrl: this.props.event.photoUrl
        };
      
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);

    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleFile(e) {
        this.setState({ photoUrl: e.currentTarget.files[0] })
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
        formData.append('event[photo]', this.state.photoUrl); 

        debugger

        this.props.updateEvent(formData,this.props.event.id)
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
        // console.log(this.props.event.event_start_date)
        // console.log(this.state)
        return (
            <div className="form-container">
                <form className="form-info-container" onSubmit={this.handleSubmit}>
                    <div className='form-info'>
                        <div className='form-basic-info'>
                            <div className='form-info-input'>
                                <label className='form-label'>Event Title</label>
                                <input
                                    className='form-input-text'
                                    type="text"
                                    onChange={this.update('event_title')}
                                    value={this.state.event_title}
                                    placeholder="Event Title"
                                />
                            </div>
                        </div>
                        <div className='form-location'>
                            <div className='form-info-input'>
                                <label className='form-label'>Event Location</label>
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
                                <input
                                    className='form-input'
                                    type="date"
                                    placeholder="Enter date format MM-DD-YYYY"
                                    onChange={this.update('event_start_date')}
                                    value={this.state.event_start_date}
                                />
                            </div>
                        </div>
                        <div className='form-time'>
                            <div className='form-info-input'>
                                <label className='form-label'>Event Start Time</label>
                                <input
                                    className='form-input'
                                    type="time"
                                    placeholder="Enter Start time format HR:Mins AM/PM"
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

                        <div className='form-photo'>
                            <div className='form-info-input'>
                                <label className='form-label'>Event Image</label>
                                <div className="misc-text">IF EDITING, IMAGE MUST BE UPLOADED AGAIN</div>
                                <br />
                                <label className="form-input">
                                    <input
                                        type="file"
                                        onChange={this.handleFile}
                                    />
                                    Click to add event image.
                                </label>
                                <img className="img" src={this.state.photoUrl}></img>
                            </div>
                        </div>

                        <button className='form-button' type='submit'>submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditEvent;