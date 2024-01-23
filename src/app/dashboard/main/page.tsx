import { SimpleWidget, WidgetsGrid } from "@/components";
export const metadata = {
  title:'Dashboard'
}
export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl">DashBoard</h1>
      <span className="text-xl">Informacion General</span>
     <WidgetsGrid/>
    </div>
  );
}