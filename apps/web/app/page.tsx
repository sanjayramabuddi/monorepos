import { add } from "@repo/math/add";
import { Admin } from "@repo/ui/admin";

export default function Home() {
  return <div>{add(1, 2)}
  <Admin />
  </div>;
}
