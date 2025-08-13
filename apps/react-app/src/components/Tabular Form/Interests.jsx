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
    const { checked, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      interests: checked
        ? [...prev.interests, value]
        : prev.interests.filter((p) => p !== value),
    }));
  }

  return (
    <div className="form">
      {interestOptions.map((option) => (
        <div key={option}>
          <label>
            <input
              type="checkbox"
              name="interests"
              value={option}
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
