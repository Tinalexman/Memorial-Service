import React, { useState, useRef } from "react";

import { motion, useInView } from "framer-motion";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";



const Tributes = () => {
  const [index, setIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const tributes: {
    title: string;
    content: string;
    author: string;
    subText?: string;
  }[] = [
    {
      title: "TRIBUTE TO MY HUSBAND",
      content:
        "I never expected it would be this soon that death will separate us. I lack words to express my feelings and all that I can say is I surrender all to Jesus.You were a good husband, father, friend, mentor and disciplinarian.You loved your maker and you served Him sincerely. I will miss you is an understatement, the family misses you as each day passes by. I am glad our relationship got better daily in all our years together. I thank God for allowing us to get married and raise our children together, you always prayed for us daily and also appreciated little things done.You always prayed for me that God will continue to help me. I believe it more now because I don’t know how to carry on.  You had no grudge against anyone but love for all . Rest on till I come.",
      author: "Eunice Olufunmilayo Fayomi (Wife)",
    },
    {
      title: "TRIBUTE TO MY FATHER",
      content:
        "Daddy you left me on the 4th day of March, a day I will never forget! You were a man of unwavering faith and boundless love. Your presence in my life was a guiding light, you were a pillar of strength to me. You were a God-fearing man in the truest sense, you lived your life with grace, humility, and a deep-rooted belief in the power of love and kindness. Daddy your love knew no bounds - it was as vast as the sky, as deep as the ocean, and as enduring as time itself. Your gentle words, your reassuring smile, (which Your Favorite daughter in-law Ope will miss) and your unwavering support were a constant source of comfort and inspiration to all who were fortunate enough to know you. You  taught me the value of integrity, the importance of empathy, and the beauty of a life lived in service to others. Every day, you walked the path of righteousness with unwavering dedication, setting an example for us all to follow. Your prayers were a testament to your deep connection with God, and your actions spoke volumes about the strength of your convictions and the depth of your love for humanity. As I bid farewell to you daddy, I take solace in the knowledge that your spirit lives on in the memories we hold dear, in the values you instilled in us as a family and in the love that continues to bind our family together. Though you may no longer walk beside us in the physical realm, but your presence will forever linger in our hearts, a beacon of hope, love, and unwavering faith. Rest in peace, dear father, your legacy of love and faith will endure for eternity. Daddy I love you and will miss you. From Ayo (as you always call me).",
      author: "Venerable Samuel Ayobami Fayomi (Son)",
    },
    {
      title: "TRIBUTE TO MY FATHER",
      content:
        "As a man you lived, and as a man of God you lived well “To God be the glory”. There are many things I would miss but I am grateful for the lessons and words of advice. You always wanted the best for me and I always wondered why your words always came to me in my most trying times. Now I can understand that it is because you always saw what was coming and tried to prepare us for it all. You always had confidence in me and my ability and when people ask me why I was always so sure of myself, I would smile and say it was because I had the best teacher and mentor. Your legacy would live on, and your work would continue for many generations to come. Many of us who knew you would miss you dearly, and many who did not get to meet you in person would learn of you and wish they did. Your story has only just begun to be written and it is in the timeless sand of our memory. Rest now my wise father and teacher in fellowship with the saints and at the bosom of your creator. Until I am called to join you it would remain 'Hold the fort…'.",
      author: "Joshua Olusegun Fayomi (Son)",
    },
    {
      title: "TRIBUTE TO MY FATHER",
      content:
        "Being my father was a privilege, calling you daddy is something I can’t trade for anything.  you had been my rock growing up and a standard when it was time to pick a life partner. You gave us a form of parenting that is lacking today, and that was what I imported into my new home.  You taught us values, the importance of the name and family we came out from. We are not billionaires but this name is priceless. Above all, you taught us family, support and love. We may have our differences but love covers a multitude of sins. You may not have been the perfect daddy but you are the best daddy, and coming back the second time I will choose you in my space because you were a sweet soul.",
      author: "Hannah Owonuwa (Only Daughter)",
    },
    {
      title: "TRIBUTE TO MY FATHER",
      content:
        "Daddy, your unwavering dedication to serving God and humanity leaves an indelible mark. You're my hero and role model. Just as you were supposed to relish the rewards of your hard work, God called you home according to His divine plan. Though He gave and now He has taken away, we honor His will. Amen.",
      author: "Emmanuel Adeleke Fayomi (Jnr)",
    },
    {
      title: "TRIBUTE TO A FATHER AND ICON WHO LIVED FOR IMPACT",
      content:
        "Daddy, for 11 years, I had 2 fathers. Until I didn’t. You were always a supporter, an encourager, a pastor, a leader and a father to me. 7 days before you took a bow, we still drank wine together and you prayed for me and Ayo. You gave me the remaining wine and told me to carry on. You told me to continue in goodness and fear of the Lord. Even when mummy was asking if you were giving a toast or a sermon, you laughed that it was how the professionals do it. We all laughed not knowing it would be our last physical moment together. I choose to remember you for being a supportive father, a respectable person and a man of integrity. Your last admonition and prayers lingers in my heart, and your charming smile will never leave my memory. Your jokes on meticulously, systematically, professionally…O daddy, I will miss all of them. You were a father to me, a dad, a priest. We will carry on, just as your last words to us. We will carry on your good name, and the great legacy you have left behind. Prof Prof! Sun re o, till we meet at Jesus feet.",
      author: "Opeoluwa Fayomi",
    },
    {
      title: "TRIBUTE TO MY FATHER-IN-LAW",
      content:
        "In the tapestry of life, some threads stand out for their strength, their kindness, and their unwavering support. Venerable (Professor) Jacob Adeleke Fayomi was one such thread, woven into the fabric of our lives with grace and gentleness. A pillar of wisdom and compassion, Professor Fayomi exuded a quiet strength that touched the lives of all who were fortunate enough to know him. His gentle nature and calm demeanor were a beacon of light in turbulent times, offering solace and guidance to those in need. To me, he was more than a father-in-law; he was a mentor, a confidant, and a guiding force. During my research project, his assistance was invaluable, his expertise a guiding star in the vast expanse of academia. With patience and wisdom, he navigated the complexities of research alongside me, offering insights that shaped the trajectory of my work. But beyond his scholarly contributions, it was his kindness that left the deepest impression. His words of encouragement, spoken with sincerity and love, echoed in my heart long after they were spoken. 'Dami, my son, we are praying for you,' he would say, a simple yet profound reminder of the power of faith and familial support. In every interaction, Professor Fayomi embodied the essence of goodness, leaving an indelible mark on the hearts of all who crossed his path. His legacy is not only measured in academic achievements but in the countless lives he touched with his kindness and generosity. As we bid farewell to a remarkable soul, let us carry forward his legacy of compassion and love. Though he may no longer walk beside us, his spirit will continue to illuminate our paths, guiding us with the same gentle grace that defined his life. Rest in peace, dear Professor Fayomi, knowing that your light will shine on in the hearts of all who knew you. Adieu DADDY!!!!",
      author: "Commander Damilola Owonuwa (Son-in-law)",
    },
    {
      title: "TRIBUTE TO MY BROTHER",
      content:
        "It is with heavy heart but gratitude to the almighty God I write this. You ought to be the one running around for my burial but death snatched you away, but who are we to query God. The book of Isaiah 57 verse 1 says 'the righteous perish and no man takes it to heart, merciful men are taken away, while no one considers that the righteous are taken away from evil.'' The entire Abomila royal famiy both at home and diaspora mourn you. We love you but God loves you more. KARE ABOMILA MOTUN-OMOAMOKO FUNNO AND ARUBEPIPO OMO OLIKORO SOJIJI, OMO ABOKAREREWU. Sunre Odigba, rest in perfect peace until we meet again on the resurrection day.",
      author: "Samuel Adewale Fayomi (Brother)",
    },
    {
      title: "TRIBUTE TO MY BROTHER",
      content:
        "It has really dawned on me that my beloved brother, friend and confidant Prof Adeleke Fayomi has truly gone, when I have to write this tribute about his life and times in the past tense. I missed being my brother's kindergarten pupil at St Paul's Anglican Church in 1964, because I had earlier in 1963 enrolled at RCM church kindergarten school. However those who were his pupils then still testify till today, the good foundation he laid in their lives. His commitment to education was unassailable. His contributions to education were equally legendary. He had through his Adeleke Fayomi foundation helped a lot of indigent children through their education. He personified the attributes of Okun man that include strength of character, fierce, sturdy independence, candour, objectivity, sincerity, reliability and resoluteness. He succeeded in raising the status and reckoning of Ijumu people wherever he was. He was a thoroughbred and incorruptible academician and clergyman. His records of excellent and unsurpassable service o his people right from his student days as President Iyara Students' union, and President, Ijumu students' union are heartwarming. It should be stated without equivocation that while at the helm of affairs as Provost, College of Agriculture and Animal Science, Mando , Kaduna and College of Agriculture Kabba respectively, that spoils of office could not corrupt Prof. Fayomi. He was just and transparent. He loathed any indecency and malfeasance. Prof Fayomi to paraphrase, Josiah Gilbert Holland (1819- 1881) was one leader “ whom the lust of office could not kill” A leader “whom the spoils of office couldn't buy'' A leader who had honor, “who will not lie” A legend that had always “stood before a demagogue and damned his treacherous flattering without winking” I sincerely salute my brother Prof Jacob Adeleke Fayomi aka OKI, the legend, the great and amiable clergyman and academician as he truly represented the totality of what Abomila stand for as a family. He used his sagacity and creative ingenuity through the leading of the Holy Spirit to bring to an end, through an annual family revival crusade which lasted for about five years an evil pattern in the family. His monumental ecclesiastical and academic successes remain a pride to our family. He was a bridge builder. He was not just a pillar but he was a rallying point. He bestrode the family like a colossus; as he was an effective change agent. It was therefore a rude shock to have received the news of his passage on Monday 4th March 2024. We are encouraged by the sweet memories of his good works and services to humanity and to his Maker. My beloved brother, friend and confidant has gone to be with God, to a city where there will be no pains, mourning, darkness or such like; to join the Saints triumphs. We are not without hope, because we are persuaded that one day, that beautiful resurrection morning, we shall meet to part no more. It is therefore good night to a great Icon, an enigma, a suave reverend gentleman, and thoroughbred academician, PROFESSOR (VENERABLE) JACOB ADELEKE FAYOMI.",
      author: "Funso Fayomi (Sister)",
    },
    {
      title: "TRIBUTE TO AN ICON",
      content:
        "The painful loss of Prof Adeleke Fayomi has been hard to accept. He lived a disciplined and careful life devoted to serving God and humanity. As death is an inevitable end to an earthly sojourn,  he has gone to peacefully rest in the bosom of the Lord he loved and served. We pray for the family and all loved ones to find the fortitude to bear the loss.",
      author: "The Olowoniyi's",
    },
    {
      title: "TRIBUTE TO THE BEST UNCLE AND MENTOR",
      content:
        "It is so painful and saddening that death couldn't allow you, Uncle, Prof. Jacob Adeleke Fayomi to live and reap the benefits of all you have sowed. It is glaring to all that during your lifetime, helping others was your greatest joy giver and hobby. You inspired me to pursue a career in Veterinary medicine as a young boy growing up being the pioneer Veterinary Surgeon from our hometown. You showed me the way to success. When there was no job for me several years after graduation, you took me up as your son and personal project and fought your way to get me a job. By the special grace of God, you made me what I am today. You gave everyone a helping hand without discrimination. You were a lover of education and you freely and willingly gave it to the children of the poor who could not afford it. As in the words of Williams Shakespeare 'When the poor have cried, Professor Adeleke Fayomi had wept'. How I wished everybody could be like you. Uncle, your legacies live on, and only God knows why you have to leave us now. Time will not permit me to speak of your dedicated service to God as an ordained minister for over four decades. How you combined that feat with your glorious academic career is a testimony of your passion for hard work and excellence. I pray that God should give us the fortitude to bear your irreplaceable loss. Your memory will forever be in our hearts. Good night, Uncle. May your gentle soul rest in perfect peace. Amen.",
      author: "Dr. Aderemi Theophilus Dare",
      subText:
        "College of Agriculture and Animal Science\nAhmadu Bello University, Mando, Kaduna",
    },
    {
      title: "TRIBUTE TO A MAN OF VALOR",
      content:
        "My family's contact with the then Rev Dr Jacob Fayomi many years ago was through his service to God with regular production of the bulletin which he regularly published and distributed. From afar, l saw him as a very dedicated Clergyman despite being a lecturer at Ahmadu Bello University Zaria. Providence brought our relationship closer around 2013/2014 when we gave our daughter in marriage to his son and we became a family. The Late Venerable Professor Fayomi was posted to the Cathedral of St Michaels later as the Canon-in-Residence and he distinguished himself with his intellectual contributions to the Pastoral and administrative duties of the Church. It was a great shock when we were informed of your death on that Monday. We are in total surrender to God on your transition as we know that your Pastoral and humanitarian services will not be in vain  in Jesus name Amen. You led an exemplary life and one faithful to God and his service till your call. The  Lord Almighty will continue to grant your wife, and the children and the Church heavenly comfort to bear the pain of your departure. May the Lord grant you eternal rest.",
      author: "Engr. & Mrs. Akin Odeyemi (In-laws)",
    },
    {
      title: "TRIBUTE TO AN ICON",
      content:
        "How  are the mighty fallen? Our visionier, Professor (Venerable) Jacob Adeleke Fayomi, the founder of Adeleke Fayomi Education foundation (AFEF) who started this foundation 13 years ago from his personal resources, which he has awarded and rewarded many Obas, community leaders, retired teachers in primary and secondary schools. He has granted  scholarships to pupils and students in schools. At the same time individuals had benefited from the foundation. The great giver has left us suddenly! Who is to continue with the work you left behind? On behalf of all the committee members of the foundation we salute you good night! You are no more but your work and character abound plentifully! May your soul rest in perfect peace (amen). We shall meet and rejoice together on judgment day. Baba sun re o.",
      author: "Elder (Hon) C.A.O. Oluwole",
      subText: "Adeleke Fayomi Education Foundation\nFoundation Secretary",
    },
    {
      title: "TRIBUTE TO OUR FATHER AND BROTHER",
      content:
        "On behalf of the P.C.C of the above named church vicar men fellowship mother union and the entire church  congregation, we write with a deep sense of sympathy to commiserate with you on the demise of our beloved father and brother (late) Ven, Prof. Jacob Adeleke Fayomi. The death of our father has created a big vacuum which light be very difficult to fill but we take solace in the fact that the totality of his life has been spent in the service of the Lord and his magnanimous contribution to the church of God  his philanthropic generosity, to his immediate communities is immeasurable and unquantifiable. The almighty God who is all sufficient will be there for you at all times and in all  place Amen the Lord will see you through in all your endeavors in Jesus name (amen) With love from the entire Anglican church of redemption family (Iyara)",
      author: "Diocese of Ijumu",
      subText: "St Paul's Anglican Cathedral Church, Iyara",
    },
    {
      title: "TRIBUTE TO A GREAT MAN",
      content:
        "In loving memory of Professor Jacob Adeleke Fayomi, a cherished colleague and kinsman whose presence graced our lives with wisdom, warmth, and inspiration. His passion for teaching, dedication to scholarship, and unwavering kindness touched countless hearts, which are encapsulated in the Adeleke Fayomi foundation, that have given scholarships to indigent students of the community. His legacy lives on in the countless minds he shaped and the enduring impact he made on our academic community. Though he may have departed this world, his spirit continues to guide and inspire us, reminding us to strive for excellence and to approach life with empathy and grace. Rest in peace, dear Professor Jacob Adeleke Fayomi. Your memory will forever be cherished, and your contributions are never forgotten.",
      author: "Prof. Bukola Catherine Akin-Osanaiye",
    },
    {
      title: "TRIBUTE TO OUR FATHER AND MENTOR",
      content:
        "The news of your death came to us as a great shock on that faithful Monday 4th of March, 2024. Which was not to God who knows all things.. We sincerely pray for the comforting of the holy spirit for wife, family   and Church in Jesus name, amen. It was in the year 2019 that God by divine Orchestration brought Daddy to us. Working under him was indeed a period greatlearning and capacity building for us as a family. He is a father and a friend who exemplified what He preached, who's leadership and spiritual coverage we enjoyed and acquired. Not minding Daddy Fayomi’s  qualifications and height in life, he appreciated and celebrated those working with him. He is a man of humility, great sacrifice both for God's kingdom and God's people. His life is worthy of emulation in all areas, a good pastor, manager and administrator. Working with him till his retirement was one great opportunity God gave us to learn from him about life and Ministry. Daddy, your death came to us in great shock having been with you few weeks before and outlined how we will meet after your journey to the village and look into the Adeleke foundation how to strengthen the foundation for effective running, this meeting we were unable to meet and we heard the news of your glorious return to God. Daddy, we sincerely love you and appreciate your impact and legacies in our generation. You are indeed a great blessing to our generation. We know from scripture that death is an inevitable journey and Precious in the sight of the LORD is the death of his saints. May our tears be wiped away by the same hope in Christ Jesus that assured him, the promise of life after here. Daddy rest in peace...Until we meet again.",
      author: "Rev. Victor & Mrs. Hephzibah Eboh and family",
    },
    {
      title: "TRIBUTE TO AN ICON",
      content:
        "I don't know the right word to capture the love I have for him..I am emotionally down since I heard of his demise.I came to know him when I was posted  to CAAS mando from Zaria. He was a Pillar of encouragement to me..He taught me to embrace hard work and  should not take 'no' as an answer to a challenges..He encouraged me to nurse my  dream of bringing Fishery unit to CAAS mando when he became the provost of the college and today that dream has became a department  with ND HND before I was retired He brought many changes in the college at his tenure as a provost.  He  advised me  like a son ,even to the extent of teaching me how to be close to God by always searching the Scriptures,he created a platform for me to serve God through his Jesus monthly, today I am a pastor to  the glory of God. He advised me to settle down to be more responsible even when I had no dime for such a step, today I am a family man. How many will I say, Prof Fayomi loved God and doing charity. He has many adopted children whom he was sponsoring in school. He made his shoulder available for people to lean upon..I  and my entire family will miss him, I pray that God will comfort his family and the  entire body of Christ.",
      author: "Pastor James Etukudem",
    },
    {
      title: "TRIBUTE TO AN ICON",
      content:
        "Your sudden demise came as a shock. Looking back you exemplified a man with a strong spirit to achieve even if you stood alone against negative forces. I will remember you Prof. for this true life's lesson. 'Dare to stand and be sure to conquer'. Rest in Peace Sir.",
      author: "Dr. H.K. Makeri",
    },
    {
      title: "TRIBUTE TO AN ICON",
      content:
        "Prof. You have gone from our sight but not from the minds of those whom you have left an indelible mark. May your soul rest in peace. ",
      author: "Dr. Lateef A. Folorunsho",
    },
    {
      title: "TRIBUTE TO MY DEAR FRIEND",
      content:
        "'OKI' as you were fondly called by our childhood friends, your unexpected exit shocked me. You were very caring, reliable, generous and forgiving. I can never forget your support to me and my family. God loves you best. May your gentle soul rest in perfect Peace Amen.",
      author: "Biodun S. Olorunleke",
    },
    {
      title: "TRIBUTE TO AN ICON",
      content:
        "You are a great man, mentor, a father, a hero. God love you we have nothing to say, go well, may the good Lord grant unto you perfect rest till we meet and part no more.",
      author: "Ven. James Monday",
    },
    {
      title: "TRIBUTE TO A GREAT MAN",
      content:
        "Daddy, the time I knew you was such a wonderful time. Thank you for your love towards me and my family & not wanting us to be dependent on anybody, that is why you always talk about liberation. Thank you once more. Love you Daddy.",
      author: "Rev. Tongshinen Thomapson Barnabas",
    },
    {
      title: "TRIBUTE TO AN ICON",
      content:
        "Father God Almighty we give our praise for his life well lived through your grace. Receive his soul for eternal rest. Prof. Our father in the Lord, rest in perfect peace. Amen!",
      author: "Rev. & Mrs. Chime",
    },
    {
      title: "TRIBUTE TO A GREAT MAN",
      content:
        "We lost a great icon, the Ven. A great and humble gentleman to the core, soft spoken and strong beliverand strong believer on the spread of the Gospel – Erudite writer of series of God literatures. Rest in Peace.",
      author: "Engr. & Mrs. Ben Osaghele",
    },
    {
      title: "TRIBUTE TO AN ACADEMIC ICON",
      content:
        "On that certain and faithful day, the news of the death of our dear Professor of Veterinary Medicine, Professor Jacob Adeleke Fayomi hits us like a tsunami and we are then ruminating on the futility of this wild world that we all live in. How could an Academic Icon of repute suddenly sojourn in such an endless silence? Why this great silence in the afternoon of a man given so generously to humanity? What an agonistic disappearance in great silence! It is often said that the unwise has been considered wise in silence and poor rich in silence. Even in death we sojourn in silence. No wonder our dear Professor on the 4th March, 2023 went silently into a journey of no return. I therefore concluded within me that an iroko tree has fallen in the wilderness, a wisdom personified has left the shores of our community in Iyara Kingdom and a colossus in the academia has ascended into the great beyond, and true to my thought, the Iyara Community, the Okun Nation, the Academia, the Christendom has lost a great man of no mean repute in GREAT SILENCE. A sage at the age of 72 years from the Abomila family of Otun Quarters Iyara Ijumu Local Government of Kogi State, a retired Professor of Veterinary Medicine from Ahmadu Bello University Zaria, indeed a former provost of ABU College of Agriculture and Animal Science Kabba, and a Venerable, retired Priest of Church of Nigeria Anglican Communion Kaduna Diocese has gone home. May his soul rest in perfect Peace and in great silence that will permanently silence the enemies of his loved ones; the Children, his relations and those of the Abomila Dynasty that he left behind. It is with great joy and with total submission to the will of the Almighty God that we the OKUN PROFESSORS express our heartfelt condolences to his family for this great loss of one of our mentors, a priceless jewel of an inestimable value, an Academic juggernaut, a Patriarch, a role model in the Okun Profs WhatsApp Platform and a father in the midst of men. You were such a humane being with an unforgettable simplicity, so much so that we will all miss you as you go into this great silence. Your footprints will remain indelible in our hearts, and so also the memories of your years in the Abomila Dynasty. You cared so much and protected others as you did to yours, and to the glory of God we are here mourning you today but we are hopeful that we will meet you again at the sound of the trumpet, when we shall meet to part no more. Continue to rest in the bosom of our Lord, assured that it is well with those you left behind. Professor ADELEKE (You came, You saw and You conquered), Good night until we meet to part no more. Rest in perfect peace and be rest assured that you will forever be in our heart. ADIEU! ADIEU!! ADIEU!!! To God alone be ALL the Glory.",
      author: "Prof. Prince Micheal Sunday Ikupolati AP.",
      subText:
        "(Bsc, MBA, PhD, DBA, LLB, FCII, FCIIN, FIBMAN, FCIPDM, FPEFON, FNIM, FNIM, FIMCN, FPESAN, MIoD, CMC)\nInternational Consultant/CEO, Global Intellectual Consult Ltd. Abuja, FCT, Nigeria",
    },
  ];

  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <div
      id="tribute-div"
      ref={ref}
      className="w-[100vw] px-[200px] md:px-[5%] bg-white py-24 md:py-16 flex flex-col items-center gap-24 md:gap-20 transition-all ease-in-out duration-500"
    >
      <div className="flex md:flex-col items-center w-full justify-between">
        <h1 className="text-[100px] md:text-[60px] text-tertiary-100 leading-[100px] font-extrabold md:text-center">
          TRIBUTES
        </h1>
        <motion.div
          animate={{
            x: inView ? "0%" : "50%",
            transition: {
              duration: 1.5,
              ease: "easeIn",
            }
          }}
        className="w-[224px] h-[100px] flex items-center justify-between md:hidden">
          <div
            onClick={() => {
              setDirection(-1);
              setIndex(index === 0 ? tributes.length - 1 : index - 1);
            }}
            className="size-[100px] text-tertiary-100 border border-tertiary-100 hover:text-primary-10 hover:bg-tertiary-100 rounded-full flex items-center justify-center cursor-pointer transition-all ease-out duration-300"
          >
            <GoArrowLeft size={"26px"} />
          </div>
          <div
            onClick={() => {
              setDirection(1);
              setIndex(index === tributes.length - 1 ? 0 : index + 1);
            }}
            className="size-[100px] text-tertiary-100 border border-tertiary-100 hover:text-primary-10 hover:bg-tertiary-100 rounded-full flex items-center justify-center cursor-pointer transition-all ease-out duration-300"
          >
            <GoArrowRight size={"26px"} />
          </div>
        </motion.div>
      </div>

      <motion.div
        key={index}
        animate={{
          x: [direction === -1 ? "-100%" : "100%", "0%"],
          transition: {
            ease: "easeOut",
            duration: 0.75,
          },
        }}
        className="flex flex-col md:items-center gap-5 w-full items-start"
      >
        <h2 className="font-semibold text-[20px] md:text-[16px] leading-[30px] md:leading-[24px] text-tertiary-80 md:text-center">
          {tributes[index].title}
        </h2>

        <p className="font-normal text-tertiary-100 text-[20px] leading-[30px] md:text-center">
          {tributes[index].content}
        </p>

        <h3 className="font-bold text-[18px] md:text-[16px] leading-[24px] text-tertiary-80 md:text-center">
          {tributes[index].author} <br />
          <span>{tributes[index].subText && tributes[index].subText}</span>
        </h3>
      </motion.div>
      <div className="w-full md:flex items-center justify-center gap-10 hidden">
        <div
          onClick={() => {
            setDirection(-1);
            setIndex(index === 0 ? tributes.length - 1 : index - 1);
            const element: HTMLElement | null =
                document.getElementById("tribute-div");
              element?.scrollIntoView({
                behavior: "smooth",
              });
          }}
          className="size-[60px] text-tertiary-100 border border-tertiary-100 hover:text-primary-10 hover:bg-tertiary-100 rounded-full flex items-center justify-center cursor-pointer transition-all ease-out duration-300"
        >
          <GoArrowLeft size={"20px"} />
        </div>
        <div
          onClick={() => {
            setDirection(1);
            setIndex(index === tributes.length - 1 ? 0 : index + 1);
            const element: HTMLElement | null =
                document.getElementById("tribute-div");
              element?.scrollIntoView({
                behavior: "smooth",
              });
          }}
          className="size-[60px] text-tertiary-100 border border-tertiary-100 hover:text-primary-10 hover:bg-tertiary-100 rounded-full flex items-center justify-center cursor-pointer transition-all ease-out duration-300"
        >
          <GoArrowRight size={"20px"} />
        </div>
      </div>
    </div>
  );
};

export default Tributes;
