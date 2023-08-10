import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://cdn.pixabay.com/photo/2019/05/08/07/45/friends-4187953_1280.png",
    address: "02409 Deron Path, 02409 Deron Path, Vermont, 18825-3461",
    description: "This is the first meet up",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image:
      "https://cdn.pixabay.com/photo/2020/06/29/13/58/video-conference-5352757_1280.png",
    address: "02409 Deron Path, 02409 Deron Path, Vermont, 18825-3461",
    description: "This is the second meet up",
  },
  {
    id: "m3",
    title: "Third Meetup",
    image:
      "https://cdn.pixabay.com/photo/2014/09/18/18/19/playmobil-451203_1280.jpg",
    address: "02409 Deron Path, 02409 Deron Path, Vermont, 18825-3461",
    description: "This is the third meet up",
  },
  {
    id: "m4",
    title: "Fourth Meetup",
    image:
      "https://cdn.pixabay.com/photo/2016/02/07/14/49/meeting-1184892_1280.png",
    address: "02409 Deron Path, 02409 Deron Path, Vermont, 18825-3461",
    description: "This is the fourth meet up",
  },
];

function HomePage(props) {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

// export function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 1
  };
}

export default HomePage;
