import React from 'react';
import styled from 'styled-components';

const LeaderBoardContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 1.5rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 1.5rem;
`;

const LeaderList = styled.ol`
  list-style-position: inside;
  padding: 0;
`;

const LeaderItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
  background: ${props => props.$rank <= 3 ? '#f8f9fa' : 'transparent'};
  border-radius: 5px;

  &:nth-child(1) { background: #ffd70033; }
  &:nth-child(2) { background: #c0c0c033; }
  &:nth-child(3) { background: #cd853f33; }
`;

const PlayerInfo = styled.div`
  flex-grow: 1;
  margin-left: 1rem;
`;

const Points = styled.span`
  font-weight: bold;
  color: #28a745;
`;

const mockData = [
  { id: 1, name: "John Doe", points: 1250 },
  { id: 2, name: "Jane Smith", points: 1100 },
  { id: 3, name: "Bob Johnson", points: 950 },
  { id: 4, name: "Alice Brown", points: 800 },
  { id: 5, name: "Mike Wilson", points: 750 },
  { id: 6, name: "Sarah Davis", points: 700 },
  { id: 7, name: "Tom Anderson", points: 650 },
  { id: 8, name: "Emily White", points: 600 },
  { id: 9, name: "Chris Martin", points: 550 },
  { id: 10, name: "Lisa Garcia", points: 500 },
];

const LeaderBoard = () => {
  return (
    <LeaderBoardContainer>
      <Title>Top Contributors</Title>
      <LeaderList>
        {mockData.map((player, index) => (
          <LeaderItem key={player.id} $rank={index + 1}>
            <PlayerInfo>
              {player.name}
            </PlayerInfo>
            <Points>{player.points} pts</Points>
          </LeaderItem>
        ))}
      </LeaderList>
    </LeaderBoardContainer>
  );
};

export default LeaderBoard; 