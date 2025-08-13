export const Interests = ({ formData, setFormData, error }) => {
  const { interests } = formData;

  const interestOptions = [
    "travelling",
    "riding",
    "swimming",
    "exploring",
    "dancing",
  ];

  function handleInterest(e) {
    const { checked, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      interests: checked
        ? [...prev.interests, name]
        : prev.interests.filter((p) => p !== name),
    }));
  }

  return (
    <div className="form">
      {interestOptions.map((option) => (
        <div key={option}>
          <label>
            <input
              type="checkbox"
              name={option}
              checked={interests.includes(option)}
              onChange={handleInterest}
            />
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </label>
        </div>
      ))}
      {error.interest && <span className="error">{error.interest}</span>}
    </div>
  );
};
