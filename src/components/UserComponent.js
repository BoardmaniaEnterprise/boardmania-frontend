import {useState, useEffect} from 'react';
import userService from '../service/userService';

const UserComponent = () => {
    const [usersList, setUsersList] = useState();

    useEffect(() => {
        const getUsers = async() => {
            try {
                const response = await userService.getUsers();
                setUsersList(response.data);
                console.log(response.data);
            }
            catch (err) {
                console.log(err);
            }
        }

        getUsers();
    }, []);

    return (
        usersList
            ? (
                <div>
                    {
                        usersList.map((val, key) => {
                            return <p key={key}>{val.username}</p>
                        }) 
                    }
                </div>
            )
            : (<></>)

    );
}

export default UserComponent;