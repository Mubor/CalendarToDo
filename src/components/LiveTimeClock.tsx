import React, { FC } from 'react';
import Clock from 'react-live-clock';
import styled from 'styled-components';

const LiveTimeClock: FC = (): JSX.Element => {
  return (
    <ClockWrapper>
      <Clock format={'HH:mm:ss'} ticking={true} timezone={'CET'} />
      <TimeZone>CEST</TimeZone>
    </ClockWrapper>
  );
};

const ClockWrapper = styled.div`
  display: flex;
`;

const TimeZone = styled.div`
  padding-left: 10px;
`;

export default LiveTimeClock;
