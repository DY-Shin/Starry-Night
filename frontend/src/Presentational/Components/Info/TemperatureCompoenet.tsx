import React from 'react';
import CountUp from 'react-countup';
import * as TemperatureStyle from './TemperatureComponent_Style';

function TemperatureComponent(props: { temperature: string }) {
  const { temperature } = props;
  const convertTemperature = Number(temperature) + 10;
  return (
    <TemperatureStyle.TemperWrapper>
      <TemperatureStyle.ThermometerContainer>
        <TemperatureStyle.Thermometer>
          <TemperatureStyle.Stem>
            <TemperatureStyle.Fluid percent={convertTemperature} />
          </TemperatureStyle.Stem>
        </TemperatureStyle.Thermometer>
        <TemperatureStyle.Base />
      </TemperatureStyle.ThermometerContainer>
      <TemperatureStyle.TemperTextWrapper>
        <CountUp start={0} end={convertTemperature - 10} duration={4} className="temperText" />°
      </TemperatureStyle.TemperTextWrapper>
    </TemperatureStyle.TemperWrapper>
  );
}

export default TemperatureComponent;
