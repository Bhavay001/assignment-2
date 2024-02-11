const statesData = [
  {
    name: "Karnataka",
    temperature: 12,
    population: 61095297,
    cities: [
      { name: "Bangalore", info: "Capital city", population: 1234567, attractions: ["Cubbon Park", "Vidhana Soudha"] },
      { name: "Mysuru", info: "Cultural capital", population: 789012, attractions: ["Mysore Palace", "Chamundi Hills"] },
      { name: "Hubballi", info: "Industrial hub", population: 345678, attractions: ["Nrupatunga Betta", "Unkal Lake"] },
    ],
  },
  {
    name: "Maharashtra",
    temperature: 32,
    population: 123144223,
    cities: [
      { name: "Mumbai", info: "Financial capital", population: 12442373, attractions: ["Gateway of India", "Marine Drive"] },
      { name: "Pune", info: "Educational hub", population: 5618423, attractions: ["Shaniwar Wada", "Sinhagad Fort"] },
      { name: "Nagpur", info: "Orange city", population: 2957694, attractions: ["Deekshabhoomi", "Tadoba National Park"] },
    ],
  },
  {
    name: "Tamil Nadu",
    temperature: 30,
    population: 75695000,
    cities: [
      { name: "Chennai", info: "Cultural and economic center", population: 13448574, attractions: ["Marina Beach", "Kapaleeshwarar Temple"] },
      { name: "Coimbatore", info: "Industrial city", population: 3027138, attractions: ["Perur Pateeswarar Temple", "Siruvani Waterfalls"] },
      { name: "Madurai", info: "Historical city", population: 1583792, attractions: ["Meenakshi Amman Temple", "Thirumalai Nayakkar Palace"] },
    ],
  },
  {
    name: "New Delhi",
    temperature: 30,
    population: 7595000,
    cities: [
      { name: "New Delhi", info: "Capital city", population: 1481783, attractions: ["India Gate", "Lotus Temple"] },
    ],
  },
  {
    name: "Uttar Pradesh",
    temperature: 35,
    population: 228959599,
    cities: [
      { name: "Lucknow", info: "Capital city", population: 3030294, attractions: ["Bara Imambara", "Lucknow Zoo"] },
      { name: "Kanpur", info: "Industrial city", population: 2765348, attractions: ["Bithoor", "Allen Forest Zoo"] },
      { name: "Agra", info: "Home to the Taj Mahal", population: 1585705, attractions: ["Taj Mahal", "Agra Fort"] },
    ],
  },
  {
    name: "Gujarat",
    temperature: 34,
    population: 63872399,
    cities: [
      { name: "Ahmedabad", info: "Industrial hub", population: 5570585, attractions: ["Sabarmati Ashram", "Kankaria Lake"] },
      { name: "Surat", info: "Diamond polishing and trading hub", population: 5542268, attractions: ["Dutch Garden", "Jagdishchandra Bose Aquarium"] },
      { name: "Vadodara", info: "Cultural capital", population: 2189593, attractions: ["Laxmi Vilas Palace", "Sayaji Baug"] },
    ],
  },
  {
    name: "Chennai",
    temperature: 30,
    population: 7595000,
    cities: [
      { name: "Chennai", info: "Cultural and economic center", population: 13448574, attractions: ["Marina Beach", "Kapaleeshwarar Temple"] },
      { name: "Coimbatore", info: "Industrial city", population: 3027138, attractions: ["Perur Pateeswarar Temple", "Siruvani Waterfalls"] },
      { name: "Madurai", info: "Historical city", population: 1583792, attractions: ["Meenakshi Amman Temple", "Thirumalai Nayakkar Palace"] },
    ],
  },
  {
    name: "Rajasthan",
    temperature: 40,
    population: 77264000,
    cities: [
      { name: "Jaipur", info: "Pink City", population: 3073350, attractions: ["Hawa Mahal", "City Palace"] },
      { name: "Jodhpur", info: "Blue City", population: 1137000, attractions: ["Mehrangarh Fort", "Umaid Bhawan Palace"] },
      { name: "Udaipur", info: "City of Lakes", population: 447021, attractions: ["City Palace", "Lake Pichola"] },
    ],
  },
  {
    name: "West Bengal",
    temperature: 32,
    population: 91928327,
    cities: [
      { name: "Kolkata", info: "Cultural capital of India", population: 4631392, attractions: ["Victoria Memorial", "Howrah Bridge"] },
      { name: "Howrah", info: "Industrial city", population: 107171, attractions: ["Howrah Junction", "Indian Botanical Gardens"] },
      { name: "Durgapur", info: "Steel city", population: 581844, attractions: ["Troika Park", "Durgapur Barrage"] },
    ],
  },
  {
    name: "Kerala",
    temperature: 28,
    population: 35125000,
    cities: [
      { name: "Thiruvananthapuram", info: "Capital city", population: 957730, attractions: ["Sree Padmanabhaswamy Temple", "Kovalam Beach"] },
      { name: "Kochi", info: "Commercial hub", population: 677381, attractions: ["Mattancherry Palace", "Fort Kochi"] },
      { name: "Kozhikode", info: "Historical city", population: 432097, attractions: ["Kozhikode Beach", "Beypore"] },
    ],
  },
  {
    name: "Andhra Pradesh",
    temperature: 35,
    population: 53903393,
    cities: [
      { name: "Visakhapatnam", info: "Port city", population: 2377894, attractions: ["RK Beach", "Simhachalam Temple"] },
      { name: "Vijayawada", info: "Commercial hub", population: 1037393, attractions: ["Kanaka Durga Temple", "Prakasam Barrage"] },
      { name: "Tirupati", info: "Pilgrimage center", population: 287482, attractions: ["Tirumala Venkateswara Temple", "Sri Padmavathi Ammavari Temple"] },
    ],
  },
  {
    name: "Telangana",
    temperature: 10, 
    population: 37220000,
    cities: [
      { name: "Hyderabad", info: "IT and business hub", population: 6809970, attractions: ["Charminar", "Golconda Fort"] },
      { name: "Warangal", info: "Historical city", population: 811844, attractions: ["Warangal Fort", "Thousand Pillar Temple"] },
      { name: "Nizamabad", info: "Agricultural town", population: 573363, attractions: ["Nizamabad Fort", "Alisagar Reservoir"] },
    ],
  },
];

export default statesData;

