import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";

class ShoppingList extends Component {
  state = {
    items: [
      { id: uuid(), name: "eggs" },
      { id: uuid(), name: "biscuit" },
      { id: uuid(), name: "coffee" },
      { id: uuid(), name: "water" }
    ]
  };

  render() {
    const { items } = this.state;
    return (
      <>
        <Container>
          <Button
            color="dark"
            style={{ marginBottom: "2rem" }}
            onClick={() => {
              const name = prompt("Enter Item");
              if (name) {
                this.setState(({ items }) => ({
                  //inserting the item object into the items array in the state
                  items: [...items, { id: uuid(), name }]
                }));
              }
            }}
          >
            Add Item
          </Button>
          <ListGroup>
            <TransitionGroup className="shopping-list">
              {items.map(({ id, name }) => (
                <CSSTransition key={id} timeout={500} classNames="fade">
                  <ListGroupItem>
                    <Button
                      style={{ marginRight: "0.5rem" }}
                      className="remove-btn"
                      color="danger"
                      size="sm"
                      onClick={() => {
                        this.setState(({ items }) => ({
                          items: items.filter(item => item.id !== id)
                        }));
                      }}
                    >
                      &times;
                    </Button>
                    {name}
                  </ListGroupItem>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </ListGroup>
        </Container>
      </>
    );
  }
}

export default ShoppingList;
