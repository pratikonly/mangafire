import axios from 'axios';

export const client = axios.create({
  baseURL: process.env.BASE_URL || 'https://mangafire.to',
  headers: {
    Cookie: "usertype=user; cf_clearance=U9fGUG7H4xZ2udk6KqO0_NOVbIIygPL8xZaoWGLJVsQ-1767906667-1.2.1.1-1AGyHIqrJHblcOSzHcK.Si7qNjXPybSyg9BTYC5_gwnZwVsHYyng4Rmz.Tld8V9zBkjrvPgu_ymU6ljetPxTQwyXw.QWePaqVGiFc0K0Pq097DDUizpPlI0wqmeqygD9KO9UFF1bjI6adB4LgAXF09FXru7Kyvr98rmoUI2o6MXf16sp6zK2tqPp5FbqEq3Lj2R5141t6zyY0kX2OkRF8_q.d7hr78U4q2t6W9rnhCM; session=SdAx3ubyVZu3EJXBUWLfAb0yElBBLUJv3g6YGnTC;", // Replace with your full cookie string!
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
    Referer: "https://mangafire.to/"
  }
});
