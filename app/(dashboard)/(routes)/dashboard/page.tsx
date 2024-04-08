import{UserButton} from "@clerk/nextjs"

const DashboardPage = ()=>{
  return (
    <div>
       <h2>Dashboardpage(Protected)</h2>
       <UserButton afterSignOutUrl="/"/>
    </div>
    // <Button variant="destructive">Click me</Button>
   
    // <h2 className="text-6xl text-yellow-400">HEllo Ai- Saas</h2>
  );
}
export default DashboardPage;