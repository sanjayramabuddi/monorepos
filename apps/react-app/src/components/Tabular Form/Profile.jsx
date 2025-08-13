export const Profile = ({ formData, setFormData, error }) => {
  const { name, email, age } = formData;

  function handleData(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="form">
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={name} onChange={handleData} />
        {error.name && <span className="error">{error.name}</span>}
      </div>
      <div>
        <label>Age:</label>
        <input type="number" name="age" value={age} onChange={handleData} />
        {error.age && <span className="error">{error.age}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleData} />
        {error.email && <span className="error">{error.email}</span>}
      </div>
    </div>
  );
};
