import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Logo from "../Images/logo.jpg";
import ModelingImg from "../Images/modeling.jpg";
import ModelingImg1 from "../Images/modeling1.jpg";
import DirectorMain from "../Images/director_main.jpg";
import DirectorEvent from "../Images/director_event.jpg";



const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <div
        style={{
          background: "linear-gradient(to right, #000000, #2c2c2c)",
          color: "#fff",
          padding: "80px 0",
        }}
      >
        <Container className="text-center">
          <img
            src={Logo}
            alt="Pathway Enterprises"
            style={{ maxWidth: "260px", width: "100%", marginBottom: "20px" }}
          />
          <h1 className="fw-bold">PATHWAY ENTERPRISES</h1>
          <p className="lead mt-3">
            Fashion • Commercial • Lifestyle • Pageantry
          </p>
          <Button variant="warning" size="lg" className="mt-4">
            Begin Your Journey
          </Button>
        </Container>
      </div>

      {/* PREMIUM CONTENT SECTION */}
      <Container className="my-5">
        <Row className="align-items-stretch">

          {/* MODELING CARD */}
          <Col md={6} className="mb-4">
            <Card className="h-100 shadow-lg border-0">
              <Card.Body className="d-flex flex-column p-4">

                <img
                  src={ModelingImg}
                  alt="Modeling"
                  style={{ height: "240px", objectFit: "cover" }}
                  className="rounded mb-3"
                />

                <img
                  src={ModelingImg1}
                  alt="Modeling"
                  style={{ height: "240px", objectFit: "cover" }}
                  className="rounded mb-4"
                />

                <div className="text-center mt-auto">
                  <h3 className="fw-bold">MODELING</h3>
                  <p className="text-muted mt-3">
                    Pathway Enterprises is a premium modeling platform offering
                    professional agency services, grooming, personality
                    development, pageantry guidance, choreography, and global
                    exposure. We shape confidence, discipline, and success.
                  </p>
                </div>

              </Card.Body>
            </Card>
          </Col>
        <Col md={6} className="mb-4">
  <Card className="h-100 shadow-lg border-0">
    <Card.Body className="d-flex flex-column align-items-center text-center p-4">

      {/* TOP IMAGE */}
     <img
  src={DirectorMain}
  alt="Deepak Ganguli"
  className="rounded mb-3"
  style={{ height: "280px", objectFit: "cover", width: "100%" }}
/>
       <img
  src={DirectorEvent}
  alt="Deepak Ganguli Event"
 className="rounded mb-3"
  style={{ height: "280px", objectFit: "cover", width: "100%" }}
/>

      {/* TEXT CONTENT */}
     {/*} <div className="px-3" style={{ maxWidth: 420 }}> */}
      <div className="text-center mt-auto">
        <h4 className="fw-bold mb-3">DEEPAK GANGULI</h4>
        <p className="text-muted">
          Director of Mrs India, renowned Coordinator, EMCEE, Event Planner,
          and Entertainer. With vast experience in fashion, pageantry, and
          stage management, he leads Pathway Enterprises with innovation,
          discipline, and creative excellence.
        </p>
      </div>

      {/* BOTTOM IMAGE */}
     

    </Card.Body>
  </Card>
</Col>


        </Row>
      </Container>

      {/* SOCIAL MEDIA SECTION */}
      <div style={{ backgroundColor: "#f8f9fa", padding: "60px 0" }}>
        <Container className="text-center">
          <h2 className="fw-bold">Join Pathway – Your Road to Success</h2>

          <p className="text-muted mt-3">
            Step into the world of fashion, confidence, and global standards.
            Follow Pathway Enterprises to stay connected with our latest shows,
            events, and success stories.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "25px",
              fontSize: "22px",
              marginTop: "30px",
            }}
          >
            <span style={{ cursor: "pointer" }}>📸 Instagram</span>
            <span style={{ cursor: "pointer" }}>🐦 Twitter</span>
            <span style={{ cursor: "pointer" }}>▶️ YouTube</span>
            <span style={{ cursor: "pointer" }}>📘 Facebook</span>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;
