import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_MESSAGES = gql`
  {
    messages {
      author
      title
      body
    }
  }
`;

const MessageList = () => (
  <Query query={GET_MESSAGES}>
    {({ data, loading }: any) => {
      if (loading) return "Loading...";

      return (
        data &&
        data.messages &&
        data.messages.map((msg: any) => <p>{msg.body}</p>)
      );
    }}
  </Query>
);
export default MessageList;
