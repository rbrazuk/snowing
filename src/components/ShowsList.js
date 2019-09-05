import React, {Component} from 'react';
import _ from 'lodash';

class ShowsList extends Component {
    constructor(props) {
        super(props);
    }

    renderShows() {
        return _.map(this.props.shows.data, show => {
            return (
                <div className='show-item' key={show.date}>
                    <div className='show-column'>
                        <p className='show-date'>{show.date}</p>
                        <p>{show.venue}</p>
                        <p>{show.city}, {show.country}</p>
                    </div>
                    <div className='show-column'>
                        <a href={show.eventLink}>
                            <button>rsvp</button>
                        </a>
                        <a href={show.ticketLink}>
                            <button>tickets</button>
                        </a>
                    </div>
                    
                    
                </div>
            );
        })
    }
    
    render() {
        return (
            <div>{this.renderShows()}</div>
        );
    }
}

export default ShowsList;