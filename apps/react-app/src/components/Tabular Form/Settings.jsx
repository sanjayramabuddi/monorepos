export const Settings = ({ formData, setFormData }) => {
  const { theme } = formData;

  function handleTheme(e) {
    setFormData((prev) => ({ ...prev, theme: e.target.name }));
  }

  return (
    <div className="form">
      <div>
        <label>
          <input
            type="radio"
            name="light"
            checked={theme === "light"}
            onChange={(e) => handleTheme(e)}
          />
          Light
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="dark"
            checked={theme === "dark"}
            onChange={(e) => handleTheme(e)}
          />
          Dark
        </label>
      </div>
    </div>
  );
};
