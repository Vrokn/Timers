import React from "react";
import { Card, Icon, Button, Divider, } from 'semantic-ui-react';
import millisecondsToHuman from './Contador'

export default function Timer({  title, project, handleStart, handleStop, handleEdit, handleDelete, elapsedSeconds }) {

    return (
        <Card>
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>{project}</Card.Meta>
                <Divider />
                <Card.Description>
                    <h2>{millisecondsToHuman(elapsedSeconds)}</h2>
                </Card.Description>
                <Icon link name='edit' onClick={handleEdit} />
                <Icon link name='trash' onClick={handleDelete} />
            </Card.Content>
            <Card.Content extra>
                <Button inverted color='green' fluid onClick={handleStart}>Start</Button>
                <Button inverted color='red' fluid onClick={handleStop}>Stop</Button>
            </Card.Content>
        </Card>
    );
}