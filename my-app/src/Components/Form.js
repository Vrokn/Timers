import React from "react";
import { Card, Button, Form } from 'semantic-ui-react';

export default function NewTimer({ addTimer, toggleForm }) {

    return (
        <Card centered fluid={false} stretched >
            <Card.Content>
                <Form onSubmit={addTimer}>
                    <Form.Field>
                        <label>Title</label>
                        <input placeholder='Title' name='Title' />
                    </Form.Field>
                    <Form.Field>
                        <label>Project</label>
                        <input placeholder='Project' name='Project' />
                    </Form.Field>
                    <div className='ui two buttons'>
                        <Button inverted color='green' type='submit'>Create</Button>
                        <Button inverted color='red' onClick={toggleForm}>Cancel</Button>
                    </div>
                </Form>
            </Card.Content>
        </Card >
    );
}