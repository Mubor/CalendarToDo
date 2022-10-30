import React, { FC } from 'react';
import Clock from 'react-live-clock';
import styled from 'styled-components';

const LiveTimeClock: FC = (): JSX.Element => {
  return (
    <ClockWrapper>
      <Clock format={'HH:mm'} ticking={true} timezone={'Europe/Kyiv'} />
    </ClockWrapper>
  );
};

const ClockWrapper = styled.div`
  display: flex;
`;

export default LiveTimeClock;
