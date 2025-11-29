import { useState } from "react";
import Title from "../../components/title";
import { roomsDummyData } from "../../assets/assets";

const ListRoom = () => {
  const [rooms, setRooms] = useState(roomsDummyData);

  return (
    <div>
      <Title
        align="left"
        font="outfit"
        title="Room listings"
        subTitle="View, edit, or manage all listed rooms."
      />

      <p className="text-black mt-7 font-medium">All rooms</p>

      <div className="w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll mt-3">
        <table className="w-full">
          <thead className="bg-gray-50 sticky top-0 z-10">
            <tr>
              <th className="py-3 px-3 text-gray-600 font-medium text-left">
                Name
              </th>
              <th className="py-3 px-3 text-gray-600 font-medium text-left max-sm:hidden">
                Facility
              </th>
              <th className="py-3 px-3 text-gray-600 font-medium text-center">
                Price / night
              </th>
              <th className="py-3 px-3 text-gray-600 font-medium text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {rooms.map((item, index) => (
              <tr key={index}>
                <td className="py-3 px-3 text-black border-t border-gray-300">
                  {item.roomType}
                </td>

                <td className="py-3 px-3 text-black border-t border-gray-300 max-sm:hidden">
                  {item.amenities.join(", ")}
                </td>

                <td className="py-3 px-3 text-black border-t border-gray-300 text-center">
                  Rp {item.pricePerNight.toLocaleString()}
                </td>

                <td className="py-3 px-3 border-t border-gray-300 text-center">
                  {/* TOGGLE SWITCH */}
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={item.isAvailable}
                      onChange={() => {
                        const updated = [...rooms];
                        updated[index].isAvailable =
                          !updated[index].isAvailable;
                        setRooms(updated);
                      }}
                    />

                    {/* BACKGROUND */}
                    <div className="w-10 h-5 bg-slate-400 rounded-full peer-checked:bg-blue-500 transition-colors"></div>

                    {/* MOVING DOT */}
                    <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></span>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListRoom;
