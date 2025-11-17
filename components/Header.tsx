import Navbar from "./Navbar";
import Topbar from "./Topbar";

export default function Header() {
  return (
    <div>
      <Topbar />

      {/* Middle Bar */}
      <div>middle bar</div>

      {/* Navigation Bar */}
      <div>
        <Navbar />
      </div>
    </div>
  );
}
