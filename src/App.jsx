import "./App.css";
import DatePicker from "./components/DatePicker";
import Navbar from "./components/NavBar";
import Time from "./components/Time";
import EnhancedTable from "./components/Table";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BlockUi from "react-block-ui";
import ToggleBlock from "./components/ToggleBlock";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleBlocking = this.toggleBlocking.bind(this);
    this.youClickedIt = this.youClickedIt.bind(this);
    this.state = {
      blocking: false,
    };
  }

  toggleBlocking() {
    if (!this.state.blocking) {
      this.unblockIn(5);
    }
    this.setState({ blocking: !this.state.blocking });
  }

  unblockIn(seconds) {
    this.setState({ countdown: seconds });
    if (!seconds) {
      this.setState({ blocking: false });
    } else {
      setTimeout(() => this.unblockIn(--seconds), 1000);
    }
  }

  youClickedIt() {
    if (this.state.blocking) {
      window.alert(
        "Please report an issue that blocking did not prevent you from clicking the button"
      );
    } else {
      this.toggleBlocking();
    }
  }

  render() {
    return (
      <div>
        <BlockUi tag="div" blocking={this.state.blocking} className="my-2">
          <div className="App">
            <Navbar />
            <Box sx={{ flexGrow: 1 }} className="App-header">
              <Grid container spacing={2}>
                <Grid item xs={12} className="text-center" md={6}>
                  <div style={{}}>
                    <h1 className="head-color">HealthCare</h1>
                    {/* <CardMedia
                component="img"
                sx={{ width: 250 ,paddingLeft:5,paddingTop:10}}
                src="https://icon-library.com/images/healthcare-icon-png/healthcare-icon-png-8.jpg"
                alt="Live from space album cover"
              /> */}
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Facilis similique laudantium, perspiciatis doloremque
                      nesciunt aliquid quia sequi quod ullam dolorum eligendi
                      fugit repellendus iusto sapiente dolores. Quibusdam
                      tempore voluptate totam!
                    </p>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="container">
                    <div className="box">
                      <div className="spin-container">
                        <div className="shape">
                          <div className="bd"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} className="text-center" md={12}>
                <Box sx={{ flexGrow: 1, padding: 7 }}>
                  <EnhancedTable />
                </Box>
              </Grid>
            </Grid>
            <Box sx={{ flexGrow: 1 }} className="from">
              <Grid container spacing={2}>
                <Grid item xs={12} className="text-center" md={5}>
                  <Box sx={{ flexGrow: 1, padding: 5 }}>
                    <Card sx={{ minWidth: 345 }}>
                      <CardContent>
                        <Typography gutterBottom variant="h2" component="div">
                          Input form
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                              <DatePicker />
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Time />
                            </Grid>
                          </Grid>
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button onClick={this.toggleBlocking} color="primary">
                          Test Blocking UI
                        </Button>
                      </CardActions>
                    </Card>
                  </Box>
                </Grid>
                <Grid item xs={12} md={7}>
                  <ImageList
                    sx={{ minwidth: 500, height: 400 }}
                    variant="woven"
                    cols={3}
                    gap={8}
                  >
                    {itemData.map((item) => (
                      <ImageListItem key={item.img}>
                        <img
                          src={`${item.img}?w=161&fit=crop&auto=format`}
                          srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=1 1x`}
                          alt={item.title}
                          loading="lazy"
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                </Grid>
              </Grid>
            </Box>
          </div>
        </BlockUi>
      </div>
    );
  }
}
const itemData = [

  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },

  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
 
];
