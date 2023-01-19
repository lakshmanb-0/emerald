import { Instagram, Reddit, Twitter } from "@mui/icons-material";

function Team() {
  const data = [
    {
      id: 1,
      image: `${require("../Images/person_1.jpg")}`,
      title: "Anya  Forger ",
    },
    {
      id: 2,
      image: `${require("../Images/person_2.jpg")}`,
      title: "Levi Ackerman",
    },
    {
      id: 3,
      image: `${require("../Images/person_3.jpg")}`,
      title: "Monkey D Luffy",
    },
    {
      id: 4,
      image: `${require("../Images/person_4.jpg")}`,
      title: "Ichigo Kurasaki",
    },
  ];
  return (
    <main className="bg-black py-10" id="our team">
      <h1 className="section_headings">
        Our <span className="text-green-500">Team</span>
      </h1>
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 max-w-[1400px] mx-auto">
        {data.map((item) => (
          <div
            key={item.id}
            className="text-white flex items-center flex-col py-10 mx-8"
          >
            <img
              src={item.image}
              alt="profilePic"
              width={200}
              className="object-cover rounded-full h-[200px] select-none"
            />
            <h1 className="font-bold text-3xl text-green-500 mt-2 text-center ">
              {item.title}
            </h1>
            <p className=" text-xl text-gray-200 mx-2">MUA</p>

            <section className="flex items-center space-x-4">
              <div className="team_div">
                <Instagram
                  className="text-white h-4 "
                  sx={{ fontSize: "1.5rem" }}
                />
              </div>
              <div className="team_div">
                <Twitter
                  className="text-white h-4 "
                  sx={{ fontSize: "1.5rem" }}
                />
              </div>
              <div className="team_div">
                <Reddit
                  className="text-white h-4 "
                  sx={{ fontSize: "1.5rem" }}
                />
              </div>
            </section>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Team;
