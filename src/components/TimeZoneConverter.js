// src/components/TimeZoneConverter.js
import React, { Component } from 'react';
import moment from 'moment-timezone';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import AddTimeZone from './AddTimeZone';
import TimeZoneDisplay from './TimeZoneDisplay';
import SliderComponent from './SliderComponent';

class TimeZoneConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeZones: ['UTC', 'Asia/Kolkata'], // Default time zones
      currentTime: moment(),
    };
  }

  handleTimeZoneAddition = (timeZone) => {
    this.setState((prevState) => ({
      timeZones: [...prevState.timeZones, timeZone],
    }));
  };

  handleTimeZoneDeletion = (index) => {
    this.setState((prevState) => ({
      timeZones: prevState.timeZones.filter((_, i) => i !== index),
    }));
  };

  handleTimeChange = (newTime) => {
    this.setState({ currentTime: newTime });
  };

  onDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(this.state.timeZones);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    this.setState({ timeZones: items });
  };

  toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
  };

  render() {
    const { timeZones, currentTime } = this.state;

    return (
      <div className="container">
        <h1>Time Zone Converter</h1>
        <AddTimeZone onAdd={this.handleTimeZoneAddition} />
        <SliderComponent
          currentTime={currentTime}
          onTimeChange={this.handleTimeChange}
        />
        <button onClick={this.toggleDarkMode}>Toggle Dark Mode</button>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {timeZones.map((zone, index) => (
                  <Draggable key={zone} draggableId={zone} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="draggable-item"
                      >
                        <TimeZoneDisplay
                          timeZone={zone}
                          currentTime={currentTime}
                          onDelete={() => this.handleTimeZoneDeletion(index)}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    );
  }
}

export default TimeZoneConverter;
