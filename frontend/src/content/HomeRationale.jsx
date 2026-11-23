function Highlight({ children }) {
  return <strong className="rationale__em">{children}</strong>;
}

function HomeRationale() {
  return (
    <section className="rationale">
      <h2 className="rationale__title">
        Reason why we implemented RFID on classrooms....
      </h2>
      <p className="rationale__body">
        Implementing an RFID (Radio Frequency Identification) system in schools
        can significantly{" "}
        <Highlight>
          enhance classroom security and optimize space utilization.
        </Highlight>{" "}
        This technology{" "}
        <Highlight>
          allows only authorized teachers to access specific rooms
        </Highlight>
        , thereby preventing students from using these areas as hangout spots
        when they do not have a scheduled class. By embedding RFID tags in
        teacher ID cards and installing RFID readers at the entrances of
        classrooms and other sensitive areas,{" "}
        <Highlight>
          the school can ensure that only designated staff can unlock and enter
          these rooms.
        </Highlight>{" "}
        This not only helps in maintaining discipline but also ensures that
        school facilities are used appropriately,{" "}
        <Highlight>
          fostering a more organized and secure learning environment.
        </Highlight>
      </p>
    </section>
  );
}

export default HomeRationale;