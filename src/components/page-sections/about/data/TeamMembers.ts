const TeamMembersData: {
  avatarUrl: string;
  name: string;
  alias: string;
  department: string;
  numberOfCards: number;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
}[] = [
  {
    avatarUrl:
      "https://cdn.zo.xyz/profile/268395/assets/1/5259b2e3-fd13-460b-93de-c4e9417e732f/20201230064226.svg",
    name: "Dharamveer Singh Chouhan",
    alias: "DV",
    department: "CEO",
    numberOfCards: 0,
    twitter: "https://twitter.com/dvcoolster",
    instagram: "https://instagram.com/dvcoolster",
    linkedin: "https://linkedin.com/dvcoolster",
  },
  {
    avatarUrl:
      "https://cdn.zo.xyz/profile/141707/assets/1/acc1d43e-e9f8-40df-934d-7ca09ba59a0b/20210917070645.svg",
    name: "Chetan Singh Chouhan",
    alias: "Pofunder",
    department: "COO",
    numberOfCards: 0,
    twitter: "https://twitter.com/pofunder",
    linkedin: "https://www.linkedin.com/in/chetan-chauhan-237a4a87/",
    instagram: "https://www.instagram.com/zofunder/",
  },
  {
    avatarUrl:
      "https://cdn.zo.xyz/profile/276444/assets/1/c619f764-214f-4177-b968-936be7f19126/20210923060138.svg",
    name: "Anant Dev Dubey",
    alias: "anantdd",
    department: "Engineering",
    numberOfCards: 0,
    linkedin: "https://www.linkedin.com/in/anant-dev-dubey/",
  },
  {
    avatarUrl:
      "https://cdn.zo.xyz/profile/293982/assets/1/b0de73a0-7713-4e11-9ce7-33770cfb6224/20210325061827.svg",
    name: "Atul Jaiswal",
    alias: "atul",
    department: "Operations",
    numberOfCards: 0,
    linkedin: "https://www.linkedin.com/in/atul-jaiswal-847607223/",
  },
  {
    avatarUrl:
      "https://cdn.zo.xyz/profile/3/assets/1/9ae5395e-7c13-4ca3-8dba-266157b3acc4/20200817030229.svg",
    name: "Aviral Gupta",
    alias: "CaptJack",
    department: "Product",
    numberOfCards: 0,
    twitter: "https://twitter.com/A_VIRAL_FEVER",
    instagram: "https://www.instagram.com/aviralgupta2211/",
    linkedin: "https://www.linkedin.com/in/gupta-aviral/",
  },
  {
    avatarUrl:
      "https://cdn.zo.xyz/profile/268406/assets/1/a911f516-1fc7-400b-95d1-5ba57f299e10/20210702130518.svg",
    name: "Christopher Nazareth",
    alias: "ChrisCraig",
    department: "Design",
    numberOfCards: 0,
    twitter: "https://twitter.com/Chris76697374",
    instagram: "https://www.instagram.com/christopher_design09/",
    linkedin: "https://www.linkedin.com/in/christopher-nazareth-0a4388134/",
  },
  {
    avatarUrl:
      "https://cdn.zo.xyz/profile/17401/assets/1/4b45d857-d5c6-4755-8eee-109382d70df0/20210526122314.svg",
    name: "Gaurav Goyal",
    alias: "MasterChief",
    department: "Engineering",
    numberOfCards: 0,
    twitter: "https://twitter.com/GoyalGaurav",
    linkedin: "https://www.linkedin.com/in/gauravgoyaltech/",
    instagram: "https://www.instagram.com/masterchief.42/",
  },
  {
    avatarUrl:
      "https://cdn.zo.xyz/profile/289130/assets/1/4c48232c-e2d7-409b-9f9e-970a4d6b673b/20210901134147.svg",
    name: "Hemant Kokate",
    alias: "HemantKokate",
    department: "Design",
    numberOfCards: 0,
    twitter: "https://twitter.com/HemantKokate3",
    instagram: "https://www.instagram.com/dexterzone_art/",
    linkedin: "https://www.linkedin.com/in/hemant-kokate-873979167/",
  },
  {
    avatarUrl:
      "https://cdn.zo.xyz/profile/17006/assets/1/78f1f657-4acc-4b4a-890d-b4a950957e78/20210720054405.svg",
    name: "Ishaan Rawat",
    alias: "Cannibal",
    department: "Engineering",
    numberOfCards: 0,
    twitter: "https://twitter.com/IshaanRawat",
    instagram: "https://instagram.com/_ishaanrawat_",
    linkedin: "https://linkedin.com/IshaanRawat",
  },
  {
    avatarUrl:
      "https://cdn.zo.xyz/profile/304834/assets/1/d6e62e03-9f2d-47b2-8bfc-56094a2c9cfd/20210806122847.svg",
    name: "Kushal Agarwal",
    alias: "KaZo",
    department: "Engineering",
    numberOfCards: 0,
    twitter: "https://twitter.com/kushalKaZo",
    instagram: "https://www.instagram.com/kushal_kazo/",
    linkedin: "https://www.linkedin.com/in/kushal-agarwal-b6b5701bb/",
  },
  {
    avatarUrl:
      "https://cdn.zo.xyz/profile/319352/assets/1/16535ae3-3cd7-4912-aa3a-bb1313a97d93/20210630142705.svg",
    name: "Manas Choubal",
    alias: "ManasVivek",
    department: "Engineering",
    numberOfCards: 0,
    twitter: "https://twitter.com/manas_vivek_27",
    instagram: "https://www.instagram.com/manas_vivek_27/",
    linkedin: "https://www.linkedin.com/in/manas-choubal/",
  },
  {
    avatarUrl:
      "https://cdn.zo.xyz/profile/212463/assets/1/be3962d7-aa24-445b-8ccf-5e17daf1feb7/20210629105637.svg",
    name: "Sakshi Shah",
    alias: "Sakshi",
    department: "Design",
    numberOfCards: 0,
    twitter: "https://twitter.com/sakshii_shah",
    instagram: "https://www.instagram.com/sakshii_shahh/",
    linkedin: "https://www.linkedin.com/in/sakshiishahh/",
  },
  {
    avatarUrl:
      "https://cdn.zo.xyz/profile/276522/assets/1/9b07b599-0a59-4a2c-b103-5c65c6e0963f/20210615163616.svg",
    name: "Sanchit Dekate",
    alias: "Sindbad",
    department: "Operations",
    numberOfCards: 0,
    twitter: "https://twitter.com/DekateSanchit",
    instagram: "https://twitter.com/DekateSanchit",
    linkedin: "https://www.linkedin.com/in/sanchit-dekate-6714ba100/",
  },
  {
    avatarUrl:
      "https://cdn.zo.xyz/profile/289292/assets/1/9fd3d845-555a-4b17-ae9b-bb23e4a29330/20201212112641.svg",
    name: "Satyadev Pius",
    alias: "DevPius",
    department: "Design",
    numberOfCards: 0,
    twitter: "https://twitter.com/dev_pius",
    instagram: "https://www.instagram.com/dev.pius/",
    linkedin: "https://www.linkedin.com/in/satyadev-pius-5229851a3/",
  },
  {
    avatarUrl:
      "https://cdn.zo.xyz/profile/238406/assets/1/d70685ea-30d3-4ef0-ad26-6798b481c5bb/20210604172425.svg",
    name: "Sridutt Shukla",
    alias: "sridutt",
    department: "Operations",
    numberOfCards: 0,
    twitter: "https://twitter.com/ShuklaSridutt",
    instagram: "https://www.instagram.com/sridutt.shukla/",
    linkedin: "https://www.linkedin.com/in/sridutt-shukla-7b92b4169/",
  },
  {
    avatarUrl:
      "https://cdn.zo.xyz/profile/260023/assets/1/47053683-6440-46c6-8104-ca76f3664a38/20210722045158.svg",
    name: "Swapnil Srivastava",
    alias: "romi",
    department: "Operations",
    numberOfCards: 0,
    twitter: "https://twitter.com/romi_on",
    instagram: "https://www.instagram.com/therealswap/",
    linkedin: "https://www.linkedin.com/in/swapnilsrivastava1987/",
  },
  {
    avatarUrl:
      "https://cdn.zo.xyz/profile/289130/assets/1/4c48232c-e2d7-409b-9f9e-970a4d6b673b/20210901134147.svg",
    name: "Tanme Srivastav",
    alias: "tanme",
    department: "Operations",
    numberOfCards: 0,
    twitter: "https://twitter.com/tanme_srivastav",
    instagram: "https://www.instagram.com/im_tanme/",
    linkedin: "https://www.linkedin.com/in/tanme-s-09553a108/",
  },
  {
    avatarUrl:
      "https://cdn.zo.xyz/profile/291933/assets/1/ca42da02-3c62-4c22-8874-0cc1ab8aa8a9/20210713081435.svg",
    name: "Vibhu Joshi",
    alias: "vibhuj",
    department: "Engineering",
    numberOfCards: 0,
    twitter: "https://twitter.com/thevibhujoshi",
    linkedin: "https://www.linkedin.com/in/vibhuj/",
  },
];

export default TeamMembersData;
