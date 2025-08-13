export const Profile = ({ formData, setFormData, error }) => {
  const { name, email, age } = formData;

  function handleData(e, type) {
    setFormData((prev) => ({ ...prev, [type]: e.target.value }));
  }

  return (
    <div className="form">
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => handleData(e, "name")}
        />
        {error.name && <span className="error">{error.name}</span>}
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={age}
          onChange={(e) => handleData(e, "age")}
        />
        {error.age && <span className="error">{error.age}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => handleData(e, "email")}
        />
        {error.email && <span className="error">{error.email}</span>}
      </div>
    </div>
  );
};
