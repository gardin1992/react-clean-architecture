import { Link } from "react-router-dom";

import { PageTitle } from "app/presentation/components/page-title";

export default function Home() {
  return (
    <div>
      <PageTitle title="Home" />
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
