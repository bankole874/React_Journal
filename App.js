import "./styles.css";
import Navbar from "./components/Navbar";
import Journal from "./components/Journal";
import data from "./data";

export default function App() {
  const journals = data.map((journal) => {
    return (
      <Journal
        key={journal.id}
        title={journal.title}
        location={journal.location}
        googleMapsUrl={journal.googleMapsUrl}
        startDate={journal.startDate}
        endDate={journal.endDate}
        description={journal.description}
        imageUrl={journal.imageUrl}
      />
    );
  });

  return (
    <div className="App">
      <Navbar />
      {journals}
    </div>
  );
}
