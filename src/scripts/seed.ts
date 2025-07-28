import Country from "../models/Country";

const countries = [
  { name: "India", code: "IN" },
  { name: "Brazil", code: "BR" },
  { name: "Germany", code: "DE" },
  { name: "France", code: "FR" },
  { name: "Argentina", code: "AR" },
  { name: "Australia", code: "AU" },
  { name: "England", code: "ENG" },
  { name: "South Africa", code: "SA" },
];

export const seedCountries = async () => {
  try {
    const count = await Country.countDocuments();
    if (count > 0) {
      console.log("Countries already seeded, skipping...");
      return;
    }
    await Country.deleteMany({});
    await Country.insertMany(countries);
    console.log("Countries seeded successfully!");
  } catch (error) {
    console.error("Error seeding countries:", error);
    // mongoose.disconnect();
  }
};


