import UserCard from "@/components/UserCard";
import { userCard } from "@/constant/userCard";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3">
        <div className="flex gap-4 justify-between flex-wrap">
          {userCard.map( e => (<UserCard key={e.type} type={e.type} date={e.date} quantity={e.quantity}/>))}
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3">
        right
      </div>
    </div>
  );
}

export default AdminPage;