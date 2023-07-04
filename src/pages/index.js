import { DeleteIcon, InfoIcon, SearchIcon } from "@/assets/icons";
import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import { PATIENTSDATA, NOTESDATA } from "@/utils/constants";

const SidebarCard = ({ data }) => {
  return (
    <div className="group border-b border-[#C6C6C8] px-2 pt-4 pb-2 hover:bg-[#78B756] text-black hover:text-white  transition-colors">
      <div className="flex items-center justify-between">
        <h4 className=" hover:text-white">{data?.name}</h4>
        <button className="hover:text-secondary">
          <DeleteIcon />
        </button>
      </div>
      <div className="flex items-center justify-between text-[#848486] group-hover:text-white text-xs">
        <p>
          {data?.date} <InfoIcon className={"inline-block"} />
        </p>
        <span>{data?.time}</span>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-8 min-w-screen bg-primary">
      <Navbar />
      <main className="flex flex-1 mt-16 bg-white border-2 border-collapse rounded-tl-lg rounded-bl-lg border-tertiary h-auto 2xl:max-h-[820px] max-w-[1465px] mx-auto">
        <aside className="border-r-2 border-tertiary border-collapse min-w-[282px] flex flex-col">
          <section>
            <h3 className="my-5 font-bold text-center text-tertiary">
              All Recordings
            </h3>
            <div className="px-3 border-b border-[#C6C6C8] pb-3">
              <div className="d-flex bg-[#EEEEF0] px-5 rounded-md  text-[#848486]">
                <SearchIcon className={"inline-block mr-1"} />
                <input
                  className="bg-[#EEEEF0] font-light text-sm"
                  placeholder="Search"
                />
              </div>
            </div>
          </section>
          <section className="flex flex-col justify-between flex-1 h-100">
            <div className="flex-1">
              {PATIENTSDATA?.map(patient => (
                <SidebarCard data={patient} key={patient?.id} />
              ))}
            </div>
            <div className="flex items-center justify-between py-4 pl-6 pr-4 text-black border-t border-[#C6C6C8]">
              <button className="overflow-hidden rounded-full border border-[#848486] flex items-center p-1">
                <span className="inline-block w-12 h-12 rounded-full bg-secondary"></span>
              </button>
              <p>Recording Name</p>
            </div>
          </section>
        </aside>
        <section className="grid xl:grid-cols-3">
          <div className="flex flex-col">
            <Card data={NOTESDATA[0]} className="flex-[2]" />
            <Card data={NOTESDATA[1]} className={"border-b-0"} />
          </div>
          <div className="flex flex-col">
            <Card data={NOTESDATA[2]} />
            <Card data={NOTESDATA[3]} className={"border-b-0 flex-1"} />
          </div>
          <div className="flex flex-col">
            <Card data={NOTESDATA[4]} className={"border-r-0"} />
            <Card data={NOTESDATA[5]} className={"border-r-0"} />
            <div className="flex text-sm">
              <Card data={NOTESDATA[6]} />
              <Card data={NOTESDATA[7]} className={"border-r-0"} />
            </div>
            <Card
              data={NOTESDATA[8]}
              className={"border-b-0 border-r-0 flex-1 flex-grow"}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
