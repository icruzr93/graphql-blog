import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_MESSAGES = gql`
  {
    messages {
      title
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
        data.messages.map((msg: any, key: number) => (
          <p key={key}>{msg.title}</p>
        ))
      );
    }}
  </Query>
);
export default MessageList;
