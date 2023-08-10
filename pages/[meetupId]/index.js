import MeetupDetail from "../../components/meetups/MeetupDetail";
function MeetupDetails() {
  return (
    <>
      <MeetupDetail
        image="https://cdn.pixabay.com/photo/2019/05/08/07/45/friends-4187953_1280.png"
        title="A First Mettup"
        address="02409 Deron Path, 02409 Deron Path, Vermont, 18825-3461"
        description="The meetup description"
      />
    </>
  );
}

export async function getStaticPaths(context) {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
      {
        params: {
          meetupId: "m3",
        },
      },
      {
        params: {
          meetupId: "m4",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log(meetupId);
  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https//cdn.pixabay.com/photo/2019/05/08/07/45/friends-4187953_1280.png",
        title: "A First Mettup",
        address: "02409 Deron Path, 02409 Deron Path, Vermont, 18825-3461",
        description: "The meetup description",
      },
    },
  };
}

export default MeetupDetails;
