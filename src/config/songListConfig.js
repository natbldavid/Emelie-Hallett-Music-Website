const songCategories = [
  {
    key: 'weddings',
    title: 'Weddings',
    songs: [
      "ABBA - Dancing Queen",
      "Adele - Hiding My Heart Away",
      "Adele - Make You Feel My Love",
      "Aerosmith - I Don't Wanna Miss A Thing",
      "Amy Winehouse - Valerie",
      "Anne Marie - 2002",
      "Anne Marie - FRIENDS",
      "Anson Seabra - Welcome To Wonderland",
      "BeeGees - How Deep Is Your Love",
      "Billie Eilish - Ocean Eyes",
      "Billie Eilish, Khalid - Lovely",
      "Birdy - Wings",
      "Bruno Mars - Count On Me",
      "Bruno Mars - Locked Out of Heaven",
      "Bruno Mars - Marry You",
      "Bryan Adams - Heaven",
      "Callum Scott - You Are The Reason",
      "Cian Ducrot - I’ll Be Waiting",
      "Chris Rea - Driving Home For Christmas",
      "Christina Perri - A Thousand Years",
      "Colbie Caillat - Bubbly",
      "Dua Lipa - Don’t Start Now",
      "Dua Lipa - Scared To Be Lonely",
      "Ed Sheeran - Afterglow",
      "Ed Sheeran - Kiss Me",
      "Ed Sheeran - Perfect",
      "Ed Sheeran - Tenerife Sea",
      "Ed Sheeran - Thinking Out Loud",
      "Elton John - Can You Feel The Love Tonight",
      "Ellie Goulding - Your Song",
      "Ella Henderson - Yours",
      "George Ezra - Budapest",
      "Gnarls Barkley - Crazy",
      "James Arthur - Empty",
      "James Arthur - Falling Like Stars",
      "James Arthur - Say You Won’t Let Go",
      "James Bay - Us",
      "Jason Mraz - I Won’t Give Up",
      "Jason Mraz - I’m Yours",
      "John Lennon - Imagine",
      "Jorja Smith - On My Mind",
      "JP Saxe & Julia Michaels - If The World Was Ending",
      "Justin Bieber - Anyone",
      "Justin Bieber - Mistletoe",
      "Katy Perry - I Kissed A Girl",
      "Khalid - Better",
      "Kings of Leon - Use Somebody",
      "Kodaline - All I Want",
      "Luelle - I Get To Love You",
      "Meghan Trainor - Dear Future Husband",
      "Naughty Boy ft. Beyoncé - Running (Lose It All)",
      "Noah Kahan - Stick Season",
      "Oasis - Wonderwall",
      "One Direction - Little Things",
      "Rihanna - Umbrella",
      "Rihanna - We Found Love",
      "Sia - Helium",
      "Snow Patrol - Chasing Cars",
      "Stephen Sanchez - Until I Found You",
      "Stevie Wonder - Isn’t She Lovely",
      "The Pussycat Dolls - Stick Wit You",
      "The Script - The Man Who Can’t Be Moved",
    ],
  },
  {
    key: 'social',
    title: 'Social Events',
    songs: [
      "A Great Big World & Christina Aguilera - Say Something",
      "Adele - Don’t You Remember",
      "Adele - Easy On Me",
      "Adele - Make You Feel My Love",
      "Adele - Rolling in the Deep",
      "Adele - Set Fire To The Rain",
      "Adele - Someone Like You",
      "Adele - Turning Tables",
      "Alexander 23 - IDK You Yet",
      "Amy Winehouse - Valeria",
      "Amy Winehouse - Valerie",
      "Andra Day - Rise Up",
      "Ariana Grande - Into You",
      "Bill Withers - Just The Two of Us",
      "Billie Eilish - Happier Than Ever",
      "Billie Eilish - Listen Before I Go",
      "Billie Eilish - My Future",
      "Bonnie Raitt - I Can’t Make You Love Me",
      "Brandi Carlile - The Story of My Life",
      "Bruno Mars - Locked Out of Heaven",
      "Britney Spears - ...Baby One More Time",
      "Britney Spears - Everytime",
      "Callum Scott - You Are The Reason",
      "Catie Turner - Prom Queen",
      "Cee Lo Green - Forget You",
      "Chantal Kreviazuk - Feels Like Home",
      "Chris Rea - Driving Home For Christmas",
      "Coldplay - Yellow",
      "Corinne Bailey Rae - Put Your Records On",
      "Dean Lewis - Waves",
      "Drake - Passionfruit",
      "Dua Lipa - Don’t Start Now",
      "Dua Lipa - Scared To Be Lonely",
      "Edward Sharpe & The Magnetic Zeros - Home",
      "Ed Sheeran - Afterglow",
      "Ed Sheeran - Flashlight",
      "Ed Sheeran - I See Fire",
      "Ed Sheeran - Perfect",
      "Ed Sheeran - Photograph",
      "Ed Sheeran - Save Myself",
      "Ed Sheeran - The A Team",
      "Ed Sheeran - The Joker & The Queen",
      "Ed Sheeran - Thinking Out Loud",
      "Ella Henderson - Your Song",
      "Elton John - Can You Feel The Love Tonight",
      "Elton John - Your Song",
      "Emeli Sande - Clown",
      "Emeli Sande - Read All About It",
      "Emily Burns - Is It Just Me",
      "Emily Burns - Is It Just Me?",
      "Finneas - Break My Heart Again",
      "George Ezra - Hold My Girl",
      "Gloria Gaynor - I Will Survive",
      "Gnarls Barkley - Crazy",
      "Hillsong United - Oceans",
      "Harry Styles - As It Was",
      "Harry Styles - Fine Line",
      "James Arthur - Empty Space",
      "James Arthur - Falling Like Stars",
      "James Arthur - Safe Inside",
      "James Arthur - Say You Won’t Let Go",
      "James Bay - Let It Go",
      "James Bay - Us",
      "Jaymes Young - Happiest Year",
        "Jason Mraz - I Won’t Give Up",
      "Jason Mraz - I’m Yours",
      "Jessie J - Flashlight",
      "Jessie J - Price Tag",
      "Jenna Raine - See You Later",
      "Jeremy Zucker & Chelsea Butler - You Were Good To Me",
      "John Lennon - Imagine",
      "Julia Lester & Olivia Rodrigo - Wondering",
      "Julia Michaels - Issues",
      "Justin Bieber - Anyone",
      "Justin Bieber - Holy",
      "Justin Bieber - Mistletoe",
      "Katy Perry - I Kissed A Girl",
      "Katy Perry - Teenage Dream",
      "Katy Perry - Unconditionally",
      "Kodaline - All I Want",
      "Kodaline - The One",
      "Labrinth - Jealous",
      "Lady Gaga - Million Reasons",
      "Lady Gaga - Paparazzi",
      "Lady Gaga & Bradley Cooper - Shallow",
      "Lauren Spencer-Smith - Fingers Crossed",
      "Lewis Capaldi - Bruises",
      "Lewis Capaldi - Forget Me",
      "Lewis Capaldi - Hold Me While You Wait",
      "Lewis Capaldi - Lost On You",
      "Lily Allen - Smile",
      "Lily Allen - Somewhere Only We Know",
      "Lonestar - Amazed",
      "Lord Huron - The Night We Met",
      "Lorde - Royals",
      "Mimi Webb - Good Without",
      "Natalie Imbruglia - Torn",
      "Niall Horan - Slow Hands",
      "Noah Kahan - Stick Season",
      "Norah Jones - Don’t Know Why",
      "Oasis - Wonderwall",
      "One Direction - Story of My Life",
      "One Direction - You & I",
      "Olivia Rodrigo - Drivers License",
      "Paramore - The Only Exception",
      "Phil Collins - You’ll Be In My Heart",
      "P!nk - What About Us",
      "Pink - What About Us",
      "Radiohead - Creep",
      "Rihanna - Diamonds",
      "Rihanna - We Found Love",
      "Ronan Keating - When You Say Nothing At All",
      "Ruth B - Lost Boy",
      "Sam Smith - I’m Not The Only One",
      "Sam Smith - Lay Me Down",
      "Selena Gomez - Only You",
      "Snow Patrol - Chasing Cars",
      "Sigrid - Don’t Kill My Vibe",
      "Stevie Wonder - Isn’t She Lovely",
      "Tate McRae - You Broke Me First",
      "The 1975 - Somebody Else",
      "The Beatles - Let It Be",
      "The Beatles - Here Comes The Sun",
      "The Lumineers - Ho Hey",
      "The Pussycat Dolls - Stick Wit U",
      "The Script - The Man Who Can’t Be Moved",
      "Tina Turner - The Best",
      "Tink - Treat Me Like Somebody",
      "Tom Odell - Heal",
      "Tom Odell - Another Love",
      "Tom Walker - Leave a Light On",
      "Tones & I - Dance Monkey",
      "Tones & I - Dance Monkey",
    ],
  },
  {
    key: 'christmas',
    title: 'Christmas',
    songs: [
      "Brenda Lee - Rockin’ Around The Christmas Tree",
      "Chris Rea - Driving Home For Christmas",
      "Lily Allen - Somewhere Only We Know",
      "Mariah Carey - All I Want For Christmas",
      "Shakin’ Stevens - Merry Christmas Everyone",
      "Slade - Merry Xmas Everyone",
      "Justin Bieber - Mistletoe",
      "Wham - Last Christmas",

      // Without artist or duplicates
      "Have Yourself A Merry Little Christmas",
      "Silent Night"
    ]
  }
];

export default songCategories;
