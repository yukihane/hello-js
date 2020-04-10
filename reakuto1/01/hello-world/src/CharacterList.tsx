import React from "react";
import { Header, Icon, Item } from "semantic-ui-react";

export interface Character {
  id: number;
  name: string;
  age: number;
  height?: number;
}

interface CharacterListProps {
  school: string;
  characters: Character[];
}

const CharacterList = (props: CharacterListProps) => {
  const { school, characters } = props;

  return (
    <>
      <Header as="h2">{school}</Header>
      <Item.Group>
        {characters.map((c) => (
          <Item>
            <Icon name="user circle" size="huge" />
            <Item.Content>
              <Item.Header>{c.name}</Item.Header>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </>
  );
};

export default CharacterList;
