import React from "react";
import { Card, Button, Form } from 'semantic-ui-react';

export default function Update({ title, project, handleUpdate, toggleUpdate, handleNewProjectField, handleNewNameField  }) {

    return (
        <Card centered fluid={false} stretched >
            <Card.Content>
                <Form >
                    <Form.Field>
                        <label>New Title</label>
                        <input placeholder={title} name='newTitle' onChange={handleNewNameField}/>
                    </Form.Field>
                    <Form.Field>
                        <label>New Project</label>
                        <input placeholder={project} name='newProject' onChange={handleNewProjectField}/>
                    </Form.Field>
                    <div className='ui two buttons'>
                        <Button inverted color='green' onClick={handleUpdate}>Update</Button>
                        <Button inverted color='red' onClick={toggleUpdate}>Cancel</Button>
                    </div>
                </Form>
            </Card.Content>
        </Card >
    );
}