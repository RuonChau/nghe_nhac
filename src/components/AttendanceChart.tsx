import { wh_search } from "@/constant";
import { more_horizontal_black } from "@/constant/icons";
import Image from "next/image";

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src={more_horizontal_black} alt="moreDark" width={wh_search} height={wh_search}/>
      </div>

      {/* CHART */}
      {/* <div className="relative w-full h-[75%]">
         <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
            <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
          </BarChart>
        </ResponsiveContainer>
      </div> */}

      {/* BOTTOM */}
      {/* <div className="flex justify-center gap-16">
        <div className="flex flex-col items-center gap-y-1">
          <div className="w-5 h-5 bg-lamaSky rounded-full "/>
          <h1 className="font-bold">1,234</h1>
          <h1 className="text-xs text-gray-300 ">Boys (55%)</h1>
        </div>
        <div className="flex flex-col items-center gap-y-1">
          <div className="w-5 h-5 bg-lamaYellow rounded-full"/>
          <h1 className="font-bold">1,234</h1>
          <h1 className="text-xs text-gray-300 ">Girls (55%)</h1>
        </div>
      </div> */}
    </div>
  );
}

export default AttendanceChart;