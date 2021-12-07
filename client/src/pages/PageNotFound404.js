import React, { Component } from "react";
import { Button, Container } from "@material-ui/core";

import PageNotFoundGif from "../assets/images/404.gif";

class PageNotFound404 extends Component {
  render() {
    return (
      <Container className="da">
        <div
          style={{
            margin: "auto",
            width: "50%",
            padding: "10px"
          }}
        >
          <img src={PageNotFoundGif} alt="pageNotFound" />
        </div>

        <div
          style={{
            margin: "auto",
            width: "50%",
            padding: "10px"
          }}
        >
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            onClick={() => {
              this.props.history.push("/");
            }}
          >
            Back
          </Button>
        </div>
      </Container>
    );
  }
}

export default PageNotFound404;
