import React from 'react'
import { Button, Container, Grid } from "@material-ui/core";

const AddPost = () => {
    return (
      <div>
        <form onSubmit={submit}>
          <Container>
            <h1>Create your Medium Post</h1>
            <div className="Form_InputDivs">
              <p>Title</p>
              <input
                value={value.title}
                name="title"
                type="text"
                placeholder="Title..."
                onChange={changeValue}
              />
            </div>
            <div className="Form_InputDivs">
              <p>Paragraph</p>
              <input
                value={value.paragraph}
                type="text"
                placeholder="Paragraph..."
                name="paragraph"
                onChange={changeValue}
              />
            </div>
           
            <div className="Form_SubmitBtn">
              <button type="submit">Submit</button>
            </div>
          </Container>
        </form>
      </div>
    );
}

export default AddPost
