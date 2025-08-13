export const Settings = ({ formData, setFormData }) => {
  const { theme } = formData;

  function handleTheme(e) {
    setFormData((prev) => ({ ...prev, theme: e.target.value }));
  }

  return (
    <div className="form">
      <div>
        <label>
          <input
            type="radio"
            name="theme"
            value="light"
            checked={theme === "light"}
            onChange={handleTheme}
          />
          Light
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="theme"
            value="dark"
            checked={theme === "dark"}
            onChange={handleTheme}
          />
          Dark
        </label>
      </div>
    </div>
  );
};
