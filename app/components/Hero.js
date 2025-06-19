export default function Hero() {
  return (
    <div className="flex h-[100vh] justify-center flex-col max-w-[400px] min-sm:max-w-[600px] ms-10 min-sm:ms-20 gap-5">
      <h1 className="title text-[#F6526D] text-4xl ms-2">Massage & Beauty</h1>
      <h1 className="text-4xl min-sm:text-6xl font-bold">
        Experience the Beauty Services
      </h1>
      <p className="text-lg min-sm:text-xl text-zinc-600 w-[100%] font-medium">
        open for bookings for all treatments from 12 April.
      </p>
      <button className="bg-[#F6526D] text-white py-4 w-[240px] rounded-full text-md hover:bg-transparent hover:text-[#F6526D] hover:border-[#F6526D] hover:border-2  font-medium transition-colors duration-300 cursor-pointer">
        Perfect Treatment for You
      </button>
    </div>
  );
}
