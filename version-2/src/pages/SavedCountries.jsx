import { useState, useEffect } from "react";

export default function SavedCountries() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    bio: "",
  });
  const [newestUserData, setNewestUserData] = useState(null);

  //handleChange
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  //handleSubmit - reset form data
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      country: "",
      bio: "",
    });
  };

  // get newest user form data
  const getNewestUserData = async () => {
    try {
      const response = await fetch(
        "/api/get-newest-user",
        {
          method: "GET",
        },
      );
      const data = await response.json();
      const userData = data[0];
      setNewestUserData({
        fullName: userData.name,
        email: userData.email,
        country: userData.country_name,
        bio: userData.bio,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNewestUserData();
  }, []);

  return (
    <>
      {newestUserData && <h2>Welcome {newestUserData.fullName}</h2>}
      <h2>My Saved Countries</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>My Profile</legend>

          <label htmlFor="name" className="visually-hidden">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
            placeholder="Full Name"
            required
          />

          <label htmlFor="email" className="visually-hidden">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleFormChange}
            placeholder="Email"
            required
          />

          <label htmlFor="country" className="visually-hidden">
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleFormChange}
            placeholder="Country"
          />

          <label htmlFor="bio" className="visually-hidden">
            Bio
          </label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleFormChange}
            id="bio"
            rows="10"
            placeholder="Bio"
          ></textarea>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
