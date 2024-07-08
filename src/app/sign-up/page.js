const signPage = () => {
  return (
    <div>
      <div className="pl-4">
        <h2 className=" text-xl font-bold reddit-mono-lol">Sign Up:</h2>
        <br />
        <br />
        <from>
          <label htmlFor="Name" className="pl-4">
            Name:{" "}
          </label>
          <input type="text" name="Name" required />
          <br />
          <br />
          <label htmlFor="Name" className="pl-4">
            Email:{" "}
          </label>
          <input type="text" name="Name" required />
          <br />
          <br />
          <h2 className=" text-xl font-bold reddit-mono-lol">Gender:</h2>
          <div className="pl-4 grid grid-cols-2 w-48">
            <label>Male: </label>
            <input type="radio" name="Gender" required />
            <br />
            <div></div>
            <label>Female: </label>
            <input type="radio" name="Gender" required />
          </div>
          <br />
          <br />
          <div>
            <h2 className=" text-xl font-bold reddit-mono-lol">Experience:</h2>
            <br />
            <textarea placeholder="Experience..." className="pl-4"></textarea>
          </div>
          <input
            type="submit"
            value={"Sign Up"}
            className="text-white bg-black rounded-sm p-2 pr-3 pl-3 hover:opacity-85 active:scale-95 transition-all"
          />
        </from>
      </div>
    </div>
  );
};
export default signPage;
