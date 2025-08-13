import { useState } from "react";
import { Profile } from "./Profile";
import { Interests } from "./Interests";
import { Settings } from "./Settings";

export const TabForm = () => {
  const [active, setActive] = useState(0);
  const [error, setError] = useState({});

  const [formData, setFormData] = useState({
    name: "Sanjay",
    age: 26,
    email: "sanjay@gmail.com",
    interests: ["travelling", "riding"],
    theme: "dark",
  });

  const configTab = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!formData.name || formData.name.length < 2)
          err.name = "Name not valid";
        if (!formData.age || formData.age < 18) err.age = "Age not valid";
        if (!formData.email || formData.email.length < 2)
          err.email = "Email not valid";
        setError(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interests",
      component: Interests,
      validate: () => {
        const err = {};
        if (!formData.interests.length < 1) err.interest = "Select atleast one";
        setError(err);
        return err.interest ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];
  const ActiveTabComp = configTab[active].component;

  function changeTab(index) {
    setActive(index);
  }

  function handleNext() {
    if (configTab[active].validate()) setActive((prev) => prev + 1);
  }

  function handlePrev() {
    if (configTab[active].validate()) setActive((prev) => prev - 1);
  }

  function handleSubmit() {
    console.log("Formdata - ", formData);
  }

  return (
    <div>
      <h2>Tabs Form</h2>

      <div className="tabs-header">
        {configTab.map((tab, index) => (
          <div className="tabs" key={index} onClick={() => changeTab(index)}>
            {tab.name}
          </div>
        ))}
      </div>
      {ActiveTabComp && (
        <ActiveTabComp
          formData={formData}
          setFormData={setFormData}
          error={error}
        />
      )}
      <div>
        {active > 0 && <button onClick={handlePrev}>Prev</button>}
        {active < configTab.length - 1 && (
          <button onClick={handleNext}>Next</button>
        )}
      </div>
      <div>
        {active === configTab.length - 1 && (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};
