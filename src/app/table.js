import "./globals.css";
const Table = () => {
  return (
    <div>
      <h2 className=" text-xl font-bold reddit-mono-lol pl-4">Upcoming Classes:</h2>
      <div className="flex justify-center">
        <table>
          <thead>
            <tr>
              <th>location</th>
              <th>Topic</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>NewYork</td>
              <td>Js & JQ</td>
            </tr>
            <tr>
              <td>San Francisco</td>
              <td>HTML & Css</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Table;
