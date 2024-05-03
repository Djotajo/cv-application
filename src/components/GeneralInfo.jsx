function GeneralInfo() {
  return (
    <>
      <label htmlFor="firstName">
        First Name <input type="text" />
      </label>
      <label htmlFor="lastName">
        Last Name <input type="text" />
      </label>
      <label htmlFor="email">
        E-mail <input type="email" />
      </label>
      <label htmlFor="phone">
        Phone <input type="text" />
      </label>
    </>
  );
}

export default GeneralInfo;
