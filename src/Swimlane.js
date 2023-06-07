import React from 'react';
import Card from './Card';

export default class Swimlane extends React.Component {
  renderCards() {
    return this.props.clients.map(client => (
      <Card
        key={client.id}
        id={client.id}
        name={client.name}
        status={this.props.name.toLowerCase().replace(' ', '-')}
      />
    ));
  }

  render() {
    return (
      <div className="Swimlane" ref={this.props.dragulaRef}>
        <h3>{this.props.name}</h3>
        {this.renderCards()}
      </div>
    );
  }
}
