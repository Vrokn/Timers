import React from "react";
import { Card, Icon, Button, Divider, } from 'semantic-ui-react';
import millisecondsToHuman from './Contador'


export default function Timer({ title, project, handleStart, handleStop, toggleUpdate, handleDelete, elapsedSeconds, }) {

    return (
        <Card centered >
            <Card.Content textAlign='center' >
                <Card.Header>{title}</Card.Header>
                <Card.Meta>{project}</Card.Meta>
                <Divider />
                <Card.Description textAlign='center'>
                    <h2>{millisecondsToHuman(elapsedSeconds)}</h2>
                </Card.Description>
                <Icon link name='edit' onClick={toggleUpdate} />
                <Icon link name='trash' onClick={handleDelete} />
            </Card.Content>
            <Card.Content extra >
                <Button attached animated onClick={handleStart} inverted color='green' >
                    <Button.Content visible>Start</Button.Content>
                    <Button.Content hidden>
                        <Icon name='play' />
                    </Button.Content>
                </Button>
                <Button animated attached onClick={handleStop} inverted color='red' >
                    <Button.Content visible>Stop</Button.Content>
                    <Button.Content hidden>
                        <Icon name='stop' />
                    </Button.Content>
                </Button>
            </Card.Content>
        </Card>
    );
}