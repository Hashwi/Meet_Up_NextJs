import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetUpPage() {
  function addMeetupHandler(entereedMeetupData) {
    console.log(entereedMeetupData);
  }
  return (
    <>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
}

export default NewMeetUpPage;
