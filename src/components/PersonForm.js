const PersonForm = ({
	name,
	number,
	handleChangeName,
	handleChangeNumber,
	handleAddPerson
}) => {
	return (
		<>
		<form onSubmit={handleAddPerson}>
        <div>
          Name: <input value={name} onChange={handleChangeName} />
        </div>
        <div>
          Number: <input value={number} onChange={handleChangeNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
		</>
	)
}

export default PersonForm
