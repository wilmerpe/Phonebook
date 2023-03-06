import Person from "./Person"

const Persons = ({persons, query}) => {
	return (
		<>
			{
				persons
				.filter(person => person.name.toLowerCase().includes(query))
				.map(({ name, number }) => (
					<Person key={name} name={name} number={number} />
				))
			}
		</>
	)
}

export default Persons
