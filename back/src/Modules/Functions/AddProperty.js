function AddProperty(data, NomPropriété, ValeurPropriété){
    const addData = data.map(element => {
        return {...element, NomPropriété: ValeurPropriété}
    })
}