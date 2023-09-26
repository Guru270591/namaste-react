const User = ({name, contact, location})=>{
    return (
        <div>

            <h1>Name: {name}</h1>
            <h2>Contact: {contact} </h2>
            <h3>Location: {location} </h3>
        </div>
    )
}

export default User;