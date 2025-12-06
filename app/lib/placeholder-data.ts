// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const customers = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: customers[2].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    customer_id: customers[0].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

const businesses = [
  {
    id: "b1f8e0d2-9c2e-4a1f-b0a3-1f2d7c8e9f01",
    name: "Sunny Coffee House",
    email: "contact@sunnycoffee.com",
    address: "123 Sunshine Blvd, Seattle, WA",
    phone: "+1 206-555-0123",
    opening_hours: "Mon-Fri 7:00-19:00, Sat-Sun 8:00-18:00",
    image_url: "/businesses/sunny-coffee.png",
  },
  {
    id: "c2d7f4a3-7b8d-4e2a-9d01-4f6a2c3b7e05",
    name: "Green Leaf Grocery",
    email: "info@greenleafgrocery.com",
    address: "456 Oak Street, Portland, OR",
    phone: "+1 503-555-0198",
    opening_hours: "Daily 8:00-22:00",
    image_url: "/businesses/green-leaf.png",
  },
  {
    id: "d3e6c7b8-6a9f-4c3b-b1a2-7d8e9f0c1a23",
    name: "TechFix Repairs",
    email: "support@techfix.com",
    address: "789 Silicon Ave, San Francisco, CA",
    phone: "+1 415-555-0177",
    opening_hours: "Mon-Fri 9:00-18:00",
    image_url: "/businesses/techfix.png",
  },
  {
    id: "e4f7b8c9-5d6e-4f2b-a1c0-3b2d1f7e8c90",
    name: "Happy Paws Pet Store",
    email: "hello@happypaws.com",
    address: "321 Paw Street, Austin, TX",
    phone: "+1 512-555-0144",
    opening_hours: "Mon-Sat 10:00-19:00, Sun 11:00-17:00",
    image_url: "/businesses/happy-paws.png",
  },
  {
    id: "f5g8h9i0-1a2b-4c3d-b5e6-9f0a1b2c3d4e",
    name: "Urban Fitness Gym",
    email: "contact@urbanfitness.com",
    address: "654 Workout Lane, Chicago, IL",
    phone: "+1 312-555-0133",
    opening_hours: "Mon-Fri 5:00-23:00, Sat-Sun 6:00-22:00",
    image_url: "/businesses/urban-fitness.png",
  },
];

export { users, customers, invoices, revenue, businesses };
