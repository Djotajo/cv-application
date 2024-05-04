function GeneralInfo() {
  return (
    <>
      <form action="#">
        <h2>General Info</h2>
        <label htmlFor="firstName">
          First Name <input type="text" id="firstName" name="firstName" />
        </label>
        <label htmlFor="lastName">
          Last Name <input type="text" id="lastName" name="lastName" />
        </label>
        <label htmlFor="email">
          E-mail <input type="email" id="email" name="email" />
        </label>
        <label htmlFor="phone">
          Phone <input type="text" id="phone" name="phone" />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}

export default GeneralInfo;
