import React, { useState, ChangeEvent } from "react";
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
      title
    }
  }
`;

const AddMessage = () => {
  const [author, setAuthor] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  return (
    <div>
      <input
        placeholder="Author"
        name="author"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setAuthor(e.target.value)
        }
        value={author}
      />
      <input
        placeholder="Title"
        name="title"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
        value={title}
      />
      <input
        placeholder="Body"
        name="body"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setBody(e.target.value)}
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
