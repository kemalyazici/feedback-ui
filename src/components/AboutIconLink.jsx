import {Link} from 'react-router-dom';
import {FaQuestion} from "react-icons/fa";

function AboutIconLink(props) {
    return (
        <div className='about-link'>
            <Link to={{
                pathname: '/about',
                // search : '?sort=name',
                // hash : '#kemal'
            }}>
            <FaQuestion size={30}/>
            </Link>
        </div>
    );
}

export default AboutIconLink;