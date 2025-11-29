import { useState } from "react";
import { assets, dashboardDummyData } from "../../assets/assets";
import Title from "../../components/title";

const Dashboard = () => {
  const [dashboardData] = useState(dashboardDummyData);

  return (
    <div>
      <Title
        align="left"
        font="outfit"
        title="Dashboard"
        subTitle="Monitor your room listings, track bookings and analyze revenue — all in one place."
      />

      {/* Statistik */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-8">
        <div className="bg-primary/5 border border-primary/10 rounded flex items-center p-3">
          <img src={assets.totalBookingIcon} className="hidden sm:block h-10" />
          <div className="ml-0 sm:ml-3 font-medium">
            <p className="text-blue-500 text-base sm:text-lg">Total bookings</p>
            <p className="text-neutral-600 text-sm sm:text-base">
              {dashboardData.totalBookings}
            </p>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/10 rounded flex items-center p-3">
          <img src={assets.totalRevenueIcon} className="hidden sm:block h-10" />
          <div className="ml-0 sm:ml-3 font-medium">
            <p className="text-blue-500 text-base sm:text-lg">Total revenue</p>
            <p className="text-neutral-600 text-sm sm:text-base">
              ${dashboardData.totalRevenue}
            </p>
          </div>
        </div>
      </div>

      {/* Recent Booking */}
      <h3 className="text-lg sm:text-xl text-blue-600 font-medium mb-5">
        Recent booking
      </h3>

      <div className="w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll">
        <table className="w-full">
          <thead className="bg-gray-50 sticky top-0">
            <tr>
              <th className="py-3 px-3 text-gray-600 font-medium">User name</th>
              <th className="py-3 px-3 text-gray-600 font-medium max-sm:hidden">
                Room name
              </th>
              <th className="py-3 px-3 text-gray-600 font-medium text-center">
                Total amount
              </th>
              <th className="py-3 px-3 text-gray-600 font-medium text-center">
                Payment status
              </th>
            </tr>
          </thead>

          <tbody className="text-xs sm:text-sm">
            {dashboardData.bookings.map((item, index) => (
              <tr key={index} className="border-t border-gray-300">
                <td className="py-3 px-3 text-black">{item.user.username}</td>
                <td className="py-3 px-3 text-black max-sm:hidden">
                  {item.room.roomType}
                </td>
                <td className="py-3 px-3 text-black text-center">
                  ${item.totalPrice}
                </td>
                <td className="py-3 px-3 text-center">
                  <span
                    className={`py-1 px-3 text-xs sm:text-sm rounded-full ${
                      item.isPaid
                        ? "bg-green-200 text-green-700"
                        : "bg-amber-200 text-amber-700"
                    }`}
                  >
                    {item.isPaid ? "Completed" : "Pending"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
