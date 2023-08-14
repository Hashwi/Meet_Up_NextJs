// import MeetupList from "../components/meetups/MeetupList";
// import { MongoClient } from "mongodb";

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "First Meetup",
//     image:
//       "https://cdn.pixabay.com/photo/2019/05/08/07/45/friends-4187953_1280.png",
//     address: "02409 Deron Path, 02409 Deron Path, Vermont, 18825-3461",
//     description: "This is the first meet up",
//   },
//   {
//     id: "m2",
//     title: "Second Meetup",
//     image:
//       "https://cdn.pixabay.com/photo/2020/06/29/13/58/video-conference-5352757_1280.png",
//     address: "02409 Deron Path, 02409 Deron Path, Vermont, 18825-3461",
//     description: "This is the second meet up",
//   },
//   {
//     id: "m3",
//     title: "Third Meetup",
//     image:
//       "https://cdn.pixabay.com/photo/2014/09/18/18/19/playmobil-451203_1280.jpg",
//     address: "02409 Deron Path, 02409 Deron Path, Vermont, 18825-3461",
//     description: "This is the third meet up",
//   },
//   {
//     id: "m4",
//     title: "Fourth Meetup",
//     image:
//       "https://cdn.pixabay.com/photo/2016/02/07/14/49/meeting-1184892_1280.png",
//     address: "02409 Deron Path, 02409 Deron Path, Vermont, 18825-3461",
//     description: "This is the fourth meet up",
//   },
// ];

// function HomePage(props) {
//   return (
//     <>
//       <MeetupList meetups={props.meetups} />
//     </>
//   );
// }

// // export function getServerSideProps(context) {
// //   const req = context.req;
// //   const res = context.res;

// //   return {
// //     props: {
// //       meetups: DUMMY_MEETUPS,
// //     },
// //   };
// // }

// export async function getStaticProps() {
// const client = await MongoClient.connect(
//     "mongodb+srv://Hashwi:Np7CwQ2Vez90wxxX@cyberspacecluster.dr2e3yw.mongodb.net/?retryWrites=true&w=majority"
//   );
//   const db = client.db();

//   const meetupsCollection = db.collection("meetups");

//  const meetups = meetupsCollection.find().toArray()
//  client.close()
//   return {
//     props: {
//       meetups: (await meetups).map(meetup=>({
//         title: meetup.title,
//         address: meetup.address,
//         image:meetup.image,
//         id: meetup._id.toString()
//       }))
//     },
//     revalidate: 1
//   };
// }

// export default HomePage;

import Head from "next/head";

import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

function HomePage(props) {
  return (
    <>
      <Head>
        <title>NextJs Meetup</title>
        <meta name="description" content="Find highly reatctive meetups!" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

export async function getStaticProps() {
  const meetups = await fetchMeetups();

  return {
    props: {
      meetups: meetups,
    },
    revalidate: 1,
  };
}

async function fetchMeetups() {
  const client = await MongoClient.connect(
    "mongodb+srv://Hashwi:Np7CwQ2Vez90wxxX@cyberspacecluster.dr2e3yw.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  try {
    const meetups = await meetupsCollection.find().toArray();

    return meetups.map((meetup) => ({
      title: meetup.title,
      address: meetup.address,
      image: meetup.image,
      id: meetup._id.toString(),
    }));
  } catch (error) {
    console.error("Error fetching meetups:", error);
    return []; // Return an empty array or handle the error as needed
  } finally {
    client.close();
  }
}

export default HomePage;
