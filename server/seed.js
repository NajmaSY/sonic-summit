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
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr7ye8aRtbPEp1ThBy9dHXVy7K18qM2GD8zQ&usqp=CAU",
      stage: "One",
      stageTime: 1600,
      favourite: true,
      youtube: "https://www.youtube.com/watch?v=un8EW82GwKc",
      instagram: "https://www.instagram.com/portisheadofficial/?hl=en",
      facebook: "https://www.facebook.com/portishead/?locale=en_GB",
      rating: 4,
    },
    {
      name: "Mazzy Star",
      description:
        "U.S. band, based in Santa Monica, California, and part of the Paisley Underground movement. They are known for their crossover styles of folk, country and psychedelic rock. Formed in 1990 by David Roback (guitar and formerly of Rainy Day and Rain Parade) and Hope Sandoval (vocals).They began together as Opal in 1989 recording a promotional song named Ghost Highway. They changed their name in 1990 to Mazzy Star and re-recorded the song Ghost Highway for their debut album. The band never officially split up during these years but did take a long hiatus between 1997 and 2013. They played their last concert on March 2, 2019 in Mexico City. Mazzy Star effectively ended after the passing of David Roback in February 2020.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsF9YzxwyZJCzwcara-21FMJhV5XlBkhlVLg&usqp=CAU",
      stage: "Two",
      stageTime: 1600,
      favourite: true,
      youtube: "https://www.youtube.com/watch?v=ImKY6TZEyrI",
      instagram: "https://www.instagram.com/mazzystar/?hl=en",
      facebook: "https://www.facebook.com/MazzyStarOfficial/?locale=en_GB",
      rating: 5,
    },
    {
      name: "Dido",
      description:
        "Born: December 25, 1971 // London, England, United Kingdom. Her debut album 'No Angel', has sold more than 15 million copies worldwide. Eminem sampled (from the same album) the chorus verse from 'Thankyou,' for his hit single 'Stan,' giving Dido even more recognition. Her follow-up album 'Life For Rent,' also did well and sold over 12 million copies, meaning both of her first two albums are on the list of UK best selling albums of all time. Leaving Dido the only artist to have two albums featured on it. At the peak of her popularity, she was also the best paid artist in UK. She has been married to author Rohan Gavin since 2010.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfyLlIzXmZOoRe2fMiRzPVR12JmrtAyRS13w&usqp=CAU",
      stage: "Three",
      stageTime: 1600,
      favourite: true,
      youtube: "https://www.youtube.com/watch?v=j-fWDrZSiZs",
      instagram: "https://www.instagram.com/dido/?hl=en-gb",
      facebook: "https://www.facebook.com/dido/?locale=en_GB",
      rating: 4,
    },
    {
      name: "Ed Sheeran",
      description:
        "Ed Sheeran is a Grammy-winning singer-songwriter known for hits like 'Shape of You' and 'Thinking Out Loud'. Sheeran has sold more than 150 million records worldwide, making him one of the world's best-selling music artists. He has 101 million RIAA-certified units in the US, and two of his albums are in the list of the best-selling albums in UK chart history.",
      imageUrl:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fc%2Fc1%2FEd_Sheeran-6886_%28cropped%29.jpg&tbnid=BOeGH5_TnkaCbM&vet=12ahUKEwjCtYH94sCCAxUCeqQEHfC9B58QMygAegQIARB0..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FEd_Sheeran&docid=3YE10CZnfxKwJM&w=2698&h=3410&q=ed%20sheeran%20description&ved=2ahUKEwjCtYH94sCCAxUCeqQEHfC9B58QMygAegQIARB0",
      stage: "One",
      stageTime: 1730,
      favourite: true,
      youtube: "https://www.youtube.com/watch?v=T0brO3x4h30",
      instagram: "https://www.instagram.com/teddysphotos/?hl=en",
      facebook: "https://www.facebook.com/EdSheeranMusic/?locale=en_GB",
      rating: 5,
    },
    {
      name: "Beyoncé",
      description:
        "Beyoncé is a global icon, singer, and actress, known for her powerful vocals and stage presence. Beyoncé, (born September 4, 1981, Houston, Texas, U.S.), American singer-songwriter and actress who achieved fame in the late 1990s as the lead singer of the R&B group Destiny's Child and then launched a hugely successful solo career. She won a record-setting 32 Grammy Awards.",
      imageURL:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.britannica.com%2F59%2F204159-050-5055F2A9%2FBeyonce-2013.jpg&tbnid=D4JHB-_Jp1cBGM&vet=12ahUKEwj_p8_N48CCAxW0mCcCHYvABFUQMygBegQIARA1..i&imgrefurl=https%3A%2F%2Fwww.britannica.com%2Fbiography%2FBeyonce&docid=FRFCG1ZcG9MbhM&w=1374&h=1600&q=beyonce%20description&ved=2ahUKEwj_p8_N48CCAxW0mCcCHYvABFUQMygBegQIARA1",
      stage: "Two",
      stageTime: 1730,
      favourite: true,
      youtube: "https://www.youtube.com/watch?v=pAzyYLsndCg",
      instagram: "https://www.instagram.com/beyonce/?hl=en",
      facebook: "https://www.facebook.com/beyonce/?locale=en_GB",
      rating: 5,
    },
    {
      name: "The Weekend",
      description:
        "The Weekend, originally Abel Tesfaye, broke into the music scene with the 2011 mixtape House of Balloons. He went on to work with Drake, Wiz Khalifa and others, while building his own career as an artist. In 2015, the Weeknd enjoyed huge success with the Grammy-winning album Beauty Behind the Madness, which boasted the hit single “Can't Feel My Face.” His follow-up album, Starboy (2016), also won a Grammy and featured collaborations with artists such as Daft Punk",
      imageURL:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fthe-weeknd%2Fimages%2F7%2F74%2F7eb1d5ffd73eb5895aa14484c017fbaf93-the-weeknd-2.rsquare.w700.jpg.webp%2Frevision%2Flatest%3Fcb%3D20220928104904&tbnid=PuiNNJJanL28OM&vet=12ahUKEwjRtMXD5MCCAxVwnCcCHQAZDYkQMygFegQIARBQ..i&imgrefurl=https%3A%2F%2Fthe-weeknd.fandom.com%2Fwiki%2FThe_Weeknd&docid=ZovSI9Oomwn9CM&w=700&h=700&q=the%20weeknd%20description&ved=2ahUKEwjRtMXD5MCCAxVwnCcCHQAZDYkQMygFegQIARBQ",
      stage: "Three",
      stageTime: 1730,
      favourite: true,
      youtube: "https://www.youtube.com/watch?v=xnvkStb2jT0",
      instagram: "https://www.instagram.com/theweeknd/?hl=en",
      facebook: "https://www.facebook.com/theweeknd/?locale=en_GB",
      rating: 5,
    },
    {
      name: "Arcade Fire",
      description:
        "Arcade Fire is a Canadian indie rock band from Montréal, Quebec, consisting of husband and wife Win Butler and Régine Chassagne, alongside Richard Reed Parry, Tim Kingsbury and Jeremy Gara.",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD63qdUMsBhFfZx_eLD2CSMrvyLqlH1AiBFg&usqp=CAU",
      stage: "One",
      stageTime: 1900,
      favourite: true,
      youtube: "https://www.youtube.com/watch?v=zC30BYR3CUk",
      instagram: "https://www.instagram.com/arcadefire/",
      facebook: "https://www.facebook.com/arcadefire/",
      rating: 4,
    },

    {
      name: "Rage Against The Machine",
      description:
        "Rage Against the Machine is an American rock band from Los Angeles, California. Formed in 1991, the group consists of vocalist Zack de la Rocha, bassist and backing vocalist Tim Commerford, guitarist Tom Morello, and drummer Brad Wilk. ",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtR0XXQ67kdtrolV8IBp4CTpTKSIKGSZ5SVQ&usqp=CAU",
      stage: "Two",
      stageTime: 1900,
      favourite: true,
      youtube: "https://www.youtube.com/watch?v=4KXdU3cZbNQ",
      instagram: "https://www.instagram.com/rageagainstthemachine/",
      facebook: "https://www.facebook.com/RATM/?locale=en_GB",
      rating: 5,
    },
    {
      name: "Chase & Status",
      description:
        "Chase & Status are an English electronic music duo composed of Saul Milton and Will Kennard. In addition, Andy Gangadeen is the drummer when the band performs live. MC Rage formerly performed as MC with the group, but left in July 2021 to focus on solo ventures.",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg4vtzq6uCfiH8mZ2PQAWq1vqV5P3AvxuzNg&usqp=CAU",
      stage: "Three",
      stageTime: 1900,
      favourite: true,
      youtube:
        "https://www.google.com/search?q=chase+and+status+&sca_esv=581884118&rlz=1C1ONGR_en-GBGB1058GB1060&hl=en&biw=682&bih=772&tbm=vid&sxsrf=AM9HkKnVBj_ii088Gcy0WDxGcaEFKGg6DA%3A1699873578372&ei=KgNSZeiXFsb-7_UPw5KXmAQ&ved=0ahUKEwjo1LTG6sCCAxVG_7sIHUPJBUMQ4dUDCA0&uact=5&oq=chase+and+status+&gs_lp=Eg1nd3Mtd2l6LXZpZGVvIhFjaGFzZSBhbmQgc3RhdHVzIDIEECMYJzIIEAAYigUYhgMyCBAAGIoFGIYDMggQABiKBRiGAzIIEAAYigUYhgNIwgVQqAVYqAVwAHgAkAEAmAHdAaAB3QGqAQMyLTG4AQPIAQD4AQGIBgE&sclient=gws-wiz-video#",
      instagram: "https://www.instagram.com/chaseandstatus/?hl=en",
      facebook: "https://www.facebook.com/chaseandstatus/",
      rating: 5,
    },

    {
      name: "London Grammar",
      description:
        "London Grammar are an English indie pop band formed in Nottingham in 2009. The band consists of Hannah Reid, Dan Rothman and Dominic “Dot” Major. Their debut extended play, Metal & Dust, was released in February 2013 by Metal & Dust Recordings, while their debut album, If You Wait, was released a few months later in September.",
      imageURL:
        "https://data.mothership.tools/mothershiptools-ukprod/wp-content/uploads/2020/08/158291321_4008154989223494_4221019205440010443_n.jpg",
      stage: "One",
      stageTime: 2030,
      favourite: true,
      youtube:
        "https://www.youtube.com/watch?v=Wo80bXyEbkE&pp=ygUOTG9uZG9uIEdyYW1tYXI%3D",
      instagram: "https://www.instagram.com/londongrammar/",
      facebook: "https://www.facebook.com/londongrammar/?locale=en_GB",
      rating: 4,
    },
    {
      name: "The Gorillaz",
      description:
        "Gorillaz are an English virtual band created in 1998 by musician Damon Albarn and artist Jamie Hewlett, from London. The band primarily consists of four fictional members: 2-D, Murdoc Niccals, Noodle and Russel Hobbs.",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf-0EJM6Ks0coP6ONr3t6Kah5yvpfnJibcsg&usqp=CAU",
      stage: "Two",
      stageTime: 2030,
      favourite: true,
      youtube: "https://www.youtube.com/watch?v=HyHNuVaZJ-k",
      instagram: "https://www.instagram.com/gorillaz/?hl=en",
      facebook: "https://www.facebook.com/Gorillaz/?locale=en_GB",
      rating: 5,
    },
    {
      name: "The Killers",
      description:
        "The Killers are an American rock band formed in Las Vegas in 2001 by Brandon Flowers and Dave Keuning. After going through a number of short-term bass players and drummers in their early days, both Mark Stoermer and Ronnie Vannucci Jr. joined the band in 2002.",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRStGJJIEA1mV-7DV29ydgJhG96fyGhfWQv6w&usqp=CAU",
      stage: "Three",
      stageTime: 2030,
      favourite: true,
      youtube: "https://www.youtube.com/watch?v=gGdGFtwCNBE",
      instagram: "https://www.instagram.com/thekillers/",
      facebook: "https://en-gb.facebook.com/Thekillers/",
      rating: 4,
    },
  ]);

  console.log("Artist created");
  mongoose.disconnect();
}

seed();
