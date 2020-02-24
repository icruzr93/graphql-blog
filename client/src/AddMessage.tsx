import React, { useState } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const ADD_MESSAGE = gql`
  mutation AddMessage($body: String!, $title: String!, $author: String!) {
    addMessage(body: $body, title: $title, author: $author) {
      author
    }
  }
`;

const GET_MESSAGES = gql`
  {
    messages {
      body
    }
  }
`;

const AddMessage = () => {
  const [author, setAuthor] = useState();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  return (
    <div>
      <input
        placeholder="Author"
        name="author"
        onChange={(e: any) => setAuthor(e.value)}
        value={author}
      />
      <input
        placeholder="Title"
        name="title"
        onChange={(e: any) => setTitle(e.value)}
        value={title}
      />
      <input
        placeholder="Body"
        name="body"
        onChange={(e: any) => setBody(e.value)}
        value={body}
      />
      <Mutation
        mutation={ADD_MESSAGE}
        variables={{ author, title, body }}
        refetchQueries={() => [{ query: GET_MESSAGES }]}
      >
        {(addMessage: any) => (
          <button onClick={addMessage}> Add Message </button>
        )}
      </Mutation>
    </div>
  );
};

export default AddMessage;
