import About from "./about";
import Table from "./table";
import Link from "next/link";
const HomePage = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <About />
      <br />
      <br />
      <br />
      <Table />
      <br />
      <br />
      <br />
      <div className="flex justify-center">
        <Link
          href={"./sign-up"}
          className=" text-white bg-black rounded-sm p-2 pr-3 pl-3 hover:opacity-85 active:scale-95 transition-all"
        >
          sign-Up page
        </Link>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};
export default HomePage;
