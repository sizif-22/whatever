const Footer = () => {
  return (
    <div className=" grid grid-cols-2 bg-black text-white p-3 absolute -bottom-44 w-full">
      <div className="pl-4">
        <h2 className=" text-xl font-bold reddit-mono-lol">Our Locations:</h2>
        <ul>
          <li>
            USA
            <ul>
              <li>New York</li>
              <li>Columbus</li>
              <li>Austin</li>
            </ul>
          </li>
          <li>
            World
            <ul>
              <li>Ottawa</li>
              <li>Sydney</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="pl-4">
        <h2 className=" text-xl font-bold reddit-mono-lol">Links:</h2>
        <ul>
          <a href="#">
            <li>X</li>
          </a>
          <a href="#">
            <li>FaceBook</li>
          </a>
          <a href="#">
            <li>GitHub</li>
          </a>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
