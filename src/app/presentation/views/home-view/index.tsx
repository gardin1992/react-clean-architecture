import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <ul>
        <li>
          <Link to={"/order-management"}>/order-management</Link>
        </li>
        <li>
          <Link to={"/product-management"}>/product-management</Link>
        </li>
      </ul>
    </div>
  );
}
