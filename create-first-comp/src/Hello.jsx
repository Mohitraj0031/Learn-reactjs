function Hello(){

    let name = 'Vijay';
    let age = 25;
    let fullName = () => {
        return 'Vijay Raj';
    }

    return <h2>
        Hello ,I am your developer {fullName()} Age {age}  </h2>
}

export default Hello;