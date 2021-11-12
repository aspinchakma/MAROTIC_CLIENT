import React from 'react';
import useAuth from './../../../utilities/hooks/useAuth';

const Welcome = () => {
    const { user, isAdmin } = useAuth();
    return (
        <div>
            <h2 className="text-center">Welcome, {user.displayName}</h2>
            {isAdmin ? <h4 className="text-center">(Admin)</h4> :
                <h4 className="text-center">(User)</h4>
            }
        </div>
    );
};

export default Welcome;