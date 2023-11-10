const mongoose = require("mongoose");
require("dotenv").config();
const Book = require("./festival/artist");

mongoose.connect(process.env.DATABASE_URL);

async function seed() {
  await Artist.create([
    {
      name: "Portishead",
      description:
        "Portishead are an English band formed in 1991 in Bristol. They are often considered one of the pioneers of trip hop music. The band are named after the nearby town of the same name, eight miles west of Bristol, along the coast. Portishead consists of Geoff Barrow, Beth Gibbons and Adrian Utley, while sometimes citing a fourth member, Dave McDonald, an engineer on their first records. Live shows also featured DJ Andy Smith. Their debut album, Dummy, was met with critical acclaim in 1994. Two other studio albums were issued: Portishead in 1997 and Third in 2008.",
      imageUrl: "img.png", //(link)
      stage: "", //(either main stage or second stage, can figure it out later)
      stageTime: number, //(can figure it out later)
      favourite: true,
      youtube: "https://www.youtube.com/watch?v=un8EW82GwKc", // (embed link)
      instagram: "", // (link)
      facebook: "", // (link)
      rating: 4, //(out of 5)
    },
    {
      name: "Mazzy Star",
      description:
        "U.S. band, based in Santa Monica, California, and part of the Paisley Underground movement. They are known for their crossover styles of folk, country and psychedelic rock. Formed in 1990 by David Roback (guitar and formerly of Rainy Day and Rain Parade) and Hope Sandoval (vocals).They began together as Opal in 1989 recording a promotional song named Ghost Highway. They changed their name in 1990 to Mazzy Star and re-recorded the song Ghost Highway for their debut album. The band never officially split up during these years but did take a long hiatus between 1997 and 2013. They played their last concert on March 2, 2019 in Mexico City. Mazzy Star effectively ended after the passing of David Roback in February 2020.",
      imageUrl: "",
      stage: "",
      stageTime: 2,
      favourite: true,
      youtube: "https://www.youtube.com/watch?v=ImKY6TZEyrI",
      instagram: "",
      facebook: "",
      rating: 5,
    },
    {
      name: "Dido",
      description:
        "Born: December 25, 1971 // London, England, United Kingdom. Her debut album 'No Angel', has sold more than 15 million copies worldwide. Eminem sampled (from the same album) the chorus verse from 'Thankyou,' for his hit single 'Stan,' giving Dido even more recognition. Her follow-up album 'Life For Rent,' also did well and sold over 12 million copies, meaning both of her first two albums are on the list of UK best selling albums of all time. Leaving Dido the only artist to have two albums featured on it. At the peak of her popularity, she was also the best paid artist in UK. She has been married to author Rohan Gavin since 2010.",
      imageUrl: "",
      stage: "",
      stageTime: 3,
      favourite: true,
      youtube: "https://www.youtube.com/watch?v=j-fWDrZSiZs",
      instagram: "",
      facebook: "",
      rating: 4,
    },
  ]);

  console.log("Artist created");
  mongoose.disconnect();
}

seed();
