import React, { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";

const Tributes = () => {
  const [index, setIndex] = useState<number>(0);
  const tributes: {
    title: string;
    content: string;
    author: string;
    subText?: string;
  }[] = [
    {
      title: "TRIBUTE TO MY HUSBAND",
      content: "",
      author: "Eunice Olufunmilayo Fayomi (Wife)",
    },
    {
      title: "TRIBUTE TO MY FATHER",
      content: "",
      author: "Venerable Samuel Ayobami Fayomi (Son)",
    },
    {
      title: "TRIBUTE TO MY FATHER",
      content: "",
      author: "Joshua Olusegun Fayomi (Son)",
    },
    {
      title: "TRIBUTE TO MY FATHER",
      content: "",
      author: "Hannah Owonuwa (Only Daughter)",
    },
    {
      title: "TRIBUTE TO MY FATHER",
      content: "",
      author: "Emmanuel Adeleke Fayomi (Jnr)",
    },
    {
      title: "TRIBUTE TO A FATHER AND ICON WHO LIVED FOR IMPACT",
      content: "",
      author: "Opeoluwa Fayomi",
    },
    {
      title: "TRIBUTE TO MY FATHER-IN-LAW",
      content: "",
      author: "Commander Damilola Owonuwa (Son-in-law)",
    },
    {
      title: "TRIBUTE TO MY BROTHER",
      content: "",
      author: "Samuel Adewale Fayomi (Brother)",
    },
    {
      title: "TRIBUTE TO MY BROTHER",
      content: "",
      author: "Funso Fayomi (Sister)",
    },
    {
      title: "TRIBUTE TO AN ICON",
      content: "",
      author: "The Olowoniyi's",
    },
    {
      title: "TRIBUTE TO THE BEST UNCLE AND MENTOR",
      content: "",
      author: "Dr. Aderemi Theophilus Dare",
      subText:
        "College of Agriculture and Animal Science\nAhmadu Bello University, Mando, Kaduna",
    },
    {
      title: "TRIBUTE TO A MAN OF VALOR",
      content: "",
      author: "Engr. & Mrs. Akin Odeyemi (In-laws)",
    },
    {
      title: "TRIBUTE TO AN ICON",
      content: "",
      author: "Elder (Hon) C.A.O. Oluwole",
      subText: "Adeleke Fayomi Education Foundation\nFoundation Secretary",
    },
    {
      title: "TRIBUTE TO OUR FATHER AND BROTHER",
      content: "",
      author: "Diocese of Ijumu",
      subText: "St Paul's Anglican Cathedral Church, Iyara",
    },
    {
      title: "TRIBUTE TO A GREAT MAN",
      content: "",
      author: "Prof. Bukola Catherine Akin-Osanaiye",
    },
    {
      title: "TRIBUTE TO OUR FATHER AND MENTOR",
      content: "",
      author: "Rev. Victor & Mrs. Hephzibah Eboh and family",
    },
    {
      title: "TRIBUTE TO AN ICON",
      content: "",
      author: "Pastor James Etukudem",
    },
    {
      title: "TRIBUTE TO AN ICON",
      content: "",
      author: "Dr. H.K. Makeri",
    },
    {
      title: "TRIBUTE TO AN ICON",
      content: "",
      author: "Dr. Lateef A. Folorunsho",
    },
    {
      title: "TRIBUTE TO MY DEAR FRIEND",
      content: "",
      author: "Biodun S. Olorunleke",
    },
    {
      title: "TRIBUTE TO AN ICON",
      content: "",
      author: "Ven. James Monday",
    },
    {
      title: "TRIBUTE TO A GREAT MAN",
      content: "",
      author: "Rev. Tongshinen Thomapson Barnabas",
    },
    {
      title: "TRIBUTE TO AN ICON",
      content: "Father God Almighty we give our praise for his life well lived through your grace. Receive his soul for eternal rest. Prof. Our father in the Lord, rest in perfect peace. Amen!",
      author: "Rev. & Mrs. Chime",
    },
    {
      title: "TRIBUTE TO A GREAT MAN",
      content: "We lost a great icon, the Ven. A great and humble gentleman to the core, soft spoken and strong beliverand strong believer on the spread of the Gospel – Erudite writer of series of God literatures. Rest in Peace.",
      author: "Engr. & Mrs. Ben Osaghele",
    },
    {
      title: "TRIBUTE TO AN ACADEMIC ICON",
      content: "On that certain and faithful day, the news of the death of our dear Professor of Veterinary Medicine, Professor Jacob Adeleke Fayomi hits us like a tsunami and we are then ruminating on the futility of this wild world that we all live in. How could an Academic Icon of repute suddenly sojourn in such an endless silence? Why this great silence in the afternoon of a man given so generously to humanity? What an agonistic disappearance in great silence! It is often said that the unwise has been considered wise in silence and poor rich in silence. Even in death we sojourn in silence. No wonder our dear Professor on the 4th March, 2023 went silently into a journey of no return. I therefore concluded within me that an iroko tree has fallen in the wilderness, a wisdom personified has left the shores of our community in Iyara Kingdom and a colossus in the academia has ascended into the great beyond, and true to my thought, the Iyara Community, the Okun Nation, the Academia, the Christendom has lost a great man of no mean repute in GREAT SILENCE. A sage at the age of 72 years from the Abomila family of Otun Quarters Iyara Ijumu Local Government of Kogi State, a retired Professor of Veterinary Medicine from Ahmadu Bello University Zaria, indeed a former provost of ABU College of Agriculture and Animal Science Kabba, and a Venerable, retired Priest of Church of Nigeria Anglican Communion Kaduna Diocese has gone home. May his soul rest in perfect Peace and in great silence that will permanently silence the enemies of his loved ones; the Children, his relations and those of the Abomila Dynasty that he left behind. It is with great joy and with total submission to the will of the Almighty God that we the OKUN PROFESSORS express our heartfelt condolences to his family for this great loss of one of our mentors, a priceless jewel of an inestimable value, an Academic juggernaut, a Patriarch, a role model in the Okun Profs WhatsApp Platform and a father in the midst of men. You were such a humane being with an unforgettable simplicity, so much so that we will all miss you as you go into this great silence. Your footprints will remain indelible in our hearts, and so also the memories of your years in the Abomila Dynasty. You cared so much and protected others as you did to yours, and to the glory of God we are here mourning you today but we are hopeful that we will meet you again at the sound of the trumpet, when we shall meet to part no more. Continue to rest in the bosom of our Lord, assured that it is well with those you left behind. Professor ADELEKE (You came, You saw and You conquered), Good night until we meet to part no more. Rest in perfect peace and be rest assured that you will forever be in our heart. ADIEU! ADIEU!! ADIEU!!! To God alone be ALL the Glory.",
      author: "Prof. Prince Micheal Sunday Ikupolati AP.",
      subText:
        "(Bsc, MBA, PhD, DBA, LLB, FCII, FCIIN, FIBMAN, FCIPDM, FPEFON, FNIM, FNIM, FIMCN, FPESAN, MIoD, CMC)\nInternational Consultant/CEO, Global Intellectual Consult Ltd. Abuja, FCT, Nigeria",
    },
  ];


  return (
    <div
      id="tribute-div"
      className="w-[100vw] px-[200px] md:px-[5%] bg-white py-24 md:py-16 flex flex-col items-center gap-24 md:gap-20"
    >
      <h1 className="text-[100px] md:text-[60px] text-tertiary-100 leading-[100px] font-extrabold md:text-center">
        TRIBUTES
      </h1>
    </div>
  );
};

export default Tributes;
