import React from 'react';
import {ProgressChart} from 'react-native-chart-kit';
import useTheme from '../../../hooks/theme/useTheme';

type Chart = {
  percentage: number;
  backgroundColor?: string;
  completedColor?: string;
  activeColor?: string;
  strokeWidth?: number;
  width?: number;
  height?: number;
  radius?: number;
  borderRadius?: number;
};

const ChartProgress: React.FC<Chart> = ({
  borderRadius,
  radius,
  height,
  width,
  strokeWidth,
  percentage,
  backgroundColor,
  completedColor,
  activeColor,
  ...props
}) => {
  const {palette} = useTheme();
  const primaryColor = palette?.primary || '#0000f4';
  const disabledColor = palette?.disabledColor || '#cccccc';
  //   const secondaryColor = activeApp?.data?.modules?.core?.theme?.palette?.secondary || '#cccccc';
  const secondaryColor = palette?.secondary || '#cccccc';
  return (
    <ProgressChart
      data={[percentage || 0]}
      width={width || 40}
      height={height || 40}
      strokeWidth={strokeWidth || 12}
      radius={radius || 12}
      hideLegend={true}
      chartConfig={{
        backgroundColor: backgroundColor || '#fafafa',
        backgroundGradientFrom: backgroundColor || '#fafafa',
        backgroundGradientTo: backgroundColor || '#fafafa',
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => {
          if (percentage === 1) {
            return completedColor || secondaryColor;
          }
          return `${activeColor || primaryColor}${(opacity * 255).toString(
            16,
          )}`;
        },
        style: {
          borderRadius: borderRadius || 2,
        },
      }}
    />
  );
};

export default ChartProgress;
