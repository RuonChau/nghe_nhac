import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import UserCard from "@/components/UserCard";
import { userCard } from "@/constant/userCard";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARD */}
        <div className="flex gap-4 justify-between flex-wrap">
          {userCard.map( e => (<UserCard key={e.type} type={e.type} date={e.date} quantity={e.quantity}/>))}
        </div>

        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col md:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart/>
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart/>
          </div>
        </div>

        {/* BOTTOM CHARTS */}
        <div className="">

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