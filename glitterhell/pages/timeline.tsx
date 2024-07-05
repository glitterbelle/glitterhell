
import Timeline from "../src/components/Timeline"; // Assuming the 'Timeline' component is located in the '../components/Timeline' directory
import Header from "../src/components/Header"; // Import the Header component

export default function TimelinePage() {
    return (
      <div>
        <Header />
        <h1>Timeline Page</h1>
        <Timeline />
        {/* Content of your Timeline page goes here */}
      </div>
    );
  }