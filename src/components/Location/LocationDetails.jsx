import {ListGroup} from 'react-bootstrap';
import IconUsers from '../../assets/img/Users.svg';
import IconTimezone from '../../assets/img/Timezone.svg';
import IconViews from '../../assets/img/Views.svg';

const LocationDetails = (props) => {
    let createdAt = new Date(props.createdAt);

    return( <ListGroup variant="flush">
    <ListGroup.Item className={props.classValue}><span className="pe-2"><img alt="icon user" src={IconUsers}/></span>{props.userCount} users</ListGroup.Item>
    <ListGroup.Item className={props.classValue}><span className="pe-2"><img alt="icon timezone" src={IconTimezone}/></span>{createdAt.toLocaleTimeString().slice(0,-3)} (GMT+01:00)</ListGroup.Item>
    <ListGroup.Item className={props.classValue}><span className="pe-2"><img alt="icon views" src={IconViews}/></span>5 Views</ListGroup.Item>
</ListGroup>)
}


export default LocationDetails;