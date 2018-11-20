import React, { Component } from 'react';
import { Box, Flex } from 'rebass';
import { Link } from 'react-router-dom';


class Home extends Component {
  static async getInitialProps({ req, res, match, history, location, ...ctx }) {
    return { whatever: 'stuff' };
  }

  render() {
    return (
      <Flex>
        <Box width={[1, 1 / 2, 1 / 3]} bg="grey" fonts="sans">
          <h1>Log in </h1>
        </Box>
      <div>
        <Link to="/about">About -></Link>
      </div>
      </Flex>
    );
  }
}

export default Home;
