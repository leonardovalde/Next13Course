const familyMembers = [
    {
        name: "Juan",
        age: 20
    },{
        name: "Pedro",
        age: 30
    },{
        name: "Maria",
        age: 40
    }
]
function page() {
  return (
    <div>
      {familyMembers.map(({ name, age }) => (
        <h1 key={name}>{name} - {age}</h1>
      ))}
    </div>
  )
}

export default page
