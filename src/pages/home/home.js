import React from 'react';
import { Link } from 'react-router-dom';

import { Categories, Title, Button } from './styles';

export default function Home () {
    return (
        <div>
        <Title>Select Category</Title>
        <Categories>
            <Link to='/GeneralKnowledge' className="link">
                <Button>General Knowledge</Button>
            </Link>

            <Link to='/Geography'>
                <Button>Geography</Button>
            </Link>

            <Link to='/History'>
                <Button>History</Button>
            </Link>

            <Link to='/Mythology'>
                <Button>Mythology</Button>
            </Link>

            <Link to='/Books'>
                <Button>Books</Button>
            </Link>

            <Link to='/Film'>
                <Button>Film</Button>
            </Link>

            <Link to='/Music'>
                <Button>Music</Button>
            </Link>


        </Categories>
        </div>
    )
}