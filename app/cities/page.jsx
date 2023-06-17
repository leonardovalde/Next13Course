const cities = [
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
];
function page() {
  return (
    <div>
      {cities.map(({ name, code }) => (
        <h1 key={code}>
          {name} - {code}
        </h1>
      ))}
    </div>
  );
}

export default page;
